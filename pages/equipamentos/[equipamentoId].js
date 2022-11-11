import Image from "next/image";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from '../../styles/equipamento.module.css'

const equipments = {
	"ambulift_4_m_6_c": {
		url: "ambulift_4_m_6_c",
		title: "Ambulift 4 M 6 C",
		img_url: "/static/equipment_300x300/0.jpg",
		desc: ["Unidade motorizada de transporte de passageiros incapacitados para aviões comerciais, com elevação da cabine de transporte na altura de serviço 1400 a 6000 mm.", "Capacidade: 4 macas e 6 cadeiras", "Cabina de transporte de passageiros com janelas amplas e portas de acesso, uma à frente e outra na traseira, com plataforma basculante com guardas laterais para entrada e saída de passageiros.", "Equipada com motor industrial Deutz F4L 2011 de arranque eléctrico, bomba hidráulica de pistões, com a transmissão através de motores hidráulicos, direcção integral assistida ao rodado da frente.", "Opcional: Ar condicionado", "Pintura a primário com pintura a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 6
	},
	"ambulift_6_m_12_c": {
		url: "ambulift_6_m_12_c",
		title: "Ambulift 6 M 12 C",
		img_url: "/static/equipment_300x300/1.jpg",
		desc: ["Unidade motorizada de transporte de passageiros incapacitados para aviões comerciais, com elevação da cabine de transporte na altura de serviço 1200 a 6000 mm.", "Capacidade: 6 macas e 12 cadeiras.", "abina de transporte de passageiros com janelas amplas e portas de acesso, uma à frente e outra na traseira, com plataforma basculante com guardas laterais para entrada e saída de passageiros.", "Equipada com motor industrial Deutz F5L912 de arranque eléctrico, bomba hidráulica de pistões, com a transmissão através de motores hidráulicos, direcção integral assistida ao rodado da frente.", "Opcional: Ar condicionado.", "Pintura a primário com pintura a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 6
	},
	"escada_universal_canopia": {
		url: "escada_universal_canopia",
		title: "Escada Universal Motorizada com Canópia",
		img_url: "/static/equipment_300x300/2.jpg",
		desc: ["Escada de passageiros motorizada para aviões comerciais, com altura de serviço/porta de 2,45 a 5,80 mts.", "Equipada com motor diesel de marca Deutz tipo F4L 2011/60 cv ou motorização eléctrica.", "Quando em operação, 4 cilindros hidráulicos de duplo efeito asseguram a sua estabilidade.", "Os comandos estão situados na plataforma superior e no painel de comando do chassi, junto do posto de condução.", "Circuitos de iluminação do lanço fixo, móvel e plataforma superior e luzes convencionais de posição.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea.", "Cobertura da estrutura (Canopy) construída em estrutura de aço inox e revestimento a policarbonato."],
		n_desc: 7
	},
	"escada_universal": {
		url: "escada_universal",
		title: "Escada Universal Motorizada sem Canópia",
		img_url: "/static/equipment_300x300/3.jpg",
		desc: ["Escada de passageiros motorizada para aviões comerciais, com altura de serviço/porta de 2,45 a 5,80 mts.", "Equipada com motor diesel de marca Deutz tipo F4L 2011/60 cv ou motorização eléctrica.", "Quando em operação, 4 cilindros hidráulicos de duplo efeito asseguram a sua estabilidade.", "Os comandos estão situados na plataforma superior e no painel de comando do chassi, junto do posto de condução.", "Circuitos de iluminação do lanço fixo, móvel e plataforma superior e luzes convencionais de posição.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 6
	},
	"escada_passageiros_rebocavel": {
		url: "escada_passageiros_rebocavel",
		title: "Escada Passageiros Rebocável",
		img_url: "/static/equipment_300x300/4.jpg",
		desc: ["Escada de passageiros rebocável para aviões comerciais, com alturas de serviço de 2,30 a 4,80 mts.", "Chassi / Estrutura: Construída à base de perfis de tubo de aço, plataforma e degraus revestidos a chapa de alumínio anti-derrapante.", "Alturas de serviço ajustáveis por cilindro hidráulico por intermédio de bomba hidráulica eléctrica.", "Sistema de direcção: Equipada com lança de reboque na frente, de fácil manobra.", "Estabilidade Efectuada por dois cilindros hidráulicos na frente.", "A aproximação ao avião é feita por intermédio de motor hidráulico.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea.", "Opcional: Cobertura da estrutura (Canopy)."],
		n_desc: 8
	},
	"escada_manutencao_rebocavel": {
		url: "escada_manutencao_rebocavel",
		title: "Escada de Manutenção Rebocável",
		img_url: "/static/equipment_300x300/5.jpg",
		desc: ["Escada de manutenção rebocável para aviões comerciais, com alturas de serviço 2,4 a 4,70 mts.", "Chassi / Estrutura: Construída à base de perfis de tubo de aço, plataforma e degraus revestidos a chapa de alumínio anti-derrapante.", "Alturas de serviço ajustáveis por cilindro hidráulico com sistema manual ou eléctrico.", "Sistema de direcção: Equipada com lança de reboque na frente, de fácil manobra.", "Estabilidade Efectuada por dois cilindros hidráulicos.", "A aproximação ao avião é feita por intermédio de motor hidráulico.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 7
	},
	"escadote_servico": {
		url: "escadote_servico",
		title: "Escadote de Serviço",
		img_url: "/static/equipment_300x300/6.jpg",
		desc: ["Com este tipo de equipamento, é possível alcançar diversos níveis de alturas de trabalho de 1,6 metros a 4 metros.", "Estrutura metálica em tubo de aço, degraus e plataforma superior revestida a metal distendido.", "Rodados equipados por pneus e câmaras de ar na medida 400x8.", "Sistema de elevação óleo hidráulico manual ou eléctrico, com válvula de segurança e estabilizadores.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea.", "Fabricamos também escadotes com alturas reguláveis de: 1 a 2 metros; 1 a 3 metros; 1,8 a 4,2 metros e 2,2 a 5,2 metros."],
		n_desc: 6
	},
	"plataforma_manutencao": {
		url: "plataforma_manutencao",
		title: "Plataforma de Manutenção com Elevação",
		img_url: "/static/equipment_300x300/7.jpg",
		desc: ["Chassis: NISSAN – CABSTAR -35.13/4.", "Unidade auto motorizada equipada com estrutura de base, plataforma elevatória e componentes.", "Plataforma hidráulica na traseira, dimensões de 2500x1250 mm com elevação até 9200 mm do solo.", "Sistema de elevação através de tesouras mecânicas accionadas por circuito hidráulico. Capacidade de carga da plataforma: 300 kgs.", "Equipada com quatro cilindros estabilizadores hidráulicos, para segurança e estabilidade para operação ao avião.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 6
	},
	"carro_limpeza_lavabos": {
		url: "carro_limpeza_lavabos",
		title: "Carro de Limpeza de Lavabos Capacidade 500 Litros",
		img_url: "/static/equipment_300x300/8.jpg",
		desc: ["CHASSI: Fuso Canter FEB01C 3C13.", "Dois depósitos em aço inox AISI 316, um para detritos com capacidade de 400 litros e outro para água com capacidade de 100 litros.", "Plataforma hidráulica elevatória na traseira.", "Mangueira de descarga de 4” de diâmetro, equipada com adaptador universal.", "Sistema de abastecimento de água: tambor enrolador em aço inox com respetiva mangueira de 1” com 5 metros e adaptador universal para ligação à aeronave.", "Unidade equipada com programador para abastecer os litros pretendidos com pressão regulável até 3,5 kg."],
		n_desc: 6
	},
	"carro_agua_potavel": {
		url: "carro_agua_potavel",
		title: "Carro de Água Potável Capacidade 500 Litros",
		img_url: "/static/equipment_300x300/9.jpg",
		desc: ["CHASSI: Fuso Canter FEB01C 3C13.", "Depósito em aço inox AISI 316 para água potável com capacidade de 500 litros.", "Plataforma hidráulica elevatória na traseira.", "Sistema de abastecimento de água: tambor enrolador em aço inox com respetiva mangueira de 1” com 5 metros e adaptador universal para ligação à aeronave.", "Unidade equipada com programador para abastecer os litros pretendidos com pressão regulável até 3,5 kg."],
		n_desc: 5
	},
	"tapete_transportador_motorizado": {
		url: "tapete_transportador_motorizado",
		title: "Tapete Transportador Motorizado",
		img_url: "/static/equipment_300x300/10.jpg",
		desc: ["Chassis metálico concebido em perfis de aço retangulares, quadrados e chapa quinada para montagem de componentes hidráulicos e elétricos. Revestimento lateral em chapa de aço de espessura 4 e 2,5 mm.", "Motor diesel ou motorização elétrica.", "Transmissão por diferencial no rodado traseiro.", "Cabine de proteção do motorista.", "Estrutura metálica construída em perfis de aço. Guardas laterais em tubo. Longarinas do tapete equipada de rolos, tela de borracha e proteções na frente e traseira.", "Alturas de serviço do tapete transportador asseguradas por cilindros hidráulicos de duplo efeito, com comando no posto de condução e na lateral da longarina.", "Este equipamento está equipado com sistema de aproximação à aeronave com redução da velocidade para o modo “tartaruga” (6 km/h) e manobra de aproximação final à aeronave em velocidade “caracol” limitada a 0,8 km/h.", "A unidade pára automaticamente a 5 centímetros do avião, e após essa paragem apenas anda para trás."],
		n_desc: 8
	},
	"tapete_transportador_rebocavel": {
		url: "tapete_transportador_rebocavel",
		title: "Tapete Transportador Rebocável",
		img_url: "/static/equipment_300x300/11.jpg",
		desc: ["Estrutura metálica construída em perfis de aço. Guardas laterais em tubo. Longarinas do tapete com protecção de borracha na frente e traseira.", "Accionado por motor hidráulico.", "Equipado com motor auxiliar diesel com arranque eléctrico.", "Alturas de serviço do tapete transportador asseguradas por um cilindro hidráulico de simples efeito, com caixa de comando no chassi e botoneiras na lateral da longarina.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 5
	},
	"carro_transporte": {
		url: "carro_transporte",
		title: "Carro de Transporte de Rodas de Avião e Ferramentas",
		img_url: "/static/equipment_300x300/12.jpg",
		desc: ["Estrutura construída em perfis e cantoneira de aço. Caixa metálica para ferramentas na frente.", "Painéis rebatíveis para entrada e saída de pneus de avião. Capacidade para macaco de elevação.", "Coroa giratória Jost 400 com lança de reboque tubular.", "Travão de parque, accionado pela lança de reboque.", "Equipado com 4 pneus e câmaras de ar medida: 600x9.", "Engate metálico na traseira.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 7
	},
	"carros_azoto": {
		url: "carros_azoto",
		title: "Carros de Cilindros de azoto alta e baixa pressão",
		img_url: "/static/equipment_300x300/13.jpg",
		desc: ["Unidade de serviço rebocável, para abastecimento de N2 (Azoto), permitindo altas e baixas pressões.", "Montada num chassi metálico, com rodado pneumático e roda da frente na lança para reboque. Equipado com 5 cilindros de N2, três na parte inferior e dois na superior. Caixa metálica para ferramentas.", "Recarga de sistemas e pneus de aviões por N2 com pressão de serviço obtida no compressor da unidade, com regulação até 3500 psi.", "Painel de comando na frente, equipado com acessórios e componentes: filtros, regulador, manómetros.", "Travão de parque mecânico accionado às rodas traseiras. Estabilizador traseiro para substituição de cilindros.", "Pintura a primário e tinta de esmalte na cor a indicar."],
		n_desc: 6
	},
	"pallet_dolly": {
		url: "pallet_dolly",
		title: "Pallet Dolly",
		img_url: "/static/equipment_300x300/14.jpg",
		desc: ["Porta paletes com capacidade de 7000 kgs – medidas: 125x96” – 125x88” – 108x88” – 125x60,4” – 60,4x51,5 “. Velocidade máxima: 30 km/h.", "Estrutura construída em perfis de aço e cantoneira. Batentes finais / stop.",  "Direcção: duas coroas giratórias Jost 500, lança reboque tubular através de coroa giratória. Falange de união.", "Travão de parque, accionado pela lança de reboque.", "Oito pneus maciços 400x8.", "Engate de reboque automático com capacidade 5 x 7000 kgs.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 7
	},
	"container_dolly": {
		url: "container_dolly",
		title: "Container Dolly",
		img_url: "/static/equipment_300x300/15.jpg",
		desc: ["Porta contentores com capacidade de 2000 kgs – para contentores: LD1, LD2 e LD3. Velocidade máxima: 30 kms/h.", "Mesa superior: 360º de rotação, com fixação a cada 90º. Coroa giratória Jost 1050L. Rolos zincados.", "Estrutura construída em perfis de tubo de aço e cantoneira.", "Direcção: coroa giratória Jost 750 accionada por lança reboque no rodado da frente.", "Travão de parque, actuando às rodas traseiras, por intermédio da lança de reboque.", "Quatro pneus maciços 400x8.", "Engate de reboque automático com capacidade 5 x 2000 kgs.", "Pintura a primário com pintura final a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 8
	},
	"tunel_passageiros": {
		url: "tunel_passageiros",
		title: "Túnel Para Embarque/Desembarque de Passageiros de Avião",
		img_url: "/static/equipment_300x300/17.jpg",
		desc: ["Equipamento autónomo / motorizado para embarque e desembarque de passageiros de avião.", "Concebido para operar com os seguintes aviões comerciais: Embraer 145; Fokker 100 e Boeing B737/300.", "Estrutura metálica resistente em forma de túnel, equipada com componentes e de janelas de vidro acrílico.", "Adaptação das alturas para as diferentes fuselagens obtida por intermédio de dois cilindros hidráulicos instalados na pala móvel da cobertura.", "Equipado com um motor auxiliar diesel de arranque elétrico, para acionamento do sistema hidráulico e respetivos motores hidráulicos que equipam as rodas motrizes. Direção assistida", "Lugar de condução e painel de comando localizado no interior do túnel de embarque."],
		n_desc: 6
	},
	"carro_abastecimento": {
		url: "carro_abastecimento",
		title: "Carro de Abastecimento de Skydrol e Mobil Jet II",
		img_url: "/static/equipment_300x300/18.jpg",
		desc: ["Chassis NISSAN – CABSTAR – 35.13/4.", "Tanques em aço inox AISI 316, para as capacidades de 265 L para Móbil Jet e 65 L para Skydrol, com tampão de enchimento, respiros e dreno.", "Plataforma hidráulica na traseira, dimensões de 2500x1250 mm com elevação até 6200 mm do solo. Capacidade de carga 300 kgs.", "Mangueiras de abastecimento, equipadas com adaptador universal, para ligação ao avião montadas em tambores enroladores.", "Dispositivo de pré selecção de litros e corte automático do abastecimento.", "Pintura a primário com pintura a tinta de esmalte na cor da Companhia Aérea."],
		n_desc: 6
	},
	"plataforma_elevatoria": {
		url: "plataforma_elevatoria",
		title: "Plataforma Elevatória Com Cabine",
		img_url: "/static/equipment_300x300/19.jpg",
		desc: ["CHASSI: Canter Pesada 7C15.", "Utilizada para limpeza de aeronaves, levando no seu interior 5 operadores sentados nas respetivas cadeiras com cintos de segurança, e todo o material para limpeza do interior da aeronave e material de reposição.", "Altura de elevação: Sem estabilizar a unidade sobe até aos 2500mm, após aproximação ao avião e estabilizada pode subir até aos 6000mm.", "Equipada com Plataforma Dhollandia na traseira que permite cargas do solo até à altura da cabine.", "Nesta unidade, em caso de paragem do motor com a plataforma elevada, o sistema de emergência permite baixar a cabine, levantar estabilizadores e rebocar a respetiva unidade para fora da zona de operação."],
		n_desc: 5
	},
	"carro_agua_potavel_gr": {
		url: "carro_agua_potavel_gr",
		title: "Carro de Água Potável Capacidade 3500 Litros",
		img_url: "/static/equipment_300x300/20.jpg",
		desc: ["CHASSI: Canter TF1 Pesada 7C15.", "Depósito em aço inox AISI 316 para água potável com capacidade de 3500 litros.", "Plataforma hidráulica elevatória na traseira.", "Sistema de abastecimento de água: tambor enrolador em aço inox com respetiva mangueira de 1” com 5 metros e adaptador universal para ligação à aeronave.", "Unidade equipada com programador para abastecer os litros pretendidos com pressão regulável até 3,5 kg."],
		n_desc: 5
	},
	"carro_limpeza_gr": {
		url: "carro_limpeza_gr",
		title: "Carro de Limpeza de Lavabos Capacidade 3500 Litros",
		img_url: "/static/equipment_300x300/21.jpg",
		desc: ["CHASSI: Canter TF1 Pesada 7C15.", "Dois depósitos em aço inox AISI 316, um para detritos com capacidade de 3000 litros e outro para água com capacidade de 500 litros.", "Plataforma hidráulica elevatória na traseira.", "Mangueira de descarga de 4” de diâmetro, equipada com adaptador universal.", "Sistema de abastecimento de água: tambor enrolador em aço inox com respetiva mangueira de 1” com 5 metros e adaptador universal para ligação à aeronave.", "Unidade equipada com programador para abastecer os litros pretendidos com pressão regulável até 3,5 kg."],
		n_desc: 6
	},
	"carro_agua_rebocavel": {
		url: "carro_agua_rebocavel",
		title: "Carro de Água Potável Rebocável",
		img_url: "/static/equipment_300x300/22.jpg",
		desc: ["Comprimento: 2500mm", "Largura: 2000mm", "Altura: 1090mm", "Capacidade do depósito 1000 L", "Depósitos em aço inox AISI 316 na espessura de 3mm.", "Motorização: Motobomba diesel.", "Contador mecânico 1” com mangueira de abastecimento de água de 1” com 5000mm com adaptador universal para ligação à aeronave.", "Chassi: construído em estrutura tubular com dois eixos, direção com coroa pivotante marca Jost com bloqueio da lança."],
		n_desc: 8
	},
	"carro_despejos": {
		url: "carro_despejos",
		title: "Carro de Despejos Rebocável",
		img_url: "/static/equipment_300x300/23.jpg",
		desc: ["Comprimento: 2500mm", "Largura: 2000mm", "Altura: 1090mm", "Capacidade do depósito de detritos 750 L", "Capacidade do depósito água 250 L", "Mangueira de descarga de detritos de 4” com 3000mm com bocal de acoplamento ao avião.", "Depósitos em aço inox AISI 316 na espessura de 3mm.", "Motorização: Motobomba diesel.", "Contador mecânico 1” com mangueira de abastecimento de água de 1” com 5000mm com adaptador universal para ligação à aeronave.", "Chassi: construído em estrutura tubular com dois eixos, direção com coroa pivotante marca Jost com bloqueio da lança."],
		n_desc: 10
	}
};

const CELL_COUNT = 23;
const cells = Array.from(Array(CELL_COUNT).keys());

export default function Equipment({ equip }) {
	const descs = Array.from(Array(equip.n_desc).keys());
	return (
		<>
		<Navbar />
		<div className={styles.title}>{equip.title}</div>
		<div className={styles.content}>
			<Image src={equip.img_url} width={600} height={600} alt="test"/>
			<div className={styles.desc}>
			{ [...Array(equip.n_desc)].map((_, i) =><p key={i}><span>-{'>'}</span>{equip.desc[i]}</p>) }
			</div>
		</div>
		<Footer />
		</>
	);
}

export function getStaticProps({ params }) {
	return {
		props: {
			equip: equipments[params.equipamentoId]
		}
	}
}

export function getStaticPaths() {
	return {
		paths: cells.map(index => {
			return {
				params: {
					equipamentoId: Object.values(equipments)[index].url
				}
			}
		}),
		fallback: false
	}
}