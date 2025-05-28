const PRODUCTS_DATA = [
  // Pneus 
  { id: 1, name: "Pneu Aro 13 Convencional", price: 299.90, img: "https://carrefourbr.vtexassets.com/arquivos/ids/20448803/kit-4-pneus-aro-13-175-75r13-westlake-2.jpg?v=637927322358130000", category: "pneus" },
  { id: 2, name: "Pneu Aro 14 Standard", price: 349.90, img: "https://images.tcdn.com.br/img/img_prod/1047324/pneu_goodyear_aro_14_175_70r14_efficientgrip_performance_84t_11553_1_598060b5b866b824a443daec81fefaa9.jpg", category: "pneus" },
  { id: 3, name: "Pneu Aro 15 Performance", price: 419.90, img: "https://app.lojasnossolar.com.br/images/nossolar/produtos/9160/195685_224492_P1000.jpg", category: "pneus" },
  { id: 4, name: "Pneu Aro 16 Esportivo", price: 499.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxalgzWtzCXsCm9bUxKJm2ZaT8yEA_4VpHNg&s", category: "pneus" },
  { id: 5, name: "Pneu de Fusca", price: 589.90, img: "https://down-br.img.susercontent.com/file/32f6e3bde0c58f916cba5813ceb4810c", category: "pneus" },
  { id: 6, name: "Pneu Aro 18 Ultra Grip", price: 679.90, img: "https://http2.mlstatic.com/D_NQ_NP_913885-MLB80890768687_112024-O-pneu-goodyear-aro-18-sure-grip-lug-agro-12580-18-10-lonas.webp", category: "pneus" },
  { id: 7, name: "Pneu Aro 19 Motorsport", price: 799.90, img: "https://loja.goodyear.com.br/media/catalog/product/cache/8e1f0636fd08d5bacc9ce86b93097d98/w/e/web_res-eagle_f1_supersport_305-30zr20_103y_view1_3-4_gy_on_top.jpg", category: "pneus" },
  { id: 8, name: "Pneu Aro 20 SUV Pro", price: 899.90, img: "https://images.tcdn.com.br/img/img_prod/1273527/pneu_265_45_aro_20_k117a_hankook_453_1_d31eeec66d3da03ccef424a9e4847eaf.jpg", category: "pneus" },
  { id: 9, name: "Pneu All Season Light", price: 389.90, img: "https://static.pneustore.com.br/medias/sys_master/images/images/heb/hd1/9094785761310/pneu-pirelli-aro-17-scorpion-verde-all-season-225-60r17-103h-xl-1.jpg", category: "pneus" },
  { id: 10, name: "Pneu Off-Road Extreme", price: 759.90, img: "https://static.wixstatic.com/media/2abe97_34366ca331cd44ce930b820fe8a9b02a~mv2.png/v1/fill/w_440,h_540,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2abe97_34366ca331cd44ce930b820fe8a9b02a~mv2.png", category: "pneus" },
  { id: 11, name: "Pneu de Inverno Ice Control", price: 529.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuBKf8kMjPN-JN8c-JcF0Ye1pm5fTGF_Nrg&s", category: "pneus" },
  { id: 12, name: "Pneu Ecológico Green Motion", price: 319.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmj0qug5QZqmZQgzI1i7jmPwWOED1KG0YCrA&s", category: "pneus" },
  { id: 13, name: "Pneu Radial Duramax", price: 459.90, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbNlFxhka9xYNSto6o36NAxUTyuKXYyv9vw&s", category: "pneus" },
  { id: 14, name: "Pneu Run-Flat Safety Plus", price: 699.90, img: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-22540r18-run-flat-contisportcontact-5-continental-92w-1.jpg?width=1200&height=1200&optimize=low", category: "pneus" },
  { id: 15, name: "Pneu para Carros de Luxo", price: 929.90, img: "https://images.tcdn.com.br/img/img_prod/1256243/pneu_carro_novo_215_55_16_329_1_d3d645ed47beade8c0181e8513281dc9.jpg", category: "pneus" },
  { id: 16, name: "Pneu para Caminhonetes Fora de Estrada", price: 819.90, img: "https://static.pneustore.com.br/medias/sys_master/images/images/hce/h01/9145855705118/pneu-drc-aro-24-d931-20-lonas-12-00r24-160-157f-1.jpg", category: "pneus" },
  { id: 17, name: "Pneu para Veículos Compactos City", price: 279.90, img: "https://s.alicdn.com/@sc04/kf/Hcf9dce37f0c84b50ad4ac03e0b07843ec.jpg_720x720q50.jpg", category: "pneus" },
  { id: 18, name: "Pneu de Competição Slick Track", price: 1100.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EDkN8uvaNOVW8SGZB_nmfq-TknchK1pCjw&s", category: "pneus" },
  { id: 19, name: "Pneu para Chuva Aqua Jet", price: 549.90, img: "https://carrefourbr.vtexassets.com/arquivos/ids/153981430/75dfeb24bed348e780e36e420d5f0f3b.jpg?v=638530171503200000", category: "pneus" },
  { id: 20, name: "Pneu de Estepe Fino", price: 189.90, img: "https://images.tcdn.com.br/img/img_prod/1089461/roda_estepe_fino_bmw_audi_mercedes_volvo_land_rover_aro_17_com_pneu_423_1_ca7c7b59416154b2fc0a4d8277dbbc55.jpg", category: "pneus" },

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
  { id: 160, name: "Kit Lâmpada Neblina LED", price: 180.00, img: "https://images.tcdn.com.br/img/img_prod/895069/kit_farol_de_milha_neblina_led_3_funcoes_10w_18011_1_19890cdea0bb3e96dceb06760a8eb44d.jpeg", category: "iluminacao" },

  // eletronicos
  { id: 161, name: "Central Multimídia Android 9''", price: 950.00, img: "https://images.tcdn.com.br/img/img_prod/232876/central_multimidia_android_9_polegadas_diamondx_qled_carplay_android_auto_gps_30571_1_8b7d6fea27fde51f2bc9237f688f9b39.jpg", category: "eletronicos" },
  { id: 162, name: "Sensor de Estacionamento Câmera Ré", price: 280.00, img: "https://acdn-us.mitiendanube.com/stores/001/239/875/products/3731_d78631e3-f3fb-44d1-958d-6eb2cfc0990c_500x541-c0978e4f7accd060a516136605372971-640-0.jpg", category: "eletronicos" },
  { id: 163, name: "Alarme Automotivo com Bloqueador", price: 320.00, img: "https://http2.mlstatic.com/D_NQ_NP_951396-MLB44019861890_112020-O.webp", category: "eletronicos" },
  { id: 164, name: "Módulo de Potência Amplificador 4 Canais", price: 450.00, img: "https://a-static.mlcdn.com.br/1500x1500/modulo-amplificador-potencia-taramps-ts400-400x4-4-canais-400-watts-rms-2-ohms-para-subwoofer-grave/kingsomdistribuidora/7264/76b47e8588bc7493f712fa4f76eaeb2e.jpeg", category: "eletronicos" },
  { id: 165, name: "GPS Automotivo Tela 7''", price: 390.00, img: "https://a-static.mlcdn.com.br/1500x1500/gps-automotivo-7-polegadas-com-tela-touch-8gb-de-memoria/nocnocasia/hnp06670631554305/c332f23c2e27c15a5e23b9b71a6fe4fe.jpeg", category: "eletronicos" },
  { id: 166, name: "Câmera de Painel Dashcam Full HD", price: 210.00, img: "https://a-static.mlcdn.com.br/1500x1500/camera-de-painel-hd-dashcam-com-luz-de-preenchimento-grande-visao-noturna-angulo-largo-dvr-a1/joinvillestorebrasil/cameraphd-1/ccdb5665dfdbcee358e6e6b0fa2dc481.jpeg", category: "eletronicos" },
  { id: 167, name: "Carregador de Bateria Inteligente 12V", price: 180.00, img: "https://m.media-amazon.com/images/I/71++LO9-SAL._AC_UF1000,1000_QL80_.jpg", category: "eletronicos" },
  { id: 168, name: "Sistema de Som com Bluetooth e USB", price: 580.00, img: "https://a-static.mlcdn.com.br/1500x1500/aparelho-de-som-carro-radio-automotivo-bluetooth-pendrive-sd-controle-londa-distancia-500m-first-option/toplinesound/f1145f2374/1f30de34d1f0d8cc4f6a0f5ae139a50b.jpeg", category: "eletronicos" },
  { id: 169, name: "Scanner OBD2 Bluetooth Diagnóstico", price: 150.00, img: "https://m.media-amazon.com/images/I/71LkqOXUsIL.jpg", category: "eletronicos" },
  { id: 170, name: "Conversor de Voltagem 12V para 110V", price: 90.00, img: "https://images.tcdn.com.br/img/img_prod/863221/inversor_conversor_veicular_com_potencia_500w_de_12v_para_110v_155_1_20201124103912.jpg", category: "eletronicos" },
  { id: 171, name: "Fone de Ouvido Bluetooth para Carro", price: 110.00, img: "https://images.tcdn.com.br/img/img_prod/803231/fone_de_ouvido_bluetooth_sem_fio_esportivo_e_motos_kd904_213_1_f1c1ddae51b3b60bb900cff0e1dc4aa5.jpg", category: "eletronicos" },
  { id: 172, name: "Transmissor FM Bluetooth USB", price: 75.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQub8KRd8STIWdhbus8ti_KxdS8bwtAxfj-iA&s", category: "eletronicos" },
  { id: 173, name: "DVR Veicular com Dupla Câmera", price: 350.00, img: "https://m.media-amazon.com/images/I/41TBnGyTyiL._AC_UF1000,1000_QL80_.jpg", category: "eletronicos" },
  { id: 174, name: "Kit Farol de Milha LED", price: 260.00, img: "https://images.tcdn.com.br/img/img_prod/232876/kit_farol_de_milha_fiat_fastback_toro_pulse_2021_a_2024_full_led_botao_modelo_touch_23819_1_05e83e09981e65ab8896b12dc690e9a6.jpg", category: "eletronicos" },
  { id: 175, name: "Inversor de Corrente Automotivo 300W", price: 140.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgqbOxivm__ZZKiQSerk9sWkfQQ5jAeLXBQ&s", category: "eletronicos" },
  { id: 176, name: "Sensor de Pressão dos Pneus TPMS", price: 190.00, img: "https://cdn.awsli.com.br/2500x2500/2622/2622574/produto/2322643710d13ccd987.jpg", category: "eletronicos" },
  { id: 177, name: "Receptor de TV Digital Automotivo", price: 420.00, img: "https://cdn.awsli.com.br/800x800/1135/1135748/produto/41877223/e90eb0d109.jpg", category: "eletronicos" },
  { id: 178, name: "Câmera de Ré Borboleta Universal", price: 95.00, img: "https://images.tcdn.com.br/img/img_prod/1122584/camera_de_re_universal_borboleta_em_full_hd_com_linhas_dinamicas_377227_1_167260529bda4a91339976c8f43969c4.jpg", category: "eletronicos" },
  { id: 179, name: "Repetidor de Sinal Wi-Fi Veicular", price: 180.00, img: "https://images.tcdn.com.br/img/img_prod/770170/bit_veicular_2_pro_repetidor_celular_veicular_700_850_mhz_503_1_6dd2f1b924f68f4c92d792cec173a180.jpg", category: "eletronicos" },
  { id: 180, name: "Aparelho de Som Automotivo MP3 Player", price: 250.00, img: "https://images.tcdn.com.br/img/img_prod/720928/mp3_player_automotivo_com_bluetooth_usb_radio_4x45w_permak_aparelho_reprodutor_de_musica_conectivida_2651_1_29f79ed72aa0c52d5f60ebcc44b0d201.jpg", category: "eletronicos" },

  // acessorios
  { id: 181, name: "Tapete Automotivo Personalizado", price: 120.00, img: "https://http2.mlstatic.com/D_NQ_NP_842594-MLB28297634854_102018-O-tapete-automotivo-universal-carro-borracha-pvc-personalizado.webp", category: "acessorios" },
  { id: 182, name: "Capa de Volante Couro Costurada", price: 85.00, img: "https://m.media-amazon.com/images/I/61aPHxEBXTL._AC_UF1000,1000_QL80_DpWeblab_.jpg", category: "acessorios" },
  { id: 183, name: "Organizador de Porta-Malas Dobrável", price: 70.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgcqnqQbUDMb__7Rq34STODY9qOTtW2zRNeA&s", category: "acessorios" },
  { id: 184, name: "Suporte de Celular Veicular Magnético", price: 45.00, img: "https://cdn.awsli.com.br/600x450/563/563019/produto/267030123d27308102b.jpg", category: "acessorios" },
  { id: 185, name: "Kit Limpeza Automotiva Completo", price: 160.00, img: "https://cdn.awsli.com.br/600x700/2622/2622517/produto/225257262/600x600-not--3--2wedsnkggj.png", category: "acessorios" },
  { id: 186, name: "Protetor Solar Para-brisa Retrátil", price: 55.00, img: "https://m.media-amazon.com/images/I/61L30HdKh6L._AC_UF1000,1000_QL80_.jpg", category: "acessorios" },
  { id: 187, name: "Capa de Chuva para Moto (Universal)", price: 95.00, img: "https://images.tcdn.com.br/img/img_prod/650541/capa_de_chuva_delta_flex_pvc_motociclista_motoboy_35_1_20191127170425.jpg", category: "acessorios" },
  { id: 188, name: "Rede Elástica para Porta-Malas", price: 30.00, img: "https://images.tcdn.com.br/img/img_prod/1038248/rede_porta_malas_cargonet_inside_cargo_100931_1_7446f345b4f2ff092c74d9438ac147d3.jpg", category: "acessorios" },
  { id: 189, name: "Lixeira Automotiva de Carro", price: 20.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3RYEOBnxeV1QvnX_u2TvLgDRy3KenwTOGA&s", category: "acessorios" },
  { id: 190, name: "Trava Antifurto Volante/Pedal", price: 130.00, img: "https://imgs.casasbahia.com.br/1519818212/1xg.jpg?imwidth=1000", category: "acessorios" },
  { id: 191, name: "Calibrador de Pneus Digital", price: 60.00, img: "https://img.lojadomecanico.com.br/IMAGENS/11/359/95874/Calibrador-Digital-de-Parede-220V-para-P-planatc-clb-850101.JPG", category: "acessorios" },
  { id: 192, name: "Macaco Hidráulico Tipo Garrafa 2 Ton", price: 180.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBXmE4MMn_KqF1hxH385_QCyCOLo2_hAquvQ&s", category: "acessorios" },
  { id: 193, name: "Capa Protetora para Carro (Universal)", price: 220.00, img: "https://monshell.com.br/wp-content/uploads/2022/08/COURO-PLUMA-SEM-LOGO.jpg", category: "acessorios" },
  { id: 194, name: "Kit Primeiros Socorros Automotivo", price: 90.00, img: "https://m.media-amazon.com/images/I/81QDUqREySL._AC_UF1000,1000_QL80_.jpg", category: "acessorios" },
  { id: 195, name: "Aromatizante Automotivo Premium", price: 35.00, img: "https://images.tcdn.com.br/img/img_prod/424358/aromatizante_evo_auto_premium_perfumes_new_car_50423973_1_e39f100805f81adee0c3dd28c98de99f_20240410100222.jpg", category: "acessorios" },
  { id: 196, name: "Kit Reparo de Pneus de Emergência", price: 110.00, img: "https://a-static.mlcdn.com.br/800x560/kit-reparo-pneu-emergencia-bike-bicicleta-8-pcs-remendo-cola-zein/escolhavip/142/b25984bf68c2a75729f8aace0db93ca9.jpeg", category: "acessorios" },
  { id: 197, name: "Cabo Auxiliar de Partida (Chupeta)", price: 70.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkyMc14HBP8tiVEGjci4PsY0UGPyhk_wx1A&s", category: "acessorios" },
  { id: 198, name: "Extintor de Incêndio Veicular ABC", price: 80.00, img: "https://cdn.awsli.com.br/2500x2500/1838/1838177/produto/105519414/e9c7ed95e2.jpg", category: "acessorios" },
  { id: 199, name: "Película Protetora de Farol", price: 50.00, img: "https://images.tcdn.com.br/img/img_prod/593752/pelicula_filme_lanterna_fume_adesivo_camaleao_carro_moto_779_1_52bbbf61e4d614f4522e368ed0beacdf.jpg", category: "acessorios" },
  { id: 200, name: "Kit Adesivos Refletivos de Segurança", price: 40.00, img: "https://http2.mlstatic.com/D_NQ_NP_953102-MLB77025829518_062024-O.webp", category: "acessorios" },

  // funilaria
  { id: 201, name: "Paralama Dianteiro Esquerdo (sem furo)", price: 280.00, img: "https://cdn.awsli.com.br/300x300/289/289606/produto/87203188/eb8cd81468.jpg", category: "funilaria" },
  { id: 202, name: "Capô Dianteiro Reforçado", price: 650.00, img: "https://tfdcu6.vtexassets.com/arquivos/ids/283855/40376.jpg?v=638502859969070000", category: "funilaria" },
  { id: 203, name: "Para-choque Dianteiro Esportivo", price: 420.00, img: "https://img.lojadomecanico.com.br/IMAGENS/35/606/150619/Parachoque-Dianteiro-Montana-Sport-2003-2005-2006-2007-Preto-Liso-Parcial-Com-Farol-7898449874589-16014670426881.JPG", category: "funilaria" },
  { id: 204, name: "Porta Dianteira Direita (completa)", price: 980.00, img: "https://images.tcdn.com.br/img/img_prod/834811/porta_dianteira_direita_hb20x_2012_2018_original_6757_1_20201120165936.jpg", category: "funilaria" },
  { id: 205, name: "Saia Lateral Fibra de Carbono", price: 350.00, img: "https://http2.mlstatic.com/D_NQ_NP_837247-MLB69671849572_052023-O-saia-spoiler-frontal-lateral-flexivel-tipo-fibra-de-carbono.webp", category: "funilaria" },
  { id: 206, name: "Retrovisor Elétrico com Seta", price: 210.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTTfh3qw4i2PfWgSP4G1XAYWfT3GteA6vrA&s", category: "funilaria" },
  { id: 207, name: "Grade Dianteira Black Piano", price: 170.00, img: "https://images.tcdn.com.br/img/img_prod/1240122/grade_dianteira_radiador_gol_voyage_g6_black_piano_emblema_899_1_66307baabb943a9d972f0fbc1a44dcc9.jpg", category: "funilaria" },
  { id: 208, name: "Painel Traseiro (estrutura)", price: 720.00, img: "https://http2.mlstatic.com/D_NQ_NP_841298-MLB75002532291_032024-O.webp", category: "funilaria" },
  { id: 209, name: "Maçaneta Externa Cromada", price: 60.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvO8ejD5JIrdKAiKj6KpRBT5O5-fKtoGX6hQ&s", category: "funilaria" },
  { id: 210, name: "Friso Lateral Cromado (kit)", price: 120.00, img: "https://a-static.mlcdn.com.br/1500x1500/kit-friso-cromado-lateral-slim-voyage-g5-g6-g7-g8-2009-a-2023-4-portas-shekparts/veproxacessorios/17-110/77d3f8d32e8abfa6e60680672706bf45.jpeg", category: "funilaria" },
  { id: 211, name: "Painel Frontal Inferior", price: 300.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLiFuCkjF84AClZGQfT0hn02gZB6KYXmNfA&s", category: "funilaria" },
  { id: 212, name: "Teto Solar Elétrico (completo)", price: 2500.00, img: "https://http2.mlstatic.com/D_NQ_NP_961556-MLB43449116090_092020-O-teto-solar-eletrico-fiat-palio-hollandia-300-deluxe-50902523.webp", category: "funilaria" },
  { id: 213, name: "Coluna de Direção Inferior", price: 190.00, img: "https://images.tcdn.com.br/img/img_prod/942823/coluna_direcao_parcial_inferior_57687_1_be1a6ce125460497338ec6330bbe5d39.jpg", category: "funilaria" },
  { id: 214, name: "Emblema Automotivo Original", price: 40.00, img: "https://img.joomcdn.net/c2d18f5e8dafdf0b20688b5d9c16556b42210a3c_original.jpeg", category: "funilaria" },
  { id: 215, name: "Veda Porta Borracha (rolo)", price: 80.00, img: "https://m.media-amazon.com/images/I/71QsXmT8xTL.jpg", category: "funilaria" },
  { id: 216, name: "Tampa Traseira (porta-malas)", price: 850.00, img: "https://images.tcdn.com.br/img/img_prod/659062/tampa_traseira_porta_malas_voyage_2013_2014_2015_36185_1_1d04d0b42395142c69e2d7f72deb04c3_20230522151158.jpg", category: "funilaria" },
  { id: 217, name: "Espelho Retrovisor Interno Antirreflexo", price: 110.00, img: "https://m.media-amazon.com/images/I/518xJIG6znL.jpg", category: "funilaria" },
  { id: 218, name: "Ponta de Eixo Traseira", price: 260.00, img: "https://cdn.shopify.com/s/files/1/0767/8246/9395/files/ponta-de-eixo-traseiro-direito-ima-al-21-ima-al-21.sku.0aa93f47.png?v=1748110461", category: "funilaria" },
  { id: 219, name: "Kit Parafusos de Roda Antifurto", price: 100.00, img: "https://a-static.mlcdn.com.br/1500x1500/kit-parafuso-antifurto-roda-peugeot-406-407-408-original-mcgard/prime-automotive/15906907571/e86e749f62383d9dee4102e754530db0.jpg", category: "funilaria" },
  { id: 220, name: "Calha de Chuva Acrílico (kit 4pçs)", price: 150.00, img: "https://m.media-amazon.com/images/I/61vxu0tvOKL.jpg", category: "funilaria" },

  // Ferramentas
  { id: 221, name: "Kit Chaves Combinadas (12 peças)", price: 180.00, img: "https://fken.vtexassets.com/arquivos/ids/216333/Jogo-Chave-Combinada-6-a-22mm-Kala-12-Pecas.jpg?v=638467628536630000", category: "ferramentas" },
  { id: 222, name: "Macaco Hidráulico Tipo Garrafa (2 toneladas)", price: 150.00, img: "https://images.tcdn.com.br/img/img_prod/697271/macaco_hidraulico_tipo_garrafa_2_toneladas_reforcado_portatil_universal_carro_com_maleta_13022_1_3967aa5b24f17b90889179e37583a959.jpg", category: "ferramentas" },
  { id: 223, name: "Chave de Roda Cruz", price: 60.00, img: "https://img.lojadomecanico.com.br/IMAGENS/2/259/2842/Chave-de-Roda-tipo-Cruz-Profissional-17--crferramentas-guerra1001.JPG", category: "ferramentas" },
  { id: 224, name: "Scanner Automotivo OBD2", price: 350.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrl3IhUwoJnp45DWRYsF5bu3ceVDQnhBztkQ&s", category: "ferramentas" },
  { id: 225, name: "Multímetro Digital Automotivo", price: 120.00, img: "https://cdn.awsli.com.br/2500x2500/1176/1176867/produto/47428971/---79--0of6ndaia2.png", category: "ferramentas" },
  { id: 226, name: "Jogo de Soquetes Universal (24 peças)", price: 220.00, img: "https://img.lojadomecanico.com.br/IMAGENS/2/139/106631/Jogo-de-Soquete-Estriado-de-8-a-32mm-enc-stels-1357691.JPG", category: "ferramentas" },
  { id: 227, name: "Compressor de Ar Portátil 12V", price: 190.00, img: "https://www.dutramaquinas.com.br/shared/img/produto/alta/323209_mini_compressor_portatil_analogico_12_volts_air_plus.webp", category: "ferramentas" },
  { id: 228, name: "Extrator de Pinos e Buchas", price: 90.00, img: "https://m.media-amazon.com/images/I/51l5gV4IoGL.jpg", category: "ferramentas" },
  { id: 229, name: "Chave Torque (torquímetro)", price: 280.00, img: "https://m.media-amazon.com/images/I/61Brmxv7vNL._AC_UF894,1000_QL80_.jpg", category: "ferramentas" },
  { id: 230, name: "Funil com Peneira para Óleo", price: 25.00, img: "https://http2.mlstatic.com/D_NQ_NP_988566-MLB51743064202_092022-O-funil-plastico-vonder-para-troca-de-oleo-moto-com-peneira.webp", category: "ferramentas" },
  { id: 231, name: "Jogo de Ferramentas para Sincronismo do Motor", price: 450.00, img: "https://img.lojadomecanico.com.br/IMAGENS/1/522/99734/Jogo-de-Ferramentas-para-Sincronismo-dos-raven-1315001.JPG", category: "ferramentas" },
  { id: 232, name: "Bomba de Vácuo para Sistema de Freio", price: 160.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPAe8RYgKPHk0gOXIOpLUien6Tp8X-c-UP0w&s", category: "ferramentas" },
  { id: 233, name: "Alicate de Pressão para Abraçadeiras", price: 80.00, img: "https://img.lojadomecanico.com.br/IMAGENS/1/129/125259/Alicate-para-Abracadeira-Elastica-com-Ca-delta-dt-ali021.JPG", category: "ferramentas" },
  { id: 234, name: "Lanterna de Inspeção LED (flexível)", price: 70.00, img: "https://cdn.leroymerlin.com.br/products/lanterna_de_led_flexivel_com_ima_30_leds_azul___chaveiro_cbrn_1570813779_02d8_600x600.jpg", category: "ferramentas" },
  { id: 235, name: "Kit para Reparo de Pneus (com plug)", price: 50.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31NISRGU2FBrsvU75f5HUMPZvZw9k8bQ0PQ&s", category: "ferramentas" },
  { id: 236, name: "Cavalete Automotivo (para 2 toneladas)", price: 130.00, img: "https://img.lojadomecanico.com.br/IMAGENS/1/347/2844/1655730742748.JPG", category: "ferramentas" },
  { id: 237, name: "Bancada Dobrável para Manutenção", price: 290.00, img: "https://www.vonder.com.br/estatico/vonder/produto/6114120000.jpg", category: "ferramentas" },
  { id: 238, name: "Carrinho de Ferramentas (vazio)", price: 600.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS11mXw35v_icK2NEJoYT0az-f1GBO2lgk0Vw&s", category: "ferramentas" },
  { id: 239, name: "Jogo de Chaves Torx (com cabo T)", price: 75.00, img: "https://img.lojadomecanico.com.br/IMAGENS/2/117/14224/1608137281907.JPG", category: "ferramentas" },
  { id: 240, name: "Testador de Bateria Digital", price: 100.00, img: "https://casadosoldador.com.br/files/products_images/29998/teste-de-bateria-digital-tb2500-i-200a-planatc-casa-do-soldador01.webp", category: "ferramentas" },

  // Câmbio
  { id: 241, name: "Kit Embreagem (platô, disco, rolamento)", price: 580.00, img: "https://m.media-amazon.com/images/I/61fyjhXXddL._AC_UF1000,1000_QL80_.jpg", category: "cambio" },
  { id: 242, name: "Óleo para Câmbio Manual (litro)", price: 60.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDH_2HAIs9tTGhTR1u7r4rwwBOKG9i2ZrIA&s", category: "cambio" },
  { id: 243, name: "Cabo de Embreagem", price: 95.00, img: "https://images.tcdn.com.br/img/img_prod/895069/cabo_embreagem_factor_125_controlflex_13169_1_8d5533cce9647692dec1aa9483d469e4.png", category: "cambio" },
  { id: 244, name: "Atuador de Embreagem Hidráulico", price: 210.00, img: "https://images.cws.digital/produtos/gg/78/91/atuador-hidraulico-da-embreagem-1029178-1607103901292.jpg", category: "cambio" },
  { id: 245, name: "Rolamento do Câmbio (primário)", price: 130.00, img: "https://cdn.shopify.com/s/files/1/0767/8246/9395/files/242936-rolamento-do-cambio-do-eixo-primario-dianteiro-1728528689904.jpg?v=1728531724", category: "cambio" },
  { id: 246, name: "Junta Homocinética (completa)", price: 260.00, img: "https://fortbras.vteximg.com.br/arquivos/ids/230313-460-460/junta-homocinetica-roda-fiat-tipo-2-0-94-a-97-nakata-1.jpg?v=637281408709730000", category: "cambio" },
  { id: 247, name: "Semi-Eixo Dianteiro Esquerdo", price: 420.00, img: "https://images.cws.digital/produtos/gg/58/34/semieixo-lado-esquerdo-1863458-1658361262589.jpg", category: "cambio" },
  { id: 248, name: "Coifa da Homocinética (kit com graxa)", price: 55.00, img: "https://http2.mlstatic.com/D_NQ_NP_614387-MLB72182668584_102023-O.webp", category: "cambio" },
  { id: 249, name: "Retentor do Volante do Motor", price: 70.00, img: "https://http2.mlstatic.com/D_NQ_NP_725751-MLB45242598516_032021-O.webp", category: "cambio" },
  { id: 250, name: "Cilindro Mestre de Embreagem", price: 180.00, img: "https://tracaomania.vteximg.com.br/arquivos/ids/158680-1000-1000/Cilindro-Mestre-e-Auxiliar-De-Embreagem-1987-1994-Motor-Mercedes.jpg?v=636773898146130000", category: "cambio" },
  { id: 251, name: "Garfo de Embreagem", price: 110.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJrG5baHIpbhkL2EI56cEBwsGxk68mddadg&s", category: "cambio" },
  { id: 252, name: "Sensor de Velocidade do Câmbio", price: 140.00, img: "https://images.tcdn.com.br/img/img_prod/942823/sensor_velocidade_caixa_cambio_103837_1_c32395801ecd276ebc5dfc04e3331475.jpg", category: "cambio" },
  { id: 253, name: "Kit Reparo de Alavanca de Câmbio", "price": 85.00, img: "https://images.tcdn.com.br/img/img_prod/558956/kit_reparo_alavanca_cambio_ducato_boxer_jumper_2002_a_2017_re_para_frente_735316070_23905_2_2587e4d26059b05959d1210b31b2908b_20240430192637.jpg", category: "cambio" },
  { id: 254, name: "Volante do Motor (Flywheel)", price: 700.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIZum1TLd_rdO86GUeMOvqLSKvDnS0aKjbw&s", category: "cambio" },
  { id: 255, name: "Coxim do Câmbio", price: 120.00, img: "https://pecahoje.vteximg.com.br/arquivos/ids/165958-1000-1000/coxim-cambio-inf-tras-0737-jac-j6-v4-c1.jpg?v=637466158718230000", category: "cambio" },
  { id: 256, name: "Flange do Semi-Eixo", price: 160.00, img: "https://m.media-amazon.com/images/I/61sRuuVk7xL._AC_UF1000,1000_QL80_.jpg", category: "cambio" },
  { id: 257, name: "Óleo para Transmissão Automática (litro)", price: 80.00, img: "https://images.tcdn.com.br/img/img_prod/674458/oleo_cambio_automatico_atf_multiveiculo_original_mobil_1_litro_3697_1_d0f05fe9f7bf259f5784c39897610483.jpg", category: "cambio" },
  { id: 258, name: "Filtro de Óleo do Câmbio Automático", price: 90.00, img: "https://images.tcdn.com.br/img/img_prod/662257/filtro_de_oleo_cambio_automatico_jf016e_10159_1_73840b147b2e82e7d439af85dbdbacd5.jpeg", category: "cambio" },
  { id: 259, name: "Capa Seca do Câmbio", price: 280.00, img: "https://images.tcdn.com.br/img/img_prod/740824/carcaca_do_cambio_auto_6t30_capa_seca_1593_1_770e5a7ec8a83d134a3b61e058fff029.jpeg", category: "cambio" },
  { id: 260, name: "Cruzeta do Cardan", price: 105.00, img: "https://tracaomania.vteximg.com.br/arquivos/ids/159941-1000-1000/Cruzeta-Do-Cardan.jpg?v=637146258900430000", category: "cambio" }
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
