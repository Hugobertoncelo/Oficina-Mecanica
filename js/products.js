const PRODUCTS_DATA = [
  // Pneus 
  { id: 1, name: "Pneu Aro 13 Convencional", price: 299.90, img: "https://images-americanas.b2w.io/produtos/4703562771/imagens/pneu-itaro-aro-16-it203-195-55r16-91v-xl/4703562835_1_large.jpg", category: "pneus" },
  { id: 2, name: "Pneu Aro 14 Standard", price: 349.90, img: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18565r15-continental-ultracontact-88h-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&format=jpeg", category: "pneus" },
  { id: 3, name: "Pneu Aro 15 Performance", price: 419.90, img: "https://cdn.iset.io/assets/42004/produtos/3429/westlake-205-50-r15-89v-sport-rs-01-2.jpg", category: "pneus" },
  { id: 4, name: "Pneu Aro 16 Esportivo", price: 499.90, img: "https://www.pitonipneus.com.br/media/tmp/webp/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/n/pneu-285-75-r16-roadcruza-ra3200-pitoni-pneus.webp", category: "pneus" },
  { id: 5, name: "Pneu Fusca", price: 589.90, img: "https://paulinhomotos.fbitsstatic.net/img/p/pneu-technic-t-700-5-60-15-79p-tt-dianteiro-traseiro-volkswagen-fusca-80534/274497.jpg?w=565&h=565&v=no-change&qs=ignore", category: "pneus" },
  { id: 6, name: "Pneu Aro 18 Ultra Grip", price: 679.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Aro18", category: "pneus" },
  { id: 7, name: "Pneu Aro 19 Motorsport", price: 799.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Aro19", category: "pneus" },
  { id: 8, name: "Pneu Aro 20 SUV Pro", price: 899.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Aro20", category: "pneus" },
  { id: 9, name: "Pneu All Season Light", price: 389.90, img: "https://placehold.co/100x100/555/white?text=Pneu+AllSeason", category: "pneus" },
  { id: 10, name: "Pneu Off-Road Extreme", price: 759.90, img: "https://placehold.co/100x100/555/white?text=Pneu+OffRoad", category: "pneus" },
  { id: 11, name: "Pneu de Inverno Ice Control", price: 529.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Inverno", category: "pneus" },
  { id: 12, name: "Pneu Ecológico Green Motion", price: 319.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Eco", category: "pneus" },
  { id: 13, name: "Pneu Radial Duramax", price: 459.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Radial", category: "pneus" },
  { id: 14, name: "Pneu Run-Flat Safety Plus", price: 699.90, img: "https://placehold.co/100x100/555/white?text=Pneu+RunFlat", category: "pneus" },
  { id: 15, name: "Pneu para Carros de Luxo", price: 929.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Luxo", category: "pneus" },
  { id: 16, name: "Pneu para Caminhonetes Fora de Estrada", price: 819.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Pickup", category: "pneus" },
  { id: 17, name: "Pneu para Veículos Compactos City", price: 279.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Compacto", category: "pneus" },
  { id: 18, name: "Pneu de Competição Slick Track", price: 1100.00, img: "https://placehold.co/100x100/555/white?text=Pneu+Slick", category: "pneus" },
  { id: 19, name: "Pneu para Chuva Aqua Jet", price: 549.90, img: "https://placehold.co/100x100/555/white?text=Pneu+Chuva", category: "pneus" },
  { id: 20, name: "Pneu de Estepe Fino", price: 189.90, img: "https://placehold.co/100x100/555/white?text=Estepe", category: "pneus" },

  // Freios 
  { id: 21, name: "Pastilhas de Freio Cerâmicas Xtreme", price: 189.90, img: "https://placehold.co/100x100/3498db/white?text=Pastilha", category: "freios" },
  { id: 22, name: "Disco de Freio Ventilado Performance", price: 329.90, img: "https://placehold.co/100x100/3498db/white?text=Disco", category: "freios" },
  { id: 23, name: "Pinça de Freio 4 Pistões Racing", price: 899.90, img: "https://placehold.co/100x100/3498db/white?text=Pinça", category: "freios" },
  { id: 24, name: "Fluido de Freio DOT 4 Premium", price: 59.90, img: "https://placehold.co/100x100/3498db/white?text=Fluido", category: "freios" },
  { id: 25, name: "Kit de Freio Completo Dianteiro Esportivo", price: 1300.00, img: "https://placehold.co/100x100/3498db/white?text=Kit+Freio", category: "freios" },
  { id: 26, name: "Sensor ABS Roda Dianteira", price: 99.90, img: "https://placehold.co/100x100/3498db/white?text=Sensor+ABS", category: "freios" },
  { id: 27, name: "Tambor de Freio Traseiro Reforçado", price: 219.90, img: "https://placehold.co/100x100/3498db/white?text=Tambor", category: "freios" },
  { id: 28, name: "Sapata de Freio de Estacionamento", price: 79.90, img: "https://placehold.co/100x100/3498db/white?text=Sapata", category: "freios" },
  { id: 29, name: "Servo Freio a Vácuo Master", price: 450.00, img: "https://placehold.co/100x100/3498db/white?text=Servo", category: "freios" },
  { id: 30, name: "Mangueira de Freio Aeroquip Inox", price: 149.90, img: "https://placehold.co/100x100/3498db/white?text=Mangueira", category: "freios" },
  { id: 31, name: "Cilindro Mestre de Freio Duplo", price: 289.90, img: "https://placehold.co/100x100/3498db/white?text=Cilindro", category: "freios" },
  { id: 32, name: "Pastilhas de Freio Semimetálicas", price: 129.90, img: "https://placehold.co/100x100/3498db/white?text=Pastilha+Semi", category: "freios" },
  { id: 33, name: "Disco de Freio Sólido OEM", price: 199.90, img: "https://placehold.co/100x100/3498db/white?text=Disco+Solido", category: "freios" },
  { id: 34, name: "Kit de Reparo Pinça de Freio", price: 69.90, img: "https://placehold.co/100x100/3498db/white?text=Reparo+Pinca", category: "freios" },
  { id: 35, name: "Lona de Freio Traseira Durável", price: 89.90, img: "https://placehold.co/100x100/3498db/white?text=Lona+Freio", category: "freios" },
  { id: 36, name: "Mola de Retorno da Pastilha", price: 29.90, img: "https://placehold.co/100x100/3498db/white?text=Mola+Pastilha", category: "freios" },
  { id: 37, name: "Parafuso Guia da Pinça", price: 15.00, img: "https://placehold.co/100x100/3498db/white?text=Parafuso", category: "freios" },
  { id: 38, name: "Sangrador de Fluido de Freio", price: 49.90, img: "https://placehold.co/100x100/3498db/white?text=Sangrador", category: "freios" },
  { id: 39, name: "Kit de Retentores de Cilindro", price: 39.90, img: "https://placehold.co/100x100/3498db/white?text=Retentores", category: "freios" },
  { id: 40, name: "Protetor de Disco de Freio", price: 75.00, img: "https://placehold.co/100x100/3498db/white?text=Protetor", category: "freios" },

  // Ignição 
  { id: 41, name: "Vela de Ignição Iridium Power", price: 75.00, img: "https://placehold.co/100x100/e74c3c/white?text=Vela+Iridium", category: "ignicao" },
  { id: 42, name: "Bobina de Ignição Eletrônica", price: 210.00, img: "https://placehold.co/100x100/e74c3c/white?text=Bobina+Ignicao", category: "ignicao" },
  { id: 43, name: "Cabo de Vela Silicone 8mm", price: 110.00, img: "https://placehold.co/100x100/e74c3c/white?text=Cabo+Vela", category: "ignicao" },
  { id: 44, name: "Módulo de Ignição CDI", price: 320.00, img: "https://placehold.co/100x100/e74c3c/white?text=Modulo+CDI", category: "ignicao" },
  { id: 45, name: "Distribuidor Eletrônico Completo", price: 480.00, img: "https://placehold.co/100x100/e74c3c/white?text=Distribuidor", category: "ignicao" },
  { id: 46, name: "Rotor do Distribuidor Original", price: 45.00, img: "https://placehold.co/100x100/e74c3c/white?text=Rotor", category: "ignicao" },
  { id: 47, name: "Tampa do Distribuidor Carbon", price: 65.00, img: "https://placehold.co/100x100/e74c3c/white?text=Tampa+Dist", category: "ignicao" },
  { id: 48, name: "Sensor de Posição do Virabrequim", price: 130.00, img: "https://placehold.co/100x100/e74c3c/white?text=Sensor+Virab", category: "ignicao" },
  { id: 49, name: "Bateria de Alta Performance 70Ah", price: 550.00, img: "https://placehold.co/100x100/e74c3c/white?text=Bateria+70Ah", category: "ignicao" },
  { id: 50, name: "Alternador Reforçado 140A", price: 720.00, img: "https://placehold.co/100x100/e74c3c/white?text=Alternador", category: "ignicao" },
  { id: 51, name: "Motor de Partida Compacto", price: 380.00, img: "https://placehold.co/100x100/e74c3c/white?text=Motor+Partida", category: "ignicao" },
  { id: 52, name: "Chave de Ignição Codificada", price: 290.00, img: "https://placehold.co/100x100/e74c3c/white?text=Chave+Ignicao", category: "ignicao" },
  { id: 53, name: "Cabo de Bateria Reforçado 25mm", price: 85.00, img: "https://placehold.co/100x100/e74c3c/white?text=Cabo+Bateria", category: "ignicao" },
  { id: 54, name: "Fusível de Ignição Kit", price: 35.00, img: "https://placehold.co/100x100/e74c3c/white?text=Fusivel+Kit", category: "ignicao" },
  { id: 55, name: "Relé de Bomba de Combustível", price: 55.00, img: "https://placehold.co/100x100/e74c3c/white?text=Rele+Bomba", category: "ignicao" },
  { id: 56, name: "Sensor de Posição do Acelerador", price: 160.00, img: "https://placehold.co/100x100/e74c3c/white?text=Sensor+Acel", category: "ignicao" },
  { id: 57, name: "Vela de Ignição Platina", price: 40.00, img: "https://placehold.co/100x100/e74c3c/white?text=Vela+Platina", category: "ignicao" },
  { id: 58, name: "Módulo de Controle do Motor (ECU)", price: 1500.00, img: "https://placehold.co/100x100/e74c3c/white?text=ECU", category: "ignicao" },
  { id: 59, name: "Kit de Reparo Bobina de Ignição", price: 95.00, img: "https://placehold.co/100x100/e74c3c/white?text=Reparo+Bobina", category: "ignicao" },
  { id: 60, name: "Cabo Terra Adicional", price: 30.00, img: "https://placehold.co/100x100/e74c3c/white?text=Cabo+Terra", category: "ignicao" },

  // Suspensão 
  { id: 61, name: "Amortecedor Gás Dianteiro", price: 350.00, img: "https://placehold.co/100x100/27ae60/white?text=Amortecedor", category: "suspensao" },
  { id: 62, name: "Mola Esportiva Baixa", price: 280.00, img: "https://placehold.co/100x100/27ae60/white?text=Mola+Esportiva", category: "suspensao" },
  { id: 63, name: "Bandeja de Suspensão Forjada", price: 420.00, img: "https://placehold.co/100x100/27ae60/white?text=Bandeja", category: "suspensao" },
  { id: 64, name: "Barra Estabilizadora Regulável", price: 550.00, img: "https://placehold.co/100x100/27ae60/white?text=Barra+Est", category: "suspensao" },
  { id: 65, name: "Kit Buchas Poliuretano Completo", price: 180.00, img: "https://placehold.co/100x100/27ae60/white?text=Kit+Buchas", category: "suspensao" },
  { id: 66, name: "Coxim do Amortecedor Superior", price: 95.00, img: "https://placehold.co/100x100/27ae60/white?text=Coxim", category: "suspensao" },
  { id: 67, name: "Pivô de Suspensão Reforçado", price: 110.00, img: "https://placehold.co/100x100/27ae60/white?text=Pivo", category: "suspensao" },
  { id: 68, name: "Terminal de Direção Axial", price: 85.00, img: "https://placehold.co/100x100/27ae60/white?text=Terminal", category: "suspensao" },
  { id: 69, name: "Caixa de Direção Hidráulica Recondicionada", price: 680.00, img: "https://placehold.co/100x100/27ae60/white?text=Caixa+Dir", category: "suspensao" },
  { id: 70, name: "Bieleta Estabilizadora Dianteira", price: 70.00, img: "https://placehold.co/100x100/27ae60/white?text=Bieleta", category: "suspensao" },
  { id: 71, name: "Kit Suspensão a Rosca", price: 1100.00, img: "https://placehold.co/100x100/27ae60/white?text=Suspensao+Rosca", category: "suspensao" },
  { id: 72, name: "Amortecedor Hidráulico Traseiro", price: 290.00, img: "https://placehold.co/100x100/27ae60/white?text=Amortecedor+Hid", category: "suspensao" },
  { id: 73, name: "Mola Original Reposição", price: 160.00, img: "https://placehold.co/100x100/27ae60/white?text=Mola+Original", category: "suspensao" },
  { id: 74, name: "Kit Batentes Suspensão", price: 55.00, img: "https://placehold.co/100x100/27ae60/white?text=Kit+Batentes", category: "suspensao" },
  { id: 75, name: "Braço Oscilante Inferior Esquerdo", price: 230.00, img: "https://placehold.co/100x100/27ae60/white?text=Braco+Oscilante", category: "suspensao" },
  { id: 76, name: "Coifa da Homocinética Kit", price: 45.00, img: "https://placehold.co/100x100/27ae60/white?text=Coifa", category: "suspensao" },
  { id: 77, name: "Rolamento de Roda Dianteiro", price: 130.00, img: "https://placehold.co/100x100/27ae60/white?text=Rolamento+Roda", category: "suspensao" },
  { id: 78, name: "Kit Reparo Caixa de Direção", price: 120.00, img: "https://placehold.co/100x100/27ae60/white?text=Reparo+Caixa", category: "suspensao" },
  { id: 79, name: "Grampo de Mola Reforçado", price: 30.00, img: "https://placehold.co/100x100/27ae60/white?text=Grampo+Mola", category: "suspensao" },
  { id: 80, name: "Suporte de Bandeja Superior", price: 150.00, img: "https://placehold.co/100x100/27ae60/white?text=Suporte+Bandeja", category: "suspensao" },

  // Motor 
  { id: 81, name: "Filtro de Ar Esportivo Cônico", price: 110.00, img: "https://placehold.co/100x100/f39c12/white?text=Filtro+Ar", category: "motor" },
  { id: 82, name: "Bomba de Combustível Elétrica", price: 280.00, img: "https://placehold.co/100x100/f39c12/white?text=Bomba+Comb", category: "motor" },
  { id: 83, name: "Radiador de Alumínio Performance", price: 650.00, img: "https://placehold.co/100x100/f39c12/white?text=Radiador", category: "motor" },
  { id: 84, name: "Correia Dentada PowerGrip", price: 90.00, img: "https://placehold.co/100x100/f39c12/white?text=Correia+Dent", category: "motor" },
  { id: 85, name: "Válvula Termostática Baixa Temp", price: 70.00, img: "https://placehold.co/100x100/f39c12/white?text=Valvula+Term", category: "motor" },
  { id: 86, name: "Bomba de Óleo Alto Volume", price: 350.00, img: "https://placehold.co/100x100/f39c12/white?text=Bomba+Oleo", category: "motor" },
  { id: 87, name: "Virabrequim Forjado Competição", price: 1800.00, img: "https://placehold.co/100x100/f39c12/white?text=Virabrequim", category: "motor" },
  { id: 88, name: "Pistão Forjado Alta Compressão", price: 600.00, img: "https://placehold.co/100x100/f39c12/white?text=Pistao+Forjado", category: "motor" },
  { id: 89, name: "Junta do Cabeçote Multicamadas", price: 140.00, img: "https://placehold.co/100x100/f39c12/white?text=Junta+Cab", category: "motor" },
  { id: 90, name: "Coletor de Admissão Polido", price: 780.00, img: "https://placehold.co/100x100/f39c12/white?text=Coletor+Adm", category: "motor" },
  { id: 91, name: "Cárter de Óleo Esportivo", price: 390.00, img: "https://placehold.co/100x100/f39c12/white?text=Carter+Oleo", category: "motor" },
  { id: 92, name: "Válvula de Admissão Original", price: 80.00, img: "https://placehold.co/100x100/f39c12/white?text=Valvula+Adm", category: "motor" },
  { id: 93, name: "Biela Forjada H-Beam", price: 450.00, img: "https://placehold.co/100x100/f39c12/white?text=Biela+Forjada", category: "motor" },
  { id: 94, name: "Comando de Válvulas Preparado", price: 620.00, img: "https://placehold.co/100x100/f39c12/white?text=Comando+Valv", category: "motor" },
  { id: 95, name: "Turbina de Alta Performance GT28", price: 2500.00, img: "https://placehold.co/100x100/f39c12/white?text=Turbina", category: "motor" },
  { id: 96, name: "Intercooler Frontal Grande", price: 980.00, img: "https://placehold.co/100x100/f39c12/white?text=Intercooler", category: "motor" },
  { id: 97, name: "Sensor de Detonação OEM", price: 110.00, img: "https://placehold.co/100x100/f39c12/white?text=Sensor+Det", category: "motor" },
  { id: 98, name: "Polia do Virabrequim Aliv", price: 190.00, img: "https://placehold.co/100x100/f39c12/white?text=Polia+Vira", category: "motor" },
  { id: 99, name: "Kit de Juntas do Motor Completo", price: 410.00, img: "https://placehold.co/100x100/f39c12/white?text=Kit+Juntas", category: "motor" },
  { id: 100, name: "Tensor da Correia Dentada", price: 65.00, img: "https://placehold.co/100x100/f39c12/white?text=Tensor+Correia", category: "motor" },

  // Fluidos 
  { id: 101, name: "Óleo de Motor Sintético 5W30", price: 60.00, img: "https://placehold.co/100x100/9b59b6/white?text=Oleo+Motor", category: "fluidos" },
  { id: 102, name: "Aditivo de Combustível Limpeza", price: 40.00, img: "https://placehold.co/100x100/9b59b6/white?text=Aditivo+Comb", category: "fluidos" },
  { id: 103, name: "Líquido de Arrefecimento Rosa Concentrado", price: 80.00, img: "https://placehold.co/100x100/9b59b6/white?text=Liq+Arref", category: "fluidos" },
  { id: 104, name: "Óleo de Câmbio Manual GL-4", price: 70.00, img: "https://placehold.co/100x100/9b59b6/white?text=Oleo+Cambio", category: "fluidos" },
  { id: 105, name: "Fluido de Direção Hidráulica Verde", price: 50.00, img: "https://placehold.co/100x100/9b59b6/white?text=Fluido+Direcao", category: "fluidos" },
  { id: 106, name: "Graxa de Lítio Branca", price: 30.00, img: "https://placehold.co/100x100/9b59b6/white?text=Graxa", category: "fluidos" },
  { id: 107, name: "Desengripante Multiuso Aerosol", price: 25.00, img: "https://placehold.co/100x100/9b59b6/white?text=Desengripante", category: "fluidos" },
  { id: 108, name: "Limpa Contato Elétrico Spray", price: 35.00, img: "https://placehold.co/100x100/9b59b6/white?text=Limpa+Contato", category: "fluidos" },
  { id: 109, name: "Silicone para Juntas Vermelho", price: 45.00, img: "https://placehold.co/100x100/9b59b6/white?text=Silicone", category: "fluidos" },
  { id: 110, name: "Água Desmineralizada 5L", price: 15.00, img: "https://placehold.co/100x100/9b59b6/white?text=Agua+Desm", category: "fluidos" },
  { id: 111, name: "Fluido para Radiador Azul", price: 55.00, img: "https://placehold.co/100x100/9b59b6/white?text=Fluido+Radiador", category: "fluidos" },
  { id: 112, name: "Óleo para Freio DOT 3", price: 30.00, img: "https://placehold.co/100x100/9b59b6/white?text=Oleo+Freio", category: "fluidos" },
  { id: 113, name: "Aditivo para Óleo Redutor Fricção", price: 65.00, img: "https://placehold.co/100x100/9b59b6/white?text=Aditivo+Oleo", category: "fluidos" },
  { id: 114, name: "Limpa Para-brisa Concentrado", price: 20.00, img: "https://placehold.co/100x100/9b59b6/white?text=Limpa+Parabrisa", category: "fluidos" },
  { id: 115, name: "Fluido para Embreagem Hidráulica", price: 48.00, img: "https://placehold.co/100x100/9b59b6/white?text=Fluido+Emb", category: "fluidos" },
  { id: 116, name: "Anticorrosivo para Sistema de Arrefecimento", price: 70.00, img: "https://placehold.co/100x100/9b59b6/white?text=Anticorrosivo", category: "fluidos" },
  { id: 117, name: "Shampoo Automotivo Concentrado", price: 35.00, img: "https://placehold.co/100x100/9b59b6/white?text=Shampoo+Auto", category: "fluidos" },
  { id: 118, name: "Polidor de Metais Cromados", price: 42.00, img: "https://placehold.co/100x100/9b59b6/white?text=Polidor+Metais", category: "fluidos" },
  { id: 119, name: "Cera Líquida para Carro", price: 58.00, img: "https://placehold.co/100x100/9b59b6/white?text=Cera+Liquida", category: "fluidos" },
  { id: 120, name: "Limpa Bicos Injetores", price: 60.00, img: "https://placehold.co/100x100/9b59b6/white?text=Limpa+Bicos", category: "fluidos" },

  // Escapamento 
  { id: 121, name: "Ponteira de Escapamento Cromada Dupla", price: 160.00, img: "https://placehold.co/100x100/95a5a6/white?text=Ponteira+Dupla", category: "escapamento" },
  { id: 122, name: "Coletor de Escapamento 4x2x1", price: 550.00, img: "https://placehold.co/100x100/95a5a6/white?text=Coletor+4x2x1", category: "escapamento" },
  { id: 123, name: "Catalisador Universal Alta Vazão", price: 480.00, img: "https://placehold.co/100x100/95a5a6/white?text=Catalisador", category: "escapamento" },
  { id: 124, name: "Silencioso Traseiro Esportivo Inox", price: 320.00, img: "https://placehold.co/100x100/95a5a6/white?text=Silencioso+Inox", category: "escapamento" },
  { id: 125, name: "Tubulação de Escapamento Direta 2.5''", price: 270.00, img: "https://placehold.co/100x100/95a5a6/white?text=Tubulacao+Direta", category: "escapamento" },
  { id: 126, name: "Abraçadeira de Escapamento Reforçada", price: 35.00, img: "https://placehold.co/100x100/95a5a6/white?text=Abracadeira", category: "escapamento" },
  { id: 127, name: "Junta do Coletor de Escapamento", price: 45.00, img: "https://placehold.co/100x100/95a5a6/white?text=Junta+Coletor", category: "escapamento" },
  { id: 128, name: "Sensor de Oxigênio (Sonda Lambda)", price: 190.00, img: "https://placehold.co/100x100/95a5a6/white?text=Sonda+Lambda", category: "escapamento" },
  { id: 129, name: "Kit de Escapamento Completo Esportivo", price: 1800.00, img: "https://placehold.co/100x100/95a5a6/white?text=Kit+Escapamento", category: "escapamento" },
  { id: 130, name: "Protetor Térmico de Escapamento Adesivo", price: 110.00, img: "https://placehold.co/100x100/95a5a6/white?text=Protetor+Termico", category: "escapamento" },
  { id: 131, name: "Flexível de Escapamento Inox", price: 130.00, img: "https://placehold.co/100x100/95a5a6/white?text=Flexivel+Inox", category: "escapamento" },
  { id: 132, name: "Suporte de Escapamento Borracha", price: 25.00, img: "https://placehold.co/100x100/95a5a6/white?text=Suporte+Escap", category: "escapamento" },
  { id: 133, name: "Flange de Escapamento 3''", price: 85.00, img: "https://placehold.co/100x100/95a5a6/white?text=Flange+Escap", category: "escapamento" },
  { id: 134, name: "Parafuso de Escapamento M8", price: 12.00, img: "https://placehold.co/100x100/95a5a6/white?text=Parafuso+Escap", category: "escapamento" },
  { id: 135, name: "Cinta de Escapamento Universal", price: 40.00, img: "https://placehold.co/100x100/95a5a6/white?text=Cinta+Escap", category: "escapamento" },
  { id: 136, name: "Silencioso Intermediário", price: 210.00, img: "https://placehold.co/100x100/95a5a6/white?text=Silencioso+Int", category: "escapamento" },
  { id: 137, name: "Defletor de Escapamento", price: 60.00, img: "https://placehold.co/100x100/95a5a6/white?text=Defletor", category: "escapamento" },
  { id: 138, name: "Válvula de Escapamento Ativa", price: 700.00, img: "https://placehold.co/100x100/95a5a6/white?text=Valvula+Ativa", category: "escapamento" },
  { id: 139, name: "Kit Parafusos Coletor", price: 50.00, img: "https://placehold.co/100x100/95a5a6/white?text=Parafusos+Coletor", category: "escapamento" },
  { id: 140, name: "Capa de Ponteira Carbono", price: 90.00, img: "https://placehold.co/100x100/95a5a6/white?text=Capa+Ponteira", category: "escapamento" },

  // Iluminação 
  { id: 141, name: "Farol de LED DRL Integrado", price: 290.00, img: "https://placehold.co/100x100/1abc9c/white?text=Farol+LED", category: "iluminacao" },
  { id: 142, name: "Lanterna Traseira LED Sequencial", price: 380.00, img: "https://placehold.co/100x100/1abc9c/white?text=Lanterna+LED", category: "iluminacao" },
  { id: 143, name: "Lâmpada Halógena H7 Super Branca", price: 70.00, img: "https://placehold.co/100x100/1abc9c/white?text=Lampada+H7", category: "iluminacao" },
  { id: 144, name: "Kit Xenon HID 8000K", price: 220.00, img: "https://placehold.co/100x100/1abc9c/white?text=Kit+Xenon", category: "iluminacao" },
  { id: 145, name: "Luz de Placa LED Branca", price: 40.00, img: "https://placehold.co/100x100/1abc9c/white?text=Luz+Placa", category: "iluminacao" },
  { id: 146, name: "Luz Interna de Teto LED", price: 50.00, img: "https://placehold.co/100x100/1abc9c/white?text=Luz+Teto", category: "iluminacao" },
  { id: 147, name: "Farol de Milha LED Universal", price: 150.00, img: "https://placehold.co/100x100/1abc9c/white?text=Farol+Milha", category: "iluminacao" },
  { id: 148, name: "Sinaleira Direcional LED Slim", price: 90.00, img: "https://placehold.co/100x100/1abc9c/white?text=Sinaleira+LED", category: "iluminacao" },
  { id: 149, name: "Lâmpada de Freio LED Duplo Polo", price: 65.00, img: "https://placehold.co/100x100/1abc9c/white?text=Lampada+Freio", category: "iluminacao" },
  { id: 150, name: "Reator de Xenon Fino", price: 110.00, img: "https://placehold.co/100x100/1abc9c/white?text=Reator+Xenon", category: "iluminacao" },
  { id: 151, name: "Chicote para Farol de Milha", price: 80.00, img: "https://placehold.co/100x100/1abc9c/white?text=Chicote+Farol", category: "iluminacao" },
  { id: 152, name: "Lâmpada de Ré LED Potente", price: 55.00, img: "https://placehold.co/100x100/1abc9c/white?text=Lampada+Re", category: "iluminacao" },
  { id: 153, name: "Luz de Teto Traseira LED", price: 45.00, img: "https://placehold.co/100x100/1abc9c/white?text=Luz+Teto+Tras", category: "iluminacao" },
  { id: 154, name: "Conector de Lâmpada H4 Cerâmico", price: 20.00, img: "https://placehold.co/100x100/1abc9c/white?text=Conector+H4", category: "iluminacao" },
  { id: 155, name: "Capa de Farol Fumê", price: 75.00, img: "https://placehold.co/100x100/1abc9c/white?text=Capa+Farol", category: "iluminacao" },
  { id: 156, name: "Kit Lâmpadas Internas LED", price: 90.00, img: "https://placehold.co/100x100/1abc9c/white?text=Kit+Luz+Int", category: "iluminacao" },
  { id: 157, name: "Barra de LED Off-Road 20''", price: 300.00, img: "https://placehold.co/100x100/1abc9c/white?text=Barra+LED", category: "iluminacao" },
  { id: 158, name: "Lâmpada Super Branca H1", price: 60.00, img: "https://placehold.co/100x100/1abc9c/white?text=Lampada+H1", category: "iluminacao" },
  { id: 159, name: "Luz de Cortesia LED Porta", price: 70.00, img: "https://placehold.co/100x100/1abc9c/white?text=Luz+Cortesia", category: "iluminacao" },
  { id: 160, name: "Kit Lâmpada Neblina LED", price: 180.00, img: "https://placehold.co/100x100/1abc9c/white?text=Kit+Neblina", category: "iluminacao" }
];

const products = PRODUCTS_DATA;

const productsContainer = document.getElementById("productsContainer");
const categoryButtons = document.querySelectorAll(".category-button");
const productSearchInput = document.getElementById("product-search");
const showMoreButton = document.getElementById("show-more-button");
const showLessButton = document.getElementById("show-less-button");

const PRODUCTS_PER_LOAD = 12;
const MIN_DISPLAY_LIMIT = 12;
let currentLoadedProducts = 0;
let currentFilteredProducts = [];

function displayProducts(productsToRender) {
  productsContainer.innerHTML = "";
  if (productsToRender.length === 0) {
    productsContainer.innerHTML = '<p style="text-align: center; color: #777; margin-top: 30px; grid-column: 1 / -1;">Nenhum produto encontrado para sua seleção.</p>';
    showMoreButton.style.display = 'none';
    showLessButton.style.display = 'none';
    return;
  }
  if (currentLoadedProducts === 0 || productsToRender !== currentFilteredProducts) {
    currentLoadedProducts = Math.min(PRODUCTS_PER_LOAD, productsToRender.length);
  }
  const productsToDisplay = productsToRender.slice(0, currentLoadedProducts);
  productsToDisplay.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
          <img src="${product.img}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>R$ ${product.price.toFixed(2).replace(".", ",")}</p>
          <button
              class="buy-button"
              data-id="${product.id}"
              data-name="${product.name}"
              data-price="${product.price}"
              data-img="${product.img}"
          >
              Comprar
          </button>
      `;
    productsContainer.appendChild(productItem);
  });
  if (currentLoadedProducts < productsToRender.length) {
    showMoreButton.style.display = 'block';
  } else {
    showMoreButton.style.display = 'none';
  }
  if (currentLoadedProducts > MIN_DISPLAY_LIMIT) {
    showLessButton.style.display = 'block';
  } else {
    showLessButton.style.display = 'none';
  }
  document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const productId = parseInt(event.target.dataset.id);
      const product = products.find(p => p.id === productId);
      if (product) {
        addToCart(product);
      }
    });
  });
}

function filterAndSearchProducts(category, searchTerm) {
  let filtered = products;
  if (category !== "all") {
    filtered = filtered.filter((product) => product.category === category);
  }
  if (searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.category.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
  currentFilteredProducts = filtered;
  currentLoadedProducts = 0;
  displayProducts(currentFilteredProducts);
}

document.addEventListener("DOMContentLoaded", () => {
  filterAndSearchProducts("all", "");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const category = button.dataset.category;
      const currentSearchTerm = productSearchInput.value;
      filterAndSearchProducts(category, currentSearchTerm);
    });
  });
  productSearchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value;
    const activeCategoryButton = document.querySelector(
      ".category-button.active"
    );
    const currentCategory = activeCategoryButton
      ? activeCategoryButton.dataset.category
      : "all";
    filterAndSearchProducts(currentCategory, searchTerm);
  });
  showMoreButton.addEventListener('click', () => {
    currentLoadedProducts += PRODUCTS_PER_LOAD;
    if (currentLoadedProducts > currentFilteredProducts.length) {
      currentLoadedProducts = currentFilteredProducts.length;
    }
    displayProducts(currentFilteredProducts);
  });
  showLessButton.addEventListener('click', () => {
    currentLoadedProducts -= PRODUCTS_PER_LOAD;
    if (currentLoadedProducts < MIN_DISPLAY_LIMIT) {
      currentLoadedProducts = MIN_DISPLAY_LIMIT;
    }
    displayProducts(currentFilteredProducts);
  });
});
