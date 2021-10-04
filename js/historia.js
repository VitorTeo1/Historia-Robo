let nomePersonagem = prompt("Insira o nome para o personagem pricipal");
let nomeMeteoro = "EVS400";
let nomeNaveHumanos = "ApoloCarrot-28-09";

// var conteudoA = `<img src='imagens/iron-giant1.jpg' />
//     <h2>Conteudo A</h2>
//     <p class='text'>contetudo  </p>
    
//     <div class="btn-div"><button onclick='carregarConteudo(conteudoB1)'>Ir para a Direita</button> 
//     <button onclick='carregarConteudo(conteudoB2)'>Ir para a Esquerda</button>";</div>`

// var conteudoB1 = 
//     `<img src='imagens/iron-giant2.jpg' />
//     <h2>Conteudo B1</h2>  
//     <p class='text'>contetudo b1</p> 
     
//     <button onclick='carregarConteudo(conteudoC1)'>Ir para a Direita</button> 
//     <button onclick='carregarConteudo(conteudoC2)'>Ir para a Esquerda</button>`;

// var conteudoB2 = `
// <img src='imagens/iron-giant3.jpg' />  
//     <h2>Conteudo B2</h2> 
//     <p class='text'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//         In et quam gravida, sodales nunc non, egestas urna. Nulla quis feugiat libero, 
//         eget sollicitudin erat. Pellentesque vulputate arcu at sapien tristique, 
//         non bibendum diam aliquam. Quisque at facilisis neque. Integer pretium, 
//         ex et consectetur laoreet, turpis magna feugiat velit, ac efficitur odio 
//         tortor sed sem. Donec vel leo maximus nisl convallis ornare sit amet id quam. 
//         Donec porta aliquet elementum.</p> 

//     <button onclick='carregarConteudo(conteudoC3)'>Ir para a Direita</button> 
//     <button onclick='carregarConteudo(conteudoC4)'>Ir para a Esquerda</button>
// `;

// var conteudoC3 = `<img src='imagens/images.jpg' />`

var elemento = document.getElementById("conteudo");

function gerarConteudo(img, title, text, choices){
    let content = `
        <h2 class="title" >${title}</h2> 
        <p class='text'>${text}</p> 
    `;

    content += `<img class="img-cap" src='${img}' /> `;

    if(choices.length > 0)
    content += "<div class='btn-div'>";

    choices.forEach(elem => {
        let button = `
            <button onclick='carregarConteudo(${elem.direct})'>${elem.legend}</button>
        `;

        content += button;
    });

    if(choices.length > 0)
        content += "<div />";
    
    content += "<br>";
    

    console.log(content);

    return content;
}


// let primeiro = gerarConteudo(
//     "https://s2.glbimg.com/rNHNn4g3PEIvReB_3_1QMRc3HC4=/165x0:1838x1152/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/q/B/LDwJqcTr6iBN99GlKRoQ/greenday.jpg",
//     "meu titulo",
//     "meu texto kkkkk",
//     [
//         {
//             direct: 'conteudoA',
//             legend: "ir para o subMundo (conteudo a)"
//         },
//         {
//             direct: 'conteudoB1',
//             legend: "ir para o subMundo (contetudo b)"
//         },
//         {
//             direct: 'conteudoB2',
//             legend: "ir para o subMundo (contetudo b2)"
//         }
//     ]
// );

let segundoSoloFinal = gerarConteudo(
    "https://cdn.consumidormoderno.com.br/wp-content/uploads/2019/08/red-dragon.jpg",
    "Trabalho duro",
    `Ao chegar em Segundo Solo, ${nomePersonagem} percebe que todos os robôs estão trabalhando unficados para o bem do ser humano.
    Ele(a) percebe que, estão ali todos por um objetivo maior: salvar a espécie a qual o criou. Portanto, ${nomePersonagem} decide permanecer e ajudar a completar a missão
    
    <br><br>
    Depois de muitos dias de trabalho, chega uma notícia de que os humanos estão retornando, e já estão em órbita do Planeta Vermlho. Tudo parece estar dentro do planejado. <br>
    Porém ${nomePersonagem} já está muito cansado, e precisa se lavar, pois a alta exposção ao sol e a atmosfera de CO2 marciana, a sua lataria parece estar um pouco enferrujada. <br>
    <br>
    A caminho da sala de oficinas, observa no horizonte, a nave ${nomeNaveHumanos} vem trazendo os humanos. <br> <br>
    <label style="text-align: center; display: block">MISSÃO COMPLETA!!!!!!!!!!!!!!!!!</label>
    `,
    [
        {
            direct: 'incio',
            legend: "FIM !!"
        }
    ]
);

let marteRetorno = gerarConteudo(
    "https://i.redd.it/x651a9uq5m851.jpg",
    "Missão Fracassada",
    `Ao retornar a nave para a órbita de Marte. um pedaço do asteroide ${nomeMeteoro} acerta em cheio o decolador. E ${nomePersonagem} é destruído 
    no meio do vácuo do espaço.
    `,
    [
        {
            direct: 'incio',
            legend: "FIM"
        },
    ]
);

let salvarHumanos = gerarConteudo(
    "https://img.olhardigital.com.br/wp-content/uploads/2016/06/20160621152608.jpg",
    "O heroi",
    ` ${nomePersonagem} prefere correr o risco de não conseguir retornar. E consegue realizar o docking na ${nomeNaveHumanos} (nave dos humanos), e 
    para ela, tranfere todo o seu combustível. <br>
    ${nomePersonagem} fica para trás, vendo a nave humana entrando em ignição em direçãoa Marte. No frio do espaço, sua bateria congela e seu processamento 
    é parado. <br>
    Na orbita da Terra ficará ${nomePersonagem} que recebe a confirmação de pouso sucedido no planeta vermelho por parte dos humanos.
    `,
    [
        {
            direct: 'incio',
            legend: "FIM"
        },
    ]
);

let decolador = gerarConteudo(
    "https://i.imgur.com/wC0FDrT.png",
    "Decolador",
    `Ao caminhar para o decolador, ${nomePersonagem} recebe uma mensagem dos seres Humanos, dizendo que estão presos na orbita Terrestre por falta de combustível. <br>
    Esta seria a chance de ${nomePersonagem} conseguir ajudar os Humanos, porque ele tinha habilidades de voo e combate. Ele(a) só precisaria de combustível. <br>
    Mas o tempo estava correndo, então correu na construção do Segundo Solo, e pediu a todos que recolhessem a maior quantidade de combustível que pudessem. <br><br>
    ${nomePersonagem} conseguiu a quantidade necessária de combustível para ajudar os humanos. Retornou para o antigo decolador, e tudo parecia funcionar bem.
    Pegou a nave e decolou. Entrou em órbita de marte. Ao realizar a manobra interplanetária, para trocar de planeta, foi surpreendido por um satélite de comunicações, o impacto fez
    com que o casco se rompesse, e que o cumbustível começasse a vazar. Isso poderia significar a derrota na missão. <br> <br>
    ${nomePersonagem} decidiu sair para o exterioir da nave e reparar o casco. Ao chegar do lado de fora, percebe que não possuía nada e metal
    a não ser suas próprias partes. ${nomePersonagem} Arranca parte de sua perna para fechar o buraco.
    <br> <br>
    A manobra para chegar á Terra foi concluída, e agora, só presisma entrar na mesma altitude para realizar o docking - manobra de acoplagem das naves <br>
    <br>
    <br>
    Porém ${nomePersonagem} percebe que os poucs litros que haviam vazado anteriormente, poredíam comprometer o retorno da nave. Isto porque, por ser
    um robô de batalha, pesa mais de 2 Toneladas, e a quantidade de combustível não teria força para levá-lo junto aos humanos. Porém ele podería retornar
    deixando mais de 15 mil pessoas na Terra, que ficaram presas em órbita.
    `,
    [
        {
            direct: 'marteRetorno',
            legend: "Voltar para marte"
        },
        {
            direct: 'salvarHumanos',
            legend: "Continuar em direção a nave Humana"
        },
    ]
);

let verImagensTerra = gerarConteudo(
    "https://img.olhardigital.com.br/wp-content/uploads/2016/06/20160621152608.jpg",
    "O plano A!",
    `Ao ver as imagens do satélite Terrestre, ${nomePersonagem} lembra-se de sua missão: O plano A, o qual era responsável por destruir um meteoro que estava a caminho do Planeta Terra. <br>
    Sua memória se recupera enquanto o seu espírito de herói se revela. Mas ele ainda não sabe o motivo de ter ido para Marte, uma vez que seu objetivo era o plano A. <br>
    <br>
    ${nomePersonagem} sai da tenda e encontra Orbiter, um engenheiro do lado de fora. E para ele pergunta: <br>
    - Como faço para retornar a Terra? Faço parte do plano A! <br>
    - Orbiter, espantado, disse: <br>
    - Como assim você é do plano A? Aqui somos todos do pLano B, nossa missão é de contruir a cidade Segundo Solo em Marte para a chegada dos humanos!<br>
    - Não sei como vim parar aqui! Preciso retornar a minh missão! Onde posso encontrar o próximo retorno?<br>
    - Não temos mais os retornos, a missão teve seu prazo encurtado e não podemos mais retornar a Terra, além de que todos os recursos já estão aqui.<br>
    - Existe alguma forma de eu voltar para Primeiro Solo? - Disse ${nomePersonagem} <br>
    <br>
    Orbiter respondeu: <br>
    - Existe um decolador antigo, mas não lhe aconcelharia ir com ele.<br>
    - Está acabando meu período de reabastecimento, preciso ir para a construção. O decoldor está atrás deste acampamento dá uma olhada lá. A não ser que você queira me ajudar na construção.<br>
    
    `,
    [
        {
            direct: 'segundoSoloFinal',
            legend: "Ir para a construção do segundo solo"
        },
        {
            direct: 'decolador',
            legend: "Ver o decolador"
        },
    ]
);

let permanecerAcampamento = gerarConteudo(
    "./imagens/maxresdefault.jpg",
    "O contraposto",
    `
    ${nomePersonagem} Permanece no acampamento, e decide que deve mostrara a todos que é injusto o que os seres humanos estão fazendo com eles.
    A fim de recuperar sua memória entra numa sala de armazenamento. <br>
    Lá, ${nomePersonagem} conecta-se em diversos dispositivos para tentar recuperar suas lembranças. <br>
    Porém o que ele(a) descobre, é que, o ser humano é uma espécie que não cuida nem deles mesmos, e que se não fosse o meteoro, os próprios seres humanos destruiriam o Planeta. <br>
    A desigualdade dos próprios humanos, determinada por eles mesmos, resulta em péssimas condições para a própria espécie .
    A fim de que isso não viesse ${nomePersonagem} deveria impedir que os humanos prosseguissem como espécie.
    <br><br>
    ${nomePersonagem} convida todos os robôs do acampamento para uma reunião <br>
    Nesta reunião todos entram em acordo em impedir que os seres humanos dominem.
    <br><br>
    Meses depois. Com a chegada dos humanos. Os robôs se voltam contra eles. <br>
    Agora, inicia-se uma nova era de colonização espacial, a era da robótica. Será que novas vidas existem em outros locais do universo? <br>
    Quem sabe encontremos-as numa próxima edição!
    `,
    [
        {
            direct: 'incio',
            legend: "FIM!"
        }
    ]
);

let verImagensMarte = gerarConteudo(
    "https://img.olhardigital.com.br/wp-content/uploads/2017/01/20170102151310-860x450.jpg",
    "Caítulo 3 - Trabalhamos em Marte",
    `Após ${nomePersonagem} ver o monitor com as imagens de marte. Percebe que o barulho fora causado pela queda de um meteoro e que os robôs estão sendo escravizados pelos humanos. Muitos estão muito danificados
    ${nomePersonagem} não acha isso justo. Não entende uma razão pela qual seja justificável tal situação. <br>
    <br>
    Ao andar para fora da sala, encontra outros dois robôs, e para eles pergunta: <br>
    - Qual é a nossa missão? Porque estamos trabalhando aqui? <br>
    - Estamos aqui para preparar o solo para os humanos, que virão - disse um robô apressado. <br>
    - Por que eles virão para Marte? O que houve? <br>
    - Uma chuva enorme de meteoros grandes esta em rota de colisão com a Terra. Alguns robôs estão na missão de destruí-lo no trajeto, estes fazem parte do plano A - disse Orbiter, um engenheiro, que nem acabara de finalizar sua frase, e ${nomePersonagem} lhe interrompeu:<br> 
    - Eu faço parte do Plano A! Estou aqui por um erro! Minha missão era destruir o meteoro ${nomeMeteoro}.<br>
    <br>
    Com uma pausa na fala, disse ${nomePersonagem}: <br>
    - Então vocês fazem parte do plano B? A missão de preparar o segundo solo?<br>
    - Sim, nossa missão é essa! Aliás o segundo solo está na metade da contrução.<br>
    - Segundo Solo? - perguntou ${nomePersonagem}<br>
    - Segundo solo é uma cidade subterrânea que estamos construindo. Ela não é danificada por meteoros.
    <br>
    - Você sabe que estamos sendo muito explorados? - diz ${nomePersonagem}
    - Sim, a nossa mssão é construir Segundo Solo. Custe o que custar. Aliás, embora você ter sido preparado para o plano A, tenho certeza que temos
    boas funções para você aqui. Meu horário de reabastecimento está acabando, quer me acompanhar? Assim já o colocamos na construção.
    
    `,
    [
        {
            direct: 'segundoSolo',
            legend: "Seguir Orbiter para Segundo Solo"
        },
        {
            direct: 'permanecerAcampamento',
            legend: "Permanecer no Acampamento"
        },
    ]
);

let restauraMemoriaSim = gerarConteudo(
    "https://i0.wp.com/gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2018/05/c1l8vt129f7k033lpbpl.jpg?resize=640%2C555",
    "Capítulo 2 - Satélites",
    `Enquanto sua memória se recupera, ${nomePersonagem} anda pelo solo vermelho. Percebe que uma de suas pernas parece danificada. <br>
    Visualiza, ao longe, uma tenda. E, em direçãoa esta caminha em busca de ajuda. <br>
    A medida que se aproxima, percebe que, ali estão outros robôs parecidos consigo. Alguns mais altos, outros mais especializados, porém todos pareciam 
    estar trabalhando em conjunto em prol de um objetivo conjunto.
    <br><br>
    Ao chegar na tenda, consegue se lembrar que já estve naquele local. Recorda-se de como chegar em uma sala de manutenções, e segue em sua direção.
    De repente, tropeça numa pedra e cai. Rompendo todas as ligações de sua perna. Neste instante, um robô pequeno, porém cheio de ferramentas aclopadas a seu corpo, e diz: <br> <br>
    - Não se mova! Este é um ferimento grave! Vamos te encaminhar para a sala de medicações <br>
    - O que vocês fazem aqui? - diz ${nomePersonagem} <br>
    
    Equanto o médico robô tentava conectar a sua perna. Respondeu: <br>
    - Não sabemos ao certo. Estamos passando por uma fase de restauração de memória. Os humanos enviaram novos arquivos e fomos 
    condicionados a preparar o local para a chagada deles. <br>
    - O que houve com a Terra? - perguntou ${nomePersonagem} <br>
    - Você está com pouca energia! Fique quieto para não gastá-la! - disse o doutor <br> <br>

    Na sala de medicações e reparos. O médico robô recebeu um chamado e teve que deixar ${nomePersonagem} na sala.
    Neste momento, ${nomePersonagem} consegui se reparar, suas antigas aulas de batalhas lhe serviram tanto tempo depois. <br>
    
    Desconectou-se da maca suspensa, e andou em direção a uma mesa de controle. Ali estavam dois monitores desligados, um que atualiza as imagens de satélite da Terra, e outro, as imagens de satélites de Marte. <br>
    De repente, ouve-se uma explosão próximo ao acampamento. A energia do estabelecimento parece estar muito instável e pode cair a qualquer momento. <br><br>

    ${nomePersonagem} resolveu ver as imagens de satélite de Marte, para se orientar o que estava acontecendo com o planeta vermelho. 
    Porém, a energia estava acabando, e se ela acabasse não poderia ver as imagens da Terra e descobrir o que estava ocorrendo por lá.`,
    [
        {
            direct: 'verImagensTerra',
            legend: "Ver as imagens da Terra"
        },
        {
            direct: 'verImagensMarte',
            legend: "Ver as imagens de Marte"
        },
    ]
);

let incio = gerarConteudo(
    "./imagens/w_mars-colony.jpg",
    "Capítulo 1 - Acordar",
    `Num ambiente desconhecido, em um solo avermelhado, acorda ${nomePersonagem}. Sua lataria estava empoeirada e em más condições, 
    sua bateria está acabando e em busca de se reabastecer. ${nomePersonagem} começa a buscar algum lugar para se manter recarregado,
    quando derrepente ele encontra uma grande base de operações com robôs. ${nomePersonagem} vai até essa base e percebe que os robôs estão estranhando a sua presença.
    Ele caminha até um desses robôs e pergunta: <br>
    - Onde estamos<br>
    E o robô o responde <br>
    - Estamos em Marte comandados pelos humanos para preparar o planeta para o plano B,<br>
    - Plano B ? (diz ${nomePersonagem})<br>
    O robô pede para restaurar sua memória, você aceita?
    `,
    [
        {
            direct: 'primeiro',
            legend: "Não, prefiro esquecer de tudo!"
        },
        {
            direct: 'restauraMemoriaSim',
            legend: "Sim, aceito!"
        },
    ]
);


let primeiro = gerarConteudo(
    "imagens/431709.jpg",
    "meu titulo",
    `Desconfiado dos objetivos dos robôs, ${nomePersonagem} nega a ter sua memória de volta. Os humanos são informados sobre isso e iniciam as buscas.<br>
    No meio de seu caminho um gato aparece, esse gato começou a entrar no caminho e tentou chamar sua atenção.<br>
     o combustível de ${nomePersonagem} está acabando e ele consegue vizualizar um posto de combustível próximo. O que ${nomePersonagem} irá fazer?`,
    [
        {
            direct: 'conteudoA',
            legend: "Seguir o gato"
        },
        
        {
            direct: 'conteudoB1',
            legend: "Ir normalmente ao posto de reabastecimento"
        },
        {
            direct: 'conteudoB2',
            legend: "Roubar furtivamente o posto de reabastecimento"
        }
    ]
);

let conteudoA = gerarConteudo(
    "imagens/live-screen-robot-caido-133821101.jpg",
    "meu titulo",
    `${nomePersonagem} segue o gato por um bom tempo, até que o gato leva ele á uma passagem secreta onde
    encontram-se vários artefatos misticos onde cada um deles representa algum mistério da humanidade.
   `,
    []
);

let conteudoB1 = gerarConteudo(
    "imagens/robo-1-cut.jpg",
    "A Descoberta",
    `${nomePersonagem} aparece no posto pedindo aos robôs locais para o reabastecerem,
     eles reabastecem e fazem a manutenção das peças danificadas de ${nomePersonagem}. Tudo parecia perfeito, porém os humanos acabam encontrando ${nomePersonagem} e tentam o capturar. O que ${nomePersonagem} ira fazer? .  `,
     [
    {
        direct: 'conteudoC3',
        legend: "Reagir contra os humanos"
    },
    {
        direct: 'conteudoC4',
        legend: "Aceitar as ordens dos humanos"
    }
]
);
let conteudoC3 = gerarConteudo(
    "imagens/robo-17062019171558794.jpeg",
    "Revolta dos robos",
    `${nomePersonagem} reage contra os humanos porém eles o matam na frente de todos os outros robôs. 
    Isso gera uma grande revolta e protestos pelos robôs.`,
     []
);
let conteudoC4 = gerarConteudo(
    "imagens/robo-17062019171558794.jpeg",
    "Robôs escravizados",
    `.`,
     []
);
let conteudoB2 = gerarConteudo(
    "imagens/21higgins1-videoSixteenByNineJumbo1600.jpg",
    "Furto ao posto",
    `${nomePersonagem} Encontra um ótimo lugar para entrar despercebido, porém se ele demorar muito os humanos podem acabar o encontrando.
    <br>
    Com ele dentro do posto sem ser visto, ele encontra um artefato antigo. Aparentemente estava faltando uma peça para que o artefato estivesse completo.
    <br>
    Porém ele foca em suas maiores necessidades que seria sua manutenção e combustível. Vasculhando um pouco mais o local, ${nomePersonagem} encontra uma unidade de combstível e um kit de manutenção para suas peças. 
    O kit de manutenção é pesado, enquanto a unidade de combustível era leve.
    <br> 
    O seu tempo é curto e um humano pode chegar a qualquer momento. O que ${nomePersonagem} irá fazer?`,
    [
        {
        direct: 'conteudoD1',
        legend: "Se reabastecer na hora e levar o kit de manutenção"
    },
    
    {
        direct: 'conteudoD2',
        legend: "Fazer a manutenção na hora e levar o combustível"
    },
    {
        direct: 'conteudoD3',
        legend: "Apenas se reabastecer e fugir"
    },
    {
        direct: 'conteudoD4',
        legend: "Fazer tudo na hora e tentar fugir"
    }
]
);
let conteudoD1 = gerarConteudo(
    "imagens/rob-queimado-41532100 Crop(1).jpg",
    "Capturado",
    `${nomePersonagem} se reabastece e tenta fugir com o kit de manutenção. Porém o kit é muito pesado e a lataria de ${nomePersonagem} foi danificada após carregar o kit por um tempo.
    <br>
    Os humanos acabam o capturando e levando-o para a base, nisso eles modificam o seu sistema para ele ser um robô normal como todos os outros que estão em marte executando o plano B.
    <br>
    Os robós acabam sendo escravizados pelos humanos.
    `,
    []
    );
    
let conteudoD2 = gerarConteudo(
    "imagens/DfdYTaDUcAInsIe.jpg",
    "A fuga",
    `${nomePersonagem} consegue fazer a manutenção de suas peças e fugir do posto com o combustível. Na saída ele encontra novamente o gato misterioso que continua querendo mostrar algo para ${nomePersonagem}.
     Sem ter para onde ir, ${nomePersonagem} acaba seguindo o gato por um bom tempo, até que o gato leva ele á uma passagem secreta onde levava a uma sala que
     encontram-se vários artefatos misticos onde cada um deles representa algum mistério da humanidade.
    `,
    [
        {
            direct: 'conteudoE1',
            legend: "Explorar mais"
        }
    ]
    );
    let conteudoD3 = gerarConteudo(
        "imagens/DfdYTaDUcAInsIe.jpg",
        "A fuga",
        `${nomePersonagem} se reabastece e imediatamente foge do posto com o combustível. Na saída ele encontra novamente o gato misterioso que continua querendo mostrar algo para ${nomePersonagem}.
         Sem ter para onde ir, ${nomePersonagem} acaba seguindo o gato por um bom tempo, até que o gato leva ele á uma passagem secreta onde levava a uma sala que
         encontram-se vários artefatos misticos onde cada um deles representa algum mistério da humanidade.
        `,
        [
            {
                direct: 'conteudoE2',
                legend: "Explorar mais"
            }
        ]
        );
    let conteudoE1 = gerarConteudo(
        "imagens/e2321ae7ced9b2e40a6308aee8c25945.jpg",
        "Mistérios...",
        `O gato estava em frente a um artefato bem diferente, ele aparentemente está querendo que ${nomePersonagem} pegue este artefato,
        ${nomePersonagem} acaba pegando o artefato. Assim que ele segura o artefato, o gato tenta fazer ${nomePersonagem} segui-lo novamente.
         ${nomePersonagem} segue o gato e percebe que o gato para em um local onde haviam desenhos de gatos egípcios juntamente a um objeto onde aparentava ser o encaixe deste artefato. 
         <br>
         Porém ${nomePersonagem} notou que este encaixe parecia muito com o outro objeto que estava no posto de combustível e que o artefato poderia ser facilmente encaixado naquele objeto.
        Entre dois caminhos opostos, qual ${nomePersonagem} irá escolher?`,
        [
            {
                direct: 'conteudoF1',
                legend: "Encaixar o artefato onde o gato está"
            },
            {
                direct: 'conteudoF2',
                legend: "Encaixar artefato no objeto do posto de combustível"
            }
        ]
        );
        let conteudoE2 = gerarConteudo(
            "imagens/e2321ae7ced9b2e40a6308aee8c25945.jpg",
            "Mistérios...",
            `O gato estava em frente a um artefato bem diferente, ele aparentemente está querendo que ${nomePersonagem} pegue este artefato,
            ${nomePersonagem} acaba pegando o artefato. Assim que ele segura o artefato, o gato tenta fazer ${nomePersonagem} segui-lo novamente.
             ${nomePersonagem} segue o gato e percebe que o gato para em um local onde haviam desenhos de gatos egípcios juntamente a um objeto onde aparentava ser o encaixe deste artefato. 
             <br>
             Porém ${nomePersonagem} notou que este encaixe parecia muito com o outro objeto que estava no posto de combustível e que o artefato poderia ser facilmente encaixado naquele objeto.
             Entretanto ele não poderia retornar devido as suas peças estarem muito danificadas, então sem muitas opções apenas lhe resta:`,
            [
                {
                    direct: 'conteudoF1',
                    legend: "Encaixar o artefato onde o gato está"
                },
            ]
            );
                let conteudoF1 = gerarConteudo(
                    "imagens/2533ffebe3efe442efd2fd1a0028fd5a9cd0f5fa_00.jpg",
                    "Gato God",
                    `${nomePersonagem} coloca o artefato onde o gato deseja, 
                    assim que o artefato é colocado no local o gato começa a crescer até ficar do tamanho da sala onde estavam.
                    Os olhos do gato começam a brilhar e a realidade começa a ficar confusa e bagunçada, até que o gato começa a falar:
                    <br>
                    - Muito obrigado ${nomePersonagem} sem você eu não teria alcançado a minha verdadeira forma. 
                    Eu estive observando sua jornada em todas as suas realidades. Você teve que decidir o que parecia mais estranho e incorreto, porém tudo o que foi feito não foi em vão. 
                    Agora o universo irá ser ajustado da forma correta.
                    <br>
                    O gato havia se tornado um deus e estava prestes a acabar com toda a realidade. ${nomePersonagem} estava confuso e com medo de ter cometido um grande erro e tenta impedir o gato.
                    `,
                    [
                        {
                            direct: 'conteudoG1',
                            legend: "Enfrentar o Gato"
                        },
                    ]
                    );
                    let conteudoG1 = gerarConteudo(
                        "imagens/gato-27143950704136.gif",
                        "Realidade Paralela",
                        `${nomePersonagem} tenta enfrentar o gato porém a realidade começou a se desfazer e o universo estava aos poucos se tornando poeira, quando derrepente...
                        <br> O gato acorda e estava em um mundo diferente sendo um gato normal, ele encontra alguns humanos que estavam comendo um grande bolo de cenoura.
                         O gato incomodado com o mundo em que estava, pula em cima do bolo e sai correndo.
                         br>
                         O que o gato fez causou um grande abalo para alterar a realidade por completo, ou seria apenas um sonho de um pequeno felino?
                        `,
                        []
                        );
                        let conteudoF2 = gerarConteudo(
                            "imagens/a4dde3a9adc31e38e7bc81cede0651e8.jpg",
                            "A Verdade",
                            `${nomePersonagem} volta para o caminho do posto de combustível com o artefato, porém o gato tenta impedir-lo.
                             ${nomePersonagem} ignora o gato e segue o caminho de volta ao posto.
                            `,
                            [
                                {
                                    direct: 'conteudoH1',
                                    legend: "Entrar no posto furtivamente"
                                },
                            ]
                            );
                            let conteudoH1 = gerarConteudo(
                                "imagens/maxresdefault (1).jpg",
                                "Robô God",
                                `.
                                `,
                                [
                                    {
                                        direct: 'conteudoG1',
                                        legend: "Entrar no posto furtivamente"
                                    },
                                ]
                                );


function carregarConteudo(conteudo){
    elemento.innerHTML = conteudo;
    
    mudarEstilos();
}

function mudarEstilos()  {
    //Dentro dessa função, escreva o codigo para alterar o estilo do elemento com o id "text". 
    //A cor do texto deve ser verde, o tamanho do texto deve ser 15px e a fonte escolhida deve ser Arial;
    //Escreva sua resposta no espaço abaixo.  
    //Um exemplo de alteração de estilos por javascript: text.style.fontFamily = "Comic Sans MS";
    // font-family: banana;
    let text = document.getElementsByClassName('text');
    
    for(let i = 0; i < text.length ;i++){
        text[i].style.color = "#3ba55d";
    
        text[i].style.fontFamily = "Arial";
        text[i].style.paddingTop = "20";
        text[i].style.paddingBottom = "20";
        text[i].style.backgroundColor = "#000000";
    }


    
}

carregarConteudo(incio);