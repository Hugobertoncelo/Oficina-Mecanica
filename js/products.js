const PRODUCTS_DATA = [
  // Pneus 
  { id: 1, name: "Pneu Aro 13 Convencional", price: 299.90, img: "https://images-americanas.b2w.io/produtos/4703562771/imagens/pneu-itaro-aro-16-it203-195-55r16-91v-xl/4703562835_1_large.jpg", category: "pneus" },
  { id: 2, name: "Pneu Aro 14 Standard", price: 349.90, img: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18565r15-continental-ultracontact-88h-1.png?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=&format=jpeg", category: "pneus" },
  { id: 3, name: "Pneu Aro 15 Performance", price: 419.90, img: "https://cdn.iset.io/assets/42004/produtos/3429/westlake-205-50-r15-89v-sport-rs-01-2.jpg", category: "pneus" },
  { id: 4, name: "Pneu Aro 16 Esportivo", price: 499.90, img: "https://www.pitonipneus.com.br/media/tmp/webp/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/n/pneu-285-75-r16-roadcruza-ra3200-pitoni-pneus.webp", category: "pneus" },
  { id: 5, name: "Pneu Fusca", price: 589.90, img: "https://paulinhomotos.fbitsstatic.net/img/p/pneu-technic-t-700-5-60-15-79p-tt-dianteiro-traseiro-volkswagen-fusca-80534/274497.jpg?w=565&h=565&v=no-change&qs=ignore", category: "pneus" },
  { id: 6, name: "Pneu Aro 18 Ultra Grip", price: 679.90, img: "https://images.tcdn.com.br/img/img_prod/478291/kit_pneu_18_4_34_10_lonas_r_1_tubetype_tm95_pirelli_camara_56974_1_fbdf28384c8a18ba6b8711a364fc4996.jpg", category: "pneus" },
  { id: 7, name: "Pneu Aro 19 Motorsport", price: 799.90, img: "https://lebiscuit.vtexassets.com/arquivos/ids/3290815/16940267095331.jpg?v=638296725840000000&width=400&height=400&format=webp&quality=75", category: "pneus" },
  { id: 8, name: "Pneu Aro 20 SUV Pro", price: 899.90, img: "https://images.tcdn.com.br/img/img_prod/859329/pneu_wanli_aro_20_225_30r20_s_1088_85w_795_1_20201223091837.jpg", category: "pneus" },
  { id: 9, name: "Pneu All Season Light", price: 389.90, img: "https://cdn.allopneus.com/produit/0006575333/sideView/tire_full/200/bcf31126938dfb89bb976503584dacafc7eb7121_riken_all_seaosn_truck_profil.jpg", category: "pneus" },
  { id: 10, name: "Pneu Off-Road Extreme", price: 759.90, img: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-33x12-50r17-general-tire-grabber-x3-114q-1.png?optimize=high&bg-color=255%2C255%2C255&fit=bounds&height=300&width=300&format=jpeg", category: "pneus" },
  { id: 11, name: "Pneu de Inverno Ice Control", price: 529.90, img: "https://wheelsco.ca/cdn/shop/products/ice-zero-torta-1505470077947.jpg?v=1601342146", category: "pneus" },
  { id: 12, name: "Pneu Ecológico Green Motion", price: 319.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZscoXoduYAEyPJsoYM2TzbHUDFCLqe1SiPg&s", category: "pneus" },
  { id: 13, name: "Pneu Radial Duramax", price: 459.90, img: "https://ciapneus.cdn.magazord.com.br/img/2024/12/produto/10892/10015564.jpeg?ims=600x600", category: "pneus" },
  { id: 14, name: "Pneu Run-Flat Safety Plus", price: 699.90, img: "https://ciapneus.cdn.magazord.com.br/img/2024/12/produto/10787/10015448.jpeg?ims=600x600", category: "pneus" },
  { id: 15, name: "Pneu para Carros de Luxo", price: 929.90, img: "https://i.zst.com.br/thumbs/12/1c/18/1245701497.jpg", category: "pneus" },
  { id: 16, name: "Pneu para Caminhonetes Fora de Estrada", price: 819.90, img: "https://images.tcdn.com.br/img/img_prod/1055604/pneu_295_80_r22_5_t831_firestone_652_1_2bf2f593da0c227e3605cc38a7213fc5.jpg", category: "pneus" },
  { id: 17, name: "Pneu para Veículos Compactos City", price: 279.90, img: "https://http2.mlstatic.com/D_NQ_NP_638381-MLB75984374117_042024-O-pneu-400-8-carretinha-carrinho-carga-mini-veiculos-cb060.webp", category: "pneus" },
  { id: 18, name: "Pneu de Competição Slick Track", price: 1100.00, img: "https://yokohama.com.br/images/produtos/competicao/a048.jpg", category: "pneus" },
  { id: 19, name: "Pneu para Chuva Aqua Jet", price: 549.90, img: "https://img.lojadomecanico.com.br/IMAGENS/63/866/291956095/pneuaro172-idany-5123048421.JPG", category: "pneus" },
  { id: 20, name: "Pneu de Estepe Fino", price: 189.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4jNQzDu1Z23k9brQ7YOTRr_HJb8ELMlIPw&s", category: "pneus" },

  // Freios 
  { id: 21, name: "Pastilhas de Freio Cerâmicas Xtreme", price: 189.90, img: "https://m.media-amazon.com/images/I/61Lot6bCoUL.jpg", category: "freios" },
  { id: 22, name: "Disco de Freio Ventilado Performance", price: 329.90, img: "https://http2.mlstatic.com/D_NQ_NP_699517-MLB69529503847_052023-O.webp", category: "freios" },
  { id: 23, name: "Pinça de Freio 4 Pistões Racing", price: 899.90, img: "https://http2.mlstatic.com/D_NQ_NP_640773-MLB76472033388_052024-O-pinca-de-freio-4-pistoes-dianteira.webp", category: "freios" },
  { id: 24, name: "Fluido de Freio DOT 4 Premium", price: 59.90, img: "https://http2.mlstatic.com/D_NQ_NP_870643-MLB69874372842_062023-O.webp", category: "freios" },
  { id: 25, name: "Kit de Freio Completo Dianteiro Esportivo", price: 1300.00, img: "https://dw0jruhdg6fis.cloudfront.net/producao/3451467/G/kit-284mm-chevette.webp", category: "freios" },
  { id: 26, name: "Sensor ABS Roda Dianteira", price: 99.90, img: "https://http2.mlstatic.com/D_NQ_NP_700032-MLB73390446551_122023-O-sensor-abs-roda-dianteira-gm-s10-24-flex-09-2010-2011-2012.webp", category: "freios" },
  { id: 27, name: "Tambor de Freio Traseiro Reforçado", price: 219.90, img: "https://tfckdr.vteximg.com.br/arquivos/ids/4264557-1000-1000/tambor-de-freio-traseiro-s10-4x24x4-12-cs-abs-scubo-1.jpg?v=638039794701270000", category: "freios" },
  { id: 28, name: "Sapata de Freio de Estacionamento", price: 79.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWETVqMChDslsRcjxITB3rAuf5K4AdDj72Gg&s", category: "freios" },
  { id: 29, name: "Servo Freio a Vácuo Master", price: 450.00, img: "https://rpoint-maverick-produtos.s3.amazonaws.com/loja/imagens/full/472109102r-servo-freio-hidrovacuo-renault-master-2-3-2014-2023-lateral.jpeg", category: "freios" },
  { id: 30, name: "Mangueira de Freio Aeroquip Inox", price: 149.90, img: "https://http2.mlstatic.com/D_NQ_NP_768160-MLB47104762937_082021-O-aeroquip-moto-pfreio-120cm-malha-de-aco-inox-4-arruelas.webp", category: "freios" },
  { id: 31, name: "Cilindro Mestre de Freio Duplo", price: 289.90, img: "https://images.tcdn.com.br/img/img_prod/796938/cilindro_mestre_freio_duplo_fusca_78_79_80_81_82_83_84_trw_29215_1_951711147954546787b12e23ac287326.jpg", category: "freios" },
  { id: 32, name: "Pastilhas de Freio Semimetálicas", price: 129.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlZs-_LhW0HwuPTtf7HL7LoWVPcA0buvyPg&s", category: "freios" },
  { id: 33, name: "Disco de Freio Sólido OEM", price: 199.90, img: "https://www.lyonparts.com.br/img/products/disco-de-freio-dianteiro-ventilado-4249G1_1_1200.jpg", category: "freios" },
  { id: 34, name: "Kit de Reparo Pinça de Freio", price: 69.90, img: "https://fortbras.vteximg.com.br/arquivos/ids/396412-460-460/kit-reparo-pinca-de-freio-audi-a6-94-a-2011-controil-c1567-hipervarejo-1.jpg?v=638367651505900000", category: "freios" },
  { id: 35, name: "Lona de Freio Traseira Durável", price: 89.90, img: "https://down-br.img.susercontent.com/file/cc5e3e5b9288cc7ec0a0761d1af0bfab", category: "freios" },
  { id: 36, name: "Mola de Retorno da Pastilha", price: 29.90, img: "https://http2.mlstatic.com/D_NQ_NP_859485-MLB72123718782_102023-O-trava-pastilha-mola-retorno-do-cabo-freio-tras-fiat-stilo.webp", category: "freios" },
  { id: 37, name: "Parafuso Guia da Pinça", price: 15.00, img: "https://images.tcdn.com.br/img/img_prod/758152/pino_guia_da_pinca_de_freio_completo_hr_mg_2338_14859_1_77141bf2381d2e365809bc65f9afe151.jpg", category: "freios" },
  { id: 38, name: "Sangrador de Fluido de Freio", price: 49.90, img: "https://leone.jetassets.com.br/produto/SG-1200_01.png", category: "freios" },
  { id: 39, name: "Kit de Retentores de Cilindro", price: 39.90, img: "https://images.tcdn.com.br/img/img_prod/799020/kit_cilindro_retentor_de_valvulas_guarnicao_de_valvulas_oleo_10w30_cg_150_original_honda_4975_2_02cf46eb0bb5282bec95e6a84fc9dfec.png", category: "freios" },
  { id: 40, name: "Protetor de Disco de Freio", price: 75.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9ysPV0NuTWcJ3TU-pF9cxPtAvp68waIT1w&s", category: "freios" },

  // Ignição 
  { id: 41, name: "Vela de Ignição Iridium Power", price: 75.00, img: "https://cdn.awsli.com.br/600x1000/2695/2695989/produto/263423119258c21d23d.jpg", category: "ignicao" },
  { id: 42, name: "Bobina de Ignição Eletrônica", price: 210.00, img: "https://tfdcu6.vtexassets.com/arquivos/ids/168606/46712.jpg?v=638126900846500000", category: "ignicao" },
  { id: 43, name: "Cabo de Vela Silicone 8mm", price: 110.00, img: "https://http2.mlstatic.com/D_NQ_NP_653553-MLB31201752197_062019-O-cabo-vela-silicone-amarelo-8mm-gol-ap-16-18-black-friday.webp", category: "ignicao" },
  { id: 44, name: "Módulo de Ignição CDI", price: 320.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyJddT-a0fHm1g_tiQh-eoM2o1FVEWibLAQ&s", category: "ignicao" },
  { id: 45, name: "Distribuidor Eletrônico Completo", price: 480.00, img: "https://images.tcdn.com.br/img/img_prod/1024593/distribuidor_eletronico_dodge_318_completo_0807_2433_1_aad70473f057334d4b3f11bd80f59adf.jpg", category: "ignicao" },
  { id: 46, name: "Rotor do Distribuidor Original", price: 45.00, img: "https://http2.mlstatic.com/D_NQ_NP_889136-MLB76754352321_052024-O-rotor-original-bosch-gol-g2-ap-mi-16-18-20-97-98-99-00-01.webp", category: "ignicao" },
  { id: 47, name: "Tampa do Distribuidor Carbon", price: 65.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JwPh6n74r3yEX3xpvJC6uMuLutVlgAWn0g&s", category: "ignicao" },
  { id: 48, name: "Sensor de Posição do Virabrequim", price: 130.00, img: "https://d3mi7368052s1h.cloudfront.net/Custom/Content/Products/10/45/1045717_sensor-posicao-virabrequim-vw-constellation-17-250e-24-250e_z1_637878769252982293.webp", category: "ignicao" },
  { id: 49, name: "Bateria de Alta Performance 70Ah", price: 550.00, img: "https://images.tcdn.com.br/img/img_prod/666313/bateria_automotiva_moura_70ah_m70kd_e_m60ke_35_1_20181130103950.jpg", category: "ignicao" },
  { id: 50, name: "Alternador Reforçado 140A", price: 720.00, img: "https://chucar.com.br/wp-content/uploads/2024/09/fb6d34589b81ba110705276edba272e9.jpeg", category: "ignicao" },
  { id: 51, name: "Motor de Partida Compacto", price: 380.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3nEFOGqTkRK2QFvJPg7bD0gFU-qtNkvkFQ&s", category: "ignicao" },
  { id: 52, name: "Chave de Ignição Codificada", price: 290.00, img: "https://chaveirorodrigues.com.br/wp-content/uploads/2019/06/post_chave_codificada-1.jpg", category: "ignicao" },
  { id: 53, name: "Cabo de Bateria Reforçado 25mm", price: 85.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScewAi-AyHKgbU8bspgqXrLjjYht3E1Wn7Cw&s", category: "ignicao" },
  { id: 54, name: "Fusível de Ignição Kit", price: 35.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2VVfW6oRy1Wb4KeuCb66jKWBjWWMWa3b72w&s", category: "ignicao" },
  { id: 55, name: "Relé de Bomba de Combustível", price: 55.00, img: "https://dni.com.br/wp-content/uploads/2022/08/0129.jpg", category: "ignicao" },
  { id: 56, name: "Sensor de Posição do Acelerador", price: 160.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAL_a0aqAdS-eNBG8tYas1StMOGRMNP3iADA&s", category: "ignicao" },
  { id: 57, name: "Vela de Ignição Platina", price: 40.00, img: "https://31b93296e4855c6e.cdn.gocache.net/loja/imagens/full/vela-double-platinium-bosch01.png", category: "ignicao" },
  { id: 58, name: "Módulo de Controle do Motor (ECU)", price: 1500.00, img: "https://http2.mlstatic.com/D_NQ_NP_685162-CBT80523632090_112024-O.webp", category: "ignicao" },
  { id: 59, name: "Kit de Reparo Bobina de Ignição", price: 95.00, img: "https://http2.mlstatic.com/D_NQ_NP_872104-MLB44913443428_022021-O-kit-4-reparo-completo-da-bobina-ignico-isolador-corolla-18.webp", category: "ignicao" },
  { id: 60, name: "Cabo Terra Adicional", price: 30.00, img: "https://maringafitas.com.br/arquivos/produtos/imagens_adicionais/cabo-terra-5-metros-silkstar_784.jpg", category: "ignicao" },

  // Suspensão 
  { id: 61, name: "Amortecedor Gás Dianteiro", price: 350.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgVhcUob52fWIoJSOdqRuo2j6_t168zZj40w&s", category: "suspensao" },
  { id: 62, name: "Mola Esportiva Baixa", price: 280.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuG9W1hHvwyipZNAwV2lYSpI3a5lveQJeSEg&s", category: "suspensao" },
  { id: 63, name: "Bandeja de Suspensão Forjada", price: 420.00, img: "https://images.tcdn.com.br/img/img_prod/423787/bandeja_suspensao_ka_1996_a_2007_fiesta_importado_1994_a_1997_lado_esquerdo_bucha_hidr_bdj3051_lh_1626_1_20180109140331.jpg", category: "suspensao" },
  { id: 64, name: "Barra Estabilizadora Regulável", price: 550.00, img: "https://http2.mlstatic.com/D_NQ_NP_945236-MLB69393179951_052023-O-par-bieleta-barra-estabilizadora-regulavel-12mm-gr1002.webp", category: "suspensao" },
  { id: 65, name: "Kit Buchas Poliuretano Completo", price: 180.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9c0ZGPq5Mxo7rKYtC5h7vh7C1my8MUlv_Q&s", category: "suspensao" },
  { id: 66, name: "Coxim do Amortecedor Superior", price: 95.00, img: "https://images.cws.digital/produtos/gg/09/53/coxim-superior-do-amortecedor-dianteiro-1005309-1541711501566.jpg", category: "suspensao" },
  { id: 67, name: "Pivô de Suspensão Reforçado", price: 110.00, img: "https://http2.mlstatic.com/D_NQ_NP_870425-MLB73804335228_012024-O-kit-piv-da-suspenso-dianteira-completo-reforcado-kombi.webp", category: "suspensao" },
  { id: 68, name: "Terminal de Direção Axial", price: 85.00, img: "https://pecahoje.vteximg.com.br/arquivos/ids/197341-1000-1000/axial-dle-com-terminal-direcao-0070-rely-picape-van-v5-c1.jpg?v=638164967902170000", category: "suspensao" },
  { id: 69, name: "Caixa de Direção Hidráulica Recondicionada", price: 680.00, img: "https://http2.mlstatic.com/D_NQ_NP_2X_896747-MLB72851790187_112023-T-caixa-direco-hidraulica-palio-weekend-siena-strada-fire.webp", category: "suspensao" },
  { id: 70, name: "Bieleta Estabilizadora Dianteira", price: 70.00, img: "https://cornelio-maverick-produtos.s3.amazonaws.com/loja/imagens/full/bieleta-6.jpg", category: "suspensao" },
  { id: 71, name: "Kit Suspensão a Rosca", price: 1100.00, img: "https://www.gasnag.com.br/media/catalog/product/cache/1/image/580x580/9df78eab33525d08d6e5fb8d27136e95/s/u/suspensao_de_rosca_slim-m_1_10.png", category: "suspensao" },
  { id: 72, name: "Amortecedor Hidráulico Traseiro", price: 290.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9PpUi28IKtS2agfjAaJZyJOluhPSNKsDfA&s", category: "suspensao" },
  { id: 73, name: "Mola Original Reposição", price: 160.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2V_E7gs_5eMRh5NvdgJ_QR8v9MEvQUbCvQ&s", category: "suspensao" },
  { id: 74, name: "Kit Batentes Suspensão", price: 55.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDy53ePFTSYsCS7NdSvRUQLVi-8cGuq7fPbg&s", category: "suspensao" },
  { id: 75, name: "Braço Oscilante Inferior Esquerdo", price: 230.00, img: "https://www.gb.com.br/2022/wp-content/uploads/03806-2.jpg", category: "suspensao" },
  { id: 76, name: "Coifa da Homocinética Kit", price: 45.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwSHfXp0HBnxfcdOfML_KwCMLdkR938U_ng&s", category: "suspensao" },
  { id: 77, name: "Rolamento de Roda Dianteiro", price: 130.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6ZiWpHmvM-8F9i-D-nEq5dhQ3yxJ_j3-IA&s", category: "suspensao" },
  { id: 78, name: "Kit Reparo Caixa de Direção", price: 120.00, img: "https://down-br.img.susercontent.com/file/cc4056fff0e8c57447415e1edfaf3821", category: "suspensao" },
  { id: 79, name: "Grampo de Mola Reforçado", price: 30.00, img: "https://http2.mlstatic.com/D_NQ_NP_763402-MLB81914734274_012025-O-grampo-feixe-molas-reforcado-ford-ranger-12-x-85-x-280.webp", category: "suspensao" },
  { id: 80, name: "Suporte de Bandeja Superior", price: 150.00, img: "https://http2.mlstatic.com/D_NQ_NP_998809-MLB46041049345_052021-O-suporte-bandeja-superior-lado-esquerdo-d10-e-d20.webp", category: "suspensao" },

  // Motor 
  { id: 81, name: "Filtro de Ar Esportivo Cônico", price: 110.00, img: "https://http2.mlstatic.com/D_NQ_NP_745278-MLB73244861422_122023-O.webp", category: "motor" },
  { id: 82, name: "Bomba de Combustível Elétrica", price: 280.00, img: "https://obarataoautopecas.vtexassets.com/arquivos/ids/252979/bomba-de-combustivel-eletrica-12v-etanol--gasolina-gauss-volkswagen-gol-10-8v16-8v-1993-a-2016-fox-10-8v16-8v-199-1.jpg?v=638640171037670000", category: "motor" },
  { id: 83, name: "Radiador de Alumínio Performance", price: 650.00, img: "https://www.performancev8.com/wp-content/uploads/2022/07/radiador-f100-3.jpeg", category: "motor" },
  { id: 84, name: "Correia Dentada PowerGrip", price: 90.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5komwAFq9fmhvaAUnuP3gs4uUTKtvapHn1g&s", category: "motor" },
  { id: 85, name: "Válvula Termostática Baixa Temp", price: 70.00, img: "https://images.cws.digital/produtos/gg/21/71/valvula-termostatica-9547121-1659379274019.jpg", category: "motor" },
  { id: 86, name: "Bomba de Óleo Alto Volume", price: 350.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7907oeCeT2VX85CP7-hIY1CLGR8IoxO7jQ&s", category: "motor" },
  { id: 87, name: "Virabrequim Forjado Competição", price: 1800.00, img: "https://acosnobre.com.br/wp-content/uploads/2022/07/virabrequim-forjado-aco-4340-1024x1024.jpg", category: "motor" },
  { id: 88, name: "Pistão Forjado Alta Compressão", price: 600.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRe2ix9qj2HG1_3cC9ZB-DGGRHbVoSoH67A&s", category: "motor" },
  { id: 89, name: "Junta do Cabeçote Multicamadas", price: 140.00, img: "https://spaturbo.vteximg.com.br/arquivos/ids/177532-1000-1000/EVJTCB07.jpg?v=636691546039330000", category: "motor" },
  { id: 90, name: "Coletor de Admissão Polido", price: 780.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoMtkhqdvERpcF9O9q-96HULc_LzFRXp0nw&s", category: "motor" },
  { id: 91, name: "Cárter de Óleo Esportivo", price: 390.00, img: "https://cdn.awsli.com.br/800x800/1945/1945025/produto/263979795/c-rter-de--leo-para-mercruiser-5-0l-5-7l-6-2l-v8-bloco-pequeno-14259-809910-8m01-e3jz7u8xzb.png", category: "motor" },
  { id: 92, name: "Válvula de Admissão Original", price: 80.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdr5oGpBohzr0egk7yzWekkMObG3dHoU6VA&s", category: "motor" },
  { id: 93, name: "Biela Forjada H-Beam", price: 450.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUSCZ3os5YBKsI2HVoKx2wRO5M-_sqi7D-w&s", category: "motor" },
  { id: 94, name: "Comando de Válvulas Preparado", price: 620.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeJqTlkeHZzpqgSZueES0ILodNUI9-xWYaow&s", category: "motor" },
  { id: 95, name: "Turbina de Alta Performance GT28", price: 2500.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABOPesp5mw9rBoPSppb_XbhRKaGQboCaeNQ&s", category: "motor" },
  { id: 96, name: "Intercooler Frontal Grande", price: 980.00, img: "https://http2.mlstatic.com/D_720593-MLB83936796896_042025-C.jpg", category: "motor" },
  { id: 97, name: "Sensor de Detonação OEM", price: 110.00, img: "https://http2.mlstatic.com/D_NQ_NP_609879-MLB79031510811_092024-O-sensor-de-detonaco-honda-civic-ex-16-96-97-98-99-2000-oem.webp", category: "motor" },
  { id: 98, name: "Polia do Virabrequim Aliv", price: 190.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStaUQ-XDJoVmgChNM-aS3uyOzLwEyMt19-og&s", category: "motor" },
  { id: 99, name: "Kit de Juntas do Motor Completo", price: 410.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DtnUS6iNBvVT9aL9C7Pe-2353bJQgSB9ow&s", category: "motor" },
  { id: 100, name: "Tensor da Correia Dentada", price: 65.00, img: "https://dcdn-us.mitiendanube.com/stores/002/068/903/products/vkm15402l1-7053dd8e0e1b4a9dcb16658460446614-1024-1024.png", category: "motor" },

  // Fluidos 
  { id: 101, name: "Óleo de Motor Sintético 5W30", price: 60.00, img: "https://agrosolo.fbitsstatic.net/img/p/oleo-lubrificante-sintetico-lubrax-para-motores-valora-5w-30-1-litro-80193/273105-1.jpg?w=700&h=700&v=no-value", category: "fluidos" },
  { id: 102, name: "Aditivo de Combustível Limpeza", price: 40.00, img: "https://cdn.awsli.com.br/437/437289/produto/219282561/untitled-1-45b97ji5ek.png", category: "fluidos" },
  { id: 103, name: "Líquido de Arrefecimento Rosa Concentrado", price: 80.00, img: "https://cdn.awsli.com.br/2500x2500/1204/1204193/produto/2145278879258289bf0.jpg", category: "fluidos" },
  { id: 104, name: "Óleo de Câmbio Manual GL-4", price: 70.00, img: "https://images.cws.digital/produtos/g/65/64/oleo-lubrificante-transmissao-cambio-manual-lubrax-gl4-sae90-7646465-1623082126004.jpg", category: "fluidos" },
  { id: 105, name: "Fluido de Direção Hidráulica Verde", price: 50.00, img: "https://fortbras.vteximg.com.br/arquivos/ids/345433-460-460/oleo-direcao-hidraulica-atf-ingrax-500ml-hipervarejo-1.jpg?v=637955675965230000", category: "fluidos" },
  { id: 106, name: "Graxa de Lítio Branca", price: 30.00, img: "https://images.cws.digital/produtos/gg/14/97/graxa-de-litio-w-mp-branca-10kg-7599714-1677878664295.jpg", category: "fluidos" },
  { id: 107, name: "Desengripante Multiuso Aerosol", price: 25.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9z-u6J2TwDM27-HxsE8T8bTxYCc-sVM3Hcg&s", category: "fluidos" },
  { id: 108, name: "Limpa Contato Elétrico Spray", price: 35.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7ywzTK8mxGXcF4HrmGsfVHAi95f7Y7TRzg&s", category: "fluidos" },
  { id: 109, name: "Silicone para Juntas Vermelho", price: 45.00, img: "https://images.tcdn.com.br/img/img_prod/892754/silicone_alta_temperatura_junta_motor_tek_bond_vermelho_50g_897_1_84821b8d38e42e8daef4bf1b49efa65f.jpg", category: "fluidos" },
  { id: 110, name: "Água Desmineralizada 5L", price: 15.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxq8EbgIZ6RYnzMmzpAUFHGVeCk9qjkOrSSA&s", category: "fluidos" },
  { id: 111, name: "Fluido para Radiador Azul", price: 55.00, img: "https://images.tcdn.com.br/img/img_prod/662641/fluido_aditivo_para_radiador_tropical_t5_radnaq_azul_1000ml_1647_1_b56a0db1df486f2e031c211909fe6fc8.jpg", category: "fluidos" },
  { id: 112, name: "Óleo para Freio DOT 3", price: 30.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5nrsuVrDgsjACXWeSkA9OV16A4QABsEC5A&s", category: "fluidos" },
  { id: 113, name: "Aditivo para Óleo Redutor Fricção", price: 65.00, img: "https://tfckdr.vteximg.com.br/arquivos/ids/10467003-1000-1000/aditivo-motor-stop-friction-motormax-redutor-atrito-500-ml-1.jpg?v=638283011769230000", category: "fluidos" },
  { id: 114, name: "Limpa Para-brisa Concentrado", price: 20.00, img: "https://images.tcdn.com.br/img/img_prod/1229120/limpa_parabrisa_100ml_wurth_559_1_c1a14a872b21aeb92971b7437fb0dc65.jpg", category: "fluidos" },
  { id: 115, name: "Fluido para Embreagem Hidráulica", price: 48.00, img: "https://images.tcdn.com.br/img/img_prod/591460/fluido_de_freio_e_embreagem_hidraulica_500_ml_dot_4_aplicacoes_diversas_144_1_20180630204841.jpg", category: "fluidos" },
  { id: 116, name: "Anticorrosivo para Sistema de Arrefecimento", price: 70.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqe00wGRyLCji7d3HiMCJdp2BGZi89DfHEqQ&s", category: "fluidos" },
  { id: 117, name: "Shampoo Automotivo Concentrado", price: 35.00, img: "https://cdn.awsli.com.br/2124/2124853/produto/128963242/856d66bed0.jpg", category: "fluidos" },
  { id: 118, name: "Polidor de Metais Cromados", price: 42.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncfFygdiTqzOV-SwDNhp7r54wWAXQAqkE4Q&s", category: "fluidos" },
  { id: 119, name: "Cera Líquida para Carro", price: 58.00, img: "https://down-br.img.susercontent.com/file/sg-11134201-23010-xh260ccihhmv91", category: "fluidos" },
  { id: 120, name: "Limpa Bicos Injetores", price: 60.00, img: "https://orbiquimica.com.br/v2/wp-content/uploads/2020/04/1659-Orbi-LBG.jpg", category: "fluidos" },

  // Escapamento 
  { id: 121, name: "Ponteira de Escapamento Cromada Dupla", price: 160.00, img: "https://images.tcdn.com.br/img/img_prod/882387/ponteira_dupla_escapamento_esportivo_aco_inox_2_polegadas_419_5_20201123095405.jpg", category: "escapamento" },
  { id: 122, name: "Coletor de Escapamento 4x2x1", price: 550.00, img: "https://spaturbo.vteximg.com.br/arquivos/ids/204126-1000-1000/TESIH04-CRRBEL01BK.png?v=637758857468770000", category: "escapamento" },
  { id: 123, name: "Catalisador Universal Alta Vazão", price: 480.00, img: "https://images.tcdn.com.br/img/img_prod/1026593/catalisador_universal_grande_1_6_1_8_2_0_2_2_2_4_para_adaptacao_229_1_5d2b9be8919f36acd18717dcb05a95eb.jpeg", category: "escapamento" },
  { id: 124, name: "Silencioso Traseiro Esportivo Inox", price: 320.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0HBIktsOTh-vHdfZBHJ04CV2XEVsxlsTJg&s", category: "escapamento" },
  { id: 125, name: "Tubulação de Escapamento Direta 2.5''", price: 270.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzv_idAF80zRSnaEZ_Ku5MoxpKwzikhgN_SQ&s", category: "escapamento" },
  { id: 126, name: "Abraçadeira de Escapamento Reforçada", price: 35.00, img: "https://a-static.mlcdn.com.br/1500x1500/abracadeira-reforcada-escapamento-4pol-mb-1718-1933-brc/autopecasrovalepaes/23267p/33c6386c6c1c5593071db340ad9ee80f.jpeg", category: "escapamento" },
  { id: 127, name: "Junta do Coletor de Escapamento", price: 45.00, img: "https://pecahoje.vteximg.com.br/arquivos/ids/159095-1000-1000/junta-coletor-escapamento-0039-rely-picape-van-v2s-c1.jpg?v=637466079728970000", category: "escapamento" },
  { id: 128, name: "Sensor de Oxigênio (Sonda Lambda)", price: 190.00, img: "https://www.tecfil.com.br/wp-content/uploads/2021/12/TECFIL_IMG_06_01.jpg", category: "escapamento" },
  { id: 129, name: "Kit de Escapamento Completo Esportivo", price: 1800.00, img: "https://a-static.mlcdn.com.br/800x560/kit-escapamento-esportivo-parati-1-6-1-8-2-0-94-96-ronco-top-diskscap/diskscap/5003088062/ad8d8c49a8d5fd097b1f0fa60c20a19f.jpeg", category: "escapamento" },
  { id: 130, name: "Protetor Térmico de Escapamento Adesivo", price: 110.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_o4Lur1qOeHv7nw-jITVWpydpMgslWkAOQw&s", category: "escapamento" },
  { id: 131, name: "Flexível de Escapamento Inox", price: 130.00, img: "https://images.tcdn.com.br/img/img_prod/882387/flexivel_de_escape_em_inox_agile_montana_1_3_4_pol_45mm_711_1_d605382005204afcb5e5918273c2ce60.jpg", category: "escapamento" },
  { id: 132, name: "Suporte de Escapamento Borracha", price: 25.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLFcb8cno8CVnZrjz9FNMH9isBhmbGFPVZxQ&s", category: "escapamento" },
  { id: 133, name: "Flange de Escapamento 3''", price: 85.00, img: "https://spaturbo.vteximg.com.br/arquivos/ids/191324-1000-1000/LGTC09--2-.jpg?v=637190958991600000", category: "escapamento" },
  { id: 134, name: "Parafuso de Escapamento M8", price: 12.00, img: "https://m.media-amazon.com/images/I/71+PPs39UqL._AC_UF894,1000_QL80_.jpg", category: "escapamento" },
  { id: 135, name: "Cinta de Escapamento Universal", price: 40.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CYBbSQzFmKCpFF3BykdLMDSz5SqjEs16UA&s", category: "escapamento" },
  { id: 136, name: "Silencioso Intermediário", price: 210.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5TlCsYHK_0l9_U8z1SzR5xhuKqWPxcAQyug&s", category: "escapamento" },
  { id: 137, name: "Defletor de Escapamento", price: 60.00, img: "https://images.tcdn.com.br/img/img_prod/1041490/defletor_de_calor_escapamento_vw_jetta_250_tsi_1_4_2019_20525_1_fc86281b6bc06141a1f13e7d73ab8c1e.jpg", category: "escapamento" },
  { id: 138, name: "Válvula de Escapamento Ativa", price: 700.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvrVVWNUS-Rub0NJmC_V8ro0AFPqpGdvipw&s", category: "escapamento" },
  { id: 139, name: "Kit Parafusos Coletor", price: 50.00, img: "https://images.tcdn.com.br/img/img_prod/659901/kit_4_parafusos_coletor_admissao_gol_voyage_parati_santana_versailes_1_6_1_8_2_0_ap_5623_1_20200831101833.jpg", category: "escapamento" },
  { id: 140, name: "Capa de Ponteira Carbono", price: 90.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HFX67Uxhn1iimnwej7liBRPcrrwmdalvxw&s", category: "escapamento" },

  // Iluminação 
  { id: 141, name: "Farol de LED DRL Integrado", price: 290.00, img: "https://s2magazine.cdn.magazord.com.br/img/2022/04/produto/11725/farol-lt1013-7-angel-eyes-drl-com-seta-60w-10-30v-rayx.jpg?ims=fit-in/800x800/filters:fill(white)", category: "iluminacao" },
  { id: 142, name: "Lanterna Traseira LED Sequencial", price: 380.00, img: "https://images.tcdn.com.br/img/img_prod/502521/par_lanterna_traseira_led_carreta_pisca_guerra_sequencial_com_chicote_iva_12v_vermelha_335_1_20201214092851.jpg", category: "iluminacao" },
  { id: 143, name: "Lâmpada Halógena H7 Super Branca", price: 70.00, img: "https://31b93296e4855c6e.cdn.gocache.net/loja/imagens/full/lampada-super-branca-halogena-h7-shocklight02.png", category: "iluminacao" },
  { id: 144, name: "Kit Xenon HID 8000K", price: 220.00, img: "https://images-americanas.b2w.io/produtos/2019264997/imagens/kit-xenon-h7-8000k-com-reator-digital-hid/2019264997_1_xlarge.jpg", category: "iluminacao" },
  { id: 145, name: "Luz de Placa LED Branca", price: 40.00, img: "https://pistaoshop.cdn.magazord.com.br/img/2023/01/produto/4747/lampada-luz-de-painel-cortesia-lanterna-placa-autopoli-led-esmagada-super-branca-12v-09w-2-pecas-pistao-shop-el6754-4.jpg?ims=800x800", category: "iluminacao" },
  { id: 146, name: "Luz Interna de Teto LED", price: 50.00, img: "https://http2.mlstatic.com/D_NQ_NP_815904-MLB70103343086_062023-O.webp", category: "iluminacao" },
  { id: 147, name: "Farol de Milha LED Universal", price: 150.00, img: "https://cdn.awsli.com.br/2500x2500/475/475763/produto/29805719/01-4-farol-4-pol-branco-com-angel-e-pisca---4x4sc-blumenau-uwyh198jjh.png", category: "iluminacao" },
  { id: 148, name: "Sinaleira Direcional LED Slim", price: 90.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHCgtNzS_L1crfeJzltoW33tw9F6DsGSlNw&s", category: "iluminacao" },
  { id: 149, name: "Lâmpada de Freio LED Duplo Polo", price: 65.00, img: "https://cdn.awsli.com.br/600x450/437/437289/produto/45878379/12569aa0aa.jpg", category: "iluminacao" },
  { id: 150, name: "Reator de Xenon Fino", price: 110.00, img: "https://ae01.alicdn.com/kf/HTB1TzLPOrvpK1RjSZFqq6AXUVXao.jpg_640x640q90.jpg", category: "iluminacao" },
  { id: 151, name: "Chicote para Farol de Milha", price: 80.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrv2ma2GtAbhZT5l7J3_I3umyBPMCa0JIeA&s", category: "iluminacao" },
  { id: 152, name: "Lâmpada de Ré LED Potente", price: 55.00, img: "https://cdn.awsli.com.br/2478/2478806/produto/185334741/7f6181494d.jpg", category: "iluminacao" },
  { id: 153, name: "Luz de Teto Traseira LED", price: 45.00, img: "https://images.tcdn.com.br/img/img_prod/710419/lanterna_luz_traseira_teto_moldura_led_classic_corsa_astra_5315_1_84f652b1b847fc771530ed4d18e97e2b.jpg", category: "iluminacao" },
  { id: 154, name: "Conector de Lâmpada H4 Cerâmico", price: 20.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj87sgLNdmmfUxLIYKN4jYSnMe7-H6DxVrGQ&s", category: "iluminacao" },
  { id: 155, name: "Capa de Farol Fumê", price: 75.00, img: "https://http2.mlstatic.com/D_Q_NP_642448-CBT81358512446_122024-O.webp", category: "iluminacao" },
  { id: 156, name: "Kit Lâmpadas Internas LED", price: 90.00, img: "https://down-br.img.susercontent.com/file/c391152721352383a0e85fce0fdb4156", category: "iluminacao" },
  { id: 157, name: "Barra de LED Off-Road 20''", price: 300.00, img: "https://cdn.awsli.com.br/600x450/475/475763/produto/46720263/01-5-capa---barra-de-led-7d---22-pol-390w-combo-curva-sku-barra-8d-22p-cv-chi-zttcn15u3s.png", category: "iluminacao" },
  { id: 158, name: "Lâmpada Super Branca H1", price: 60.00, img: "https://cdn.awsli.com.br/2500x2500/1204/1204193/produto/321774956/ed1999a652355714652c12fe2c815df4-4gqitgpo1j.jpg", category: "iluminacao" },
  { id: 159, name: "Luz de Cortesia LED Porta", price: 70.00, img: "https://down-br.img.susercontent.com/file/sg-11134201-7rcd8-ltfehm0ux13ud2", category: "iluminacao" },
  { id: 160, name: "Kit Lâmpada Neblina LED", price: 180.00, img: "https://images.tcdn.com.br/img/img_prod/895069/kit_farol_de_milha_neblina_led_3_funcoes_10w_18011_1_19890cdea0bb3e96dceb06760a8eb44d.jpeg", category: "iluminacao" }
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
