document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');
  const emptyCartMessage = document.getElementById('empty-cart-message');
  const globalMessageContainer = document.getElementById('message-container');
  const checkoutButton = document.getElementById('checkout-button');

  const cartIconContainer = document.getElementById('cart-icon-container');
  const cartCountBadge = document.getElementById('cart-count-badge');
  const cartModal = document.getElementById('cart-modal');
  const closeCartModalButton = document.getElementById('close-cart-modal');

  const paymentMessageContainer = document.getElementById('payment-message-container');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const showMessage = (message, type = 'success', container = globalMessageContainer) => {
    container.innerHTML = `<div class="store-message ${type}">${message}</div>`;
    if (container === paymentMessageContainer) {
      container.classList.add('show');
    }
    setTimeout(() => {
      container.innerHTML = '';
      if (container === paymentMessageContainer) {
        container.classList.remove('show');
      }
    }, 3000);
  };

  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const renderCart = () => {
    const currentCartProductItems = cartItemsContainer.querySelectorAll('.cart-item');
    currentCartProductItems.forEach(item => item.remove());

    if (cart.length === 0) {
      emptyCartMessage.style.display = 'block';
    } else {
      emptyCartMessage.style.display = 'none';
      cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" />
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>R$ ${item.price.toFixed(2).replace('.', ',')} x ${item.quantity}</p>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-button decrease" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-button increase" data-id="${item.id}">+</button>
                <button class="remove-item-button" data-id="${item.id}" aria-label="Remover ${item.name} do carrinho">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
          `;
        cartItemsContainer.appendChild(cartItemDiv);
      });
    }
    updateCartTotal();
    updateCartBadge();
  };

  const updateCartTotal = () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalSpan.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  };

  const updateCartBadge = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountBadge.textContent = totalItems;
    cartCountBadge.style.display = totalItems > 0 ? 'flex' : 'none';
  };

  const addItemToCart = (id, name, price, img) => {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
      showMessage(`${name} quantidade atualizada para ${existingItem.quantity}!`, 'success');
    } else {
      cart.push({ id, name, price, img, quantity: 1 });
      showMessage(`${name} foi adicionado ao carrinho!`, 'success');
    }
    saveCart();
    renderCart();
  };

  const updateItemQuantity = (id, change) => {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      cart[itemIndex].quantity += change;
      if (cart[itemIndex].quantity <= 0) {
        const removedItemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        showMessage(`${removedItemName} removido do carrinho.`, 'info');
      } else {
        showMessage(`${cart[itemIndex].name} quantidade atualizada para ${cart[itemIndex].quantity}!`, 'info');
      }
      saveCart();
      renderCart();
    }
  };

  const processPayment = (paymentMethod, total) => {
    let message = '';
    let type = 'success';

    if (total === 0) {
      showMessage('Não há itens no carrinho para finalizar a compra.', 'warning', paymentMessageContainer);
      return;
    }

    switch (paymentMethod) {
      case 'creditCard':
        message = `Pagamento de R$ ${total.toFixed(2).replace('.', ',')} via Cartão de Crédito. Processando...`;
        type = 'info';
        break;
      case 'boleto':
        message = `Gerando Boleto Bancário no valor de R$ ${total.toFixed(2).replace('.', ',')}. Verifique seu e-mail.`;
        type = 'info';
        break;
      case 'pix':
        message = `Gerando código Pix para R$ ${total.toFixed(2).replace('.', ',')}. Copie e pague!`;
        type = 'info';
        break;
      default:
        message = 'Selecione uma forma de pagamento para continuar.';
        type = 'warning';
        break;
    }
    showMessage(message, type, paymentMessageContainer);

    if (type === 'info') {
      setTimeout(() => {
        cart = [];
        saveCart();
        renderCart();
        showMessage('Compra finalizada com sucesso! Seu carrinho foi esvaziado.', 'success', paymentMessageContainer);
      }, 2000);
    }
  };

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('buy-button')) {
      const button = event.target;
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const img = button.dataset.img;
      addItemToCart(id, name, price, img);
    }

    if (event.target.classList.contains('remove-item-button') || event.target.closest('.remove-item-button')) {
      const button = event.target.closest('.remove-item-button');
      const idToRemove = button.dataset.id;
      const itemIndex = cart.findIndex(item => item.id === idToRemove);
      if (itemIndex > -1) {
        const removedItemName = cart[itemIndex].name;
        cart.splice(itemIndex, 1);
        saveCart();
        renderCart();
        showMessage(`${removedItemName} removido do carrinho.`, 'info');
      }
    }

    if (event.target.classList.contains('quantity-button')) {
      const button = event.target;
      const id = button.dataset.id;
      if (button.classList.contains('increase')) {
        updateItemQuantity(id, 1);
      } else if (button.classList.contains('decrease')) {
        updateItemQuantity(id, -1);
      }
    }
  });

  checkoutButton.addEventListener('click', () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;

    if (cart.length === 0) {
      showMessage('Seu carrinho está vazio! Adicione alguns itens antes de finalizar a compra.', 'warning', paymentMessageContainer);
    } else if (!selectedPaymentMethod) {
      showMessage('Por favor, selecione uma forma de pagamento.', 'warning', paymentMessageContainer);
    } else {
      processPayment(selectedPaymentMethod, total);
    }
  });

  cartIconContainer.addEventListener('click', () => {
    cartModal.style.display = 'flex';
  });

  closeCartModalButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });

  renderCart();
});
