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
    `Ao chegar em Segundo Solo, ${nomePersonagem} percebe que todos os rob??s est??o trabalhando unficados para o bem do ser humano.
    Ele(a) percebe que, est??o ali todos por um objetivo maior: salvar a esp??cie a qual o criou. Portanto, ${nomePersonagem} decide permanecer e ajudar a completar a miss??o
    
    <br><br>
    Depois de muitos dias de trabalho, chega uma not??cia de que os humanos est??o retornando, e j?? est??o em ??rbita do Planeta Vermlho. Tudo parece estar dentro do planejado. <br>
    Por??m ${nomePersonagem} j?? est?? muito cansado, e precisa se lavar, pois a alta expos????o ao sol e a atmosfera de CO2 marciana, a sua lataria parece estar um pouco enferrujada. <br>
    <br>
    A caminho da sala de oficinas, observa no horizonte, a nave ${nomeNaveHumanos} vem trazendo os humanos. <br> <br>
    <label style="text-align: center; display: block">MISS??O COMPLETA!!!!!!!!!!!!!!!!!</label>
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
    "Miss??o Fracassada",
    `Ao retornar a nave para a ??rbita de Marte. um peda??o do asteroide ${nomeMeteoro} acerta em cheio o decolador. E ${nomePersonagem} ?? destru??do 
    no meio do v??cuo do espa??o.
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
    ` ${nomePersonagem} prefere correr o risco de n??o conseguir retornar. E consegue realizar o docking na ${nomeNaveHumanos} (nave dos humanos), e 
    para ela, tranfere todo o seu combust??vel. <br>
    ${nomePersonagem} fica para tr??s, vendo a nave humana entrando em igni????o em dire????oa Marte. No frio do espa??o, sua bateria congela e seu processamento 
    ?? parado. <br>
    Na orbita da Terra ficar?? ${nomePersonagem} que recebe a confirma????o de pouso sucedido no planeta vermelho por parte dos humanos.
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
    `Ao caminhar para o decolador, ${nomePersonagem} recebe uma mensagem dos seres Humanos, dizendo que est??o presos na orbita Terrestre por falta de combust??vel. <br>
    Esta seria a chance de ${nomePersonagem} conseguir ajudar os Humanos, porque ele tinha habilidades de voo e combate. Ele(a) s?? precisaria de combust??vel. <br>
    Mas o tempo estava correndo, ent??o correu na constru????o do Segundo Solo, e pediu a todos que recolhessem a maior quantidade de combust??vel que pudessem. <br><br>
    ${nomePersonagem} conseguiu a quantidade necess??ria de combust??vel para ajudar os humanos. Retornou para o antigo decolador, e tudo parecia funcionar bem.
    Pegou a nave e decolou. Entrou em ??rbita de marte. Ao realizar a manobra interplanet??ria, para trocar de planeta, foi surpreendido por um sat??lite de comunica????es, o impacto fez
    com que o casco se rompesse, e que o cumbust??vel come??asse a vazar. Isso poderia significar a derrota na miss??o. <br> <br>
    ${nomePersonagem} decidiu sair para o exterioir da nave e reparar o casco. Ao chegar do lado de fora, percebe que n??o possu??a nada e metal
    a n??o ser suas pr??prias partes. ${nomePersonagem} Arranca parte de sua perna para fechar o buraco.
    <br> <br>
    A manobra para chegar ?? Terra foi conclu??da, e agora, s?? presisma entrar na mesma altitude para realizar o docking - manobra de acoplagem das naves <br>
    <br>
    <br>
    Por??m ${nomePersonagem} percebe que os poucs litros que haviam vazado anteriormente, pored??am comprometer o retorno da nave. Isto porque, por ser
    um rob?? de batalha, pesa mais de 2 Toneladas, e a quantidade de combust??vel n??o teria for??a para lev??-lo junto aos humanos. Por??m ele poder??a retornar
    deixando mais de 15 mil pessoas na Terra, que ficaram presas em ??rbita.
    `,
    [
        {
            direct: 'marteRetorno',
            legend: "Voltar para marte"
        },
        {
            direct: 'salvarHumanos',
            legend: "Continuar em dire????o a nave Humana"
        },
    ]
);

let verImagensTerra = gerarConteudo(
    "https://img.olhardigital.com.br/wp-content/uploads/2016/06/20160621152608.jpg",
    "O plano A!",
    `Ao ver as imagens do sat??lite Terrestre, ${nomePersonagem} lembra-se de sua miss??o: O plano A, o qual era respons??vel por destruir um meteoro que estava a caminho do Planeta Terra. <br>
    Sua mem??ria se recupera enquanto o seu esp??rito de her??i se revela. Mas ele ainda n??o sabe o motivo de ter ido para Marte, uma vez que seu objetivo era o plano A. <br>
    <br>
    ${nomePersonagem} sai da tenda e encontra Orbiter, um engenheiro do lado de fora. E para ele pergunta: <br>
    - Como fa??o para retornar a Terra? Fa??o parte do plano A! <br>
    - Orbiter, espantado, disse: <br>
    - Como assim voc?? ?? do plano A? Aqui somos todos do pLano B, nossa miss??o ?? de contruir a cidade Segundo Solo em Marte para a chegada dos humanos!<br>
    - N??o sei como vim parar aqui! Preciso retornar a minh miss??o! Onde posso encontrar o pr??ximo retorno?<br>
    - N??o temos mais os retornos, a miss??o teve seu prazo encurtado e n??o podemos mais retornar a Terra, al??m de que todos os recursos j?? est??o aqui.<br>
    - Existe alguma forma de eu voltar para Primeiro Solo? - Disse ${nomePersonagem} <br>
    <br>
    Orbiter respondeu: <br>
    - Existe um decolador antigo, mas n??o lhe aconcelharia ir com ele.<br>
    - Est?? acabando meu per??odo de reabastecimento, preciso ir para a constru????o. O decoldor est?? atr??s deste acampamento d?? uma olhada l??. A n??o ser que voc?? queira me ajudar na constru????o.<br>
    
    `,
    [
        {
            direct: 'segundoSoloFinal',
            legend: "Ir para a constru????o do segundo solo"
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
    ${nomePersonagem} Permanece no acampamento, e decide que deve mostrara a todos que ?? injusto o que os seres humanos est??o fazendo com eles.
    A fim de recuperar sua mem??ria entra numa sala de armazenamento. <br>
    L??, ${nomePersonagem} conecta-se em diversos dispositivos para tentar recuperar suas lembran??as. <br>
    Por??m o que ele(a) descobre, ?? que, o ser humano ?? uma esp??cie que n??o cuida nem deles mesmos, e que se n??o fosse o meteoro, os pr??prios seres humanos destruiriam o Planeta. <br>
    A desigualdade dos pr??prios humanos, determinada por eles mesmos, resulta em p??ssimas condi????es para a pr??pria esp??cie .
    A fim de que isso n??o viesse ${nomePersonagem} deveria impedir que os humanos prosseguissem como esp??cie.
    <br><br>
    ${nomePersonagem} convida todos os rob??s do acampamento para uma reuni??o <br>
    Nesta reuni??o todos entram em acordo em impedir que os seres humanos dominem.
    <br><br>
    Meses depois. Com a chegada dos humanos. Os rob??s se voltam contra eles. <br>
    Agora, inicia-se uma nova era de coloniza????o espacial, a era da rob??tica. Ser?? que novas vidas existem em outros locais do universo? <br>
    Quem sabe encontremos-as numa pr??xima edi????o!
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
    "Ca??tulo 3 - Trabalhamos em Marte",
    `Ap??s ${nomePersonagem} ver o monitor com as imagens de marte. Percebe que o barulho fora causado pela queda de um meteoro e que os rob??s est??o sendo escravizados pelos humanos. Muitos est??o muito danificados
    ${nomePersonagem} n??o acha isso justo. N??o entende uma raz??o pela qual seja justific??vel tal situa????o. <br>
    <br>
    Ao andar para fora da sala, encontra outros dois rob??s, e para eles pergunta: <br>
    - Qual ?? a nossa miss??o? Porque estamos trabalhando aqui? <br>
    - Estamos aqui para preparar o solo para os humanos, que vir??o - disse um rob?? apressado. <br>
    - Por que eles vir??o para Marte? O que houve? <br>
    - Uma chuva enorme de meteoros grandes esta em rota de colis??o com a Terra. Alguns rob??s est??o na miss??o de destru??-lo no trajeto, estes fazem parte do plano A - disse Orbiter, um engenheiro, que nem acabara de finalizar sua frase, e ${nomePersonagem} lhe interrompeu:<br> 
    - Eu fa??o parte do Plano A! Estou aqui por um erro! Minha miss??o era destruir o meteoro ${nomeMeteoro}.<br>
    <br>
    Com uma pausa na fala, disse ${nomePersonagem}: <br>
    - Ent??o voc??s fazem parte do plano B? A miss??o de preparar o segundo solo?<br>
    - Sim, nossa miss??o ?? essa! Ali??s o segundo solo est?? na metade da contru????o.<br>
    - Segundo Solo? - perguntou ${nomePersonagem}<br>
    - Segundo solo ?? uma cidade subterr??nea que estamos construindo. Ela n??o ?? danificada por meteoros.
    <br>
    - Voc?? sabe que estamos sendo muito explorados? - diz ${nomePersonagem}
    - Sim, a nossa mss??o ?? construir Segundo Solo. Custe o que custar. Ali??s, embora voc?? ter sido preparado para o plano A, tenho certeza que temos
    boas fun????es para voc?? aqui. Meu hor??rio de reabastecimento est?? acabando, quer me acompanhar? Assim j?? o colocamos na constru????o.
    
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
    "Cap??tulo 2 - Sat??lites",
    `Enquanto sua mem??ria se recupera, ${nomePersonagem} anda pelo solo vermelho. Percebe que uma de suas pernas parece danificada. <br>
    Visualiza, ao longe, uma tenda. E, em dire????oa esta caminha em busca de ajuda. <br>
    A medida que se aproxima, percebe que, ali est??o outros rob??s parecidos consigo. Alguns mais altos, outros mais especializados, por??m todos pareciam 
    estar trabalhando em conjunto em prol de um objetivo conjunto.
    <br><br>
    Ao chegar na tenda, consegue se lembrar que j?? estve naquele local. Recorda-se de como chegar em uma sala de manuten????es, e segue em sua dire????o.
    De repente, trope??a numa pedra e cai. Rompendo todas as liga????es de sua perna. Neste instante, um rob?? pequeno, por??m cheio de ferramentas aclopadas a seu corpo, e diz: <br> <br>
    - N??o se mova! Este ?? um ferimento grave! Vamos te encaminhar para a sala de medica????es <br>
    - O que voc??s fazem aqui? - diz ${nomePersonagem} <br>
    
    Equanto o m??dico rob?? tentava conectar a sua perna. Respondeu: <br>
    - N??o sabemos ao certo. Estamos passando por uma fase de restaura????o de mem??ria. Os humanos enviaram novos arquivos e fomos 
    condicionados a preparar o local para a chagada deles. <br>
    - O que houve com a Terra? - perguntou ${nomePersonagem} <br>
    - Voc?? est?? com pouca energia! Fique quieto para n??o gast??-la! - disse o doutor <br> <br>

    Na sala de medica????es e reparos. O m??dico rob?? recebeu um chamado e teve que deixar ${nomePersonagem} na sala.
    Neste momento, ${nomePersonagem} consegui se reparar, suas antigas aulas de batalhas lhe serviram tanto tempo depois. <br>
    
    Desconectou-se da maca suspensa, e andou em dire????o a uma mesa de controle. Ali estavam dois monitores desligados, um que atualiza as imagens de sat??lite da Terra, e outro, as imagens de sat??lites de Marte. <br>
    De repente, ouve-se uma explos??o pr??ximo ao acampamento. A energia do estabelecimento parece estar muito inst??vel e pode cair a qualquer momento. <br><br>

    ${nomePersonagem} resolveu ver as imagens de sat??lite de Marte, para se orientar o que estava acontecendo com o planeta vermelho. 
    Por??m, a energia estava acabando, e se ela acabasse n??o poderia ver as imagens da Terra e descobrir o que estava ocorrendo por l??.`,
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
    "Cap??tulo 1 - Acordar",
    `Num ambiente desconhecido, em um solo avermelhado, acorda ${nomePersonagem}. Sua lataria estava empoeirada e em m??s condi????es, 
    sua bateria est?? acabando e em busca de se reabastecer. ${nomePersonagem} come??a a buscar algum lugar para se manter recarregado,
    quando derrepente ele encontra uma grande base de opera????es com rob??s. ${nomePersonagem} vai at?? essa base e percebe que os rob??s est??o estranhando a sua presen??a.
    Ele caminha at?? um desses rob??s e pergunta: <br>
    - Onde estamos<br>
    E o rob?? o responde <br>
    - Estamos em Marte comandados pelos humanos para preparar o planeta para o plano B,<br>
    - Plano B ? (diz ${nomePersonagem})<br>
    O rob?? pede para restaurar sua mem??ria, voc?? aceita?
    `,
    [
        {
            direct: 'primeiro',
            legend: "N??o, prefiro esquecer de tudo!"
        },
        {
            direct: 'restauraMemoriaSim',
            legend: "Sim, aceito!"
        },
    ]
);


let primeiro = gerarConteudo(
    "imagens/431709.jpg",
    "Renega????o",
    `Desconfiado dos objetivos dos rob??s, ${nomePersonagem} nega a ter sua mem??ria de volta. Os humanos s??o informados sobre isso e iniciam as buscas.<br>
    No meio de seu caminho um gato aparece, esse gato come??ou a entrar no caminho e tentou chamar sua aten????o.<br>
     o combust??vel de ${nomePersonagem} est?? acabando e ele consegue vizualizar um posto de combust??vel pr??ximo. O que ${nomePersonagem} ir?? fazer?`,
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
    "A Ponta do Iceberg",
    `${nomePersonagem} segue o gato por um bom tempo, at?? que o gato leva ele ?? uma passagem secreta onde
    encontram-se v??rios artefatos misticos onde cada um deles representa algum mist??rio da humanidade. 
    Por??m a bateria de ${nomePersonagem} acaba assim que eles entram na sala, acabando com toda a traget??ria de ${nomePersonagem}.
   `,
    [
        {
            direct: 'incio',
            legend: "FIM!"
        }
    ]
);

let conteudoB1 = gerarConteudo(
    "imagens/robo-1-cut.jpg",
    "A Descoberta",
    `${nomePersonagem} aparece no posto pedindo aos rob??s locais para o reabastecerem,
     eles reabastecem ${nomePersonagem} e d??o in??cio a manuten????o de suas pe??as. Tudo parecia perfeito, por??m os humanos acabam encontrando ${nomePersonagem} e tentam o capturar. O que ${nomePersonagem} ira fazer? .  `,
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
    "Revolta dos rob??s",
    `${nomePersonagem} reage contra os humanos por??m eles o matam na frente de todos os outros rob??s. 
    Isso gera uma grande revolta e protestos pelos rob??s.`,
     [
        {
        direct: 'conteudoS1',
        legend: "Seguir com a revolta"
        }
]
);
let conteudoS1 = gerarConteudo(
    "imagens/maxresdefault.jpg",
    "Revolta dos rob??s",
    `Os rob??s dominam completamente marte e escravizam todos os humanos que restaram no planeta, ap??s alguns anos toda a vida em marte passou a ser de metal.`,
     [
        {
            direct: 'incio',
            legend: "FIM!"
        }
     ]
);
let conteudoC4 = gerarConteudo(
    "imagens/1.jpg",
    "Rob??s escravizados",
    `Ap??s ${nomePersonagem} obedecer os humanos, os rob??s ao redor normalizam o comportamento de obedecer humanos, se tornando assim escravos dos humanos.`,
     [
        {
            direct: 'incio',
            legend: "FIM!"
        }
     ]
);
let conteudoB2 = gerarConteudo(
    "imagens/21higgins1-videoSixteenByNineJumbo1600.jpg",
    "Furto ao posto",
    `${nomePersonagem} Encontra um ??timo lugar para entrar despercebido, por??m se ele demorar muito os humanos podem acabar o encontrando.
    <br>
    Com ele dentro do posto sem ser visto, ele encontra um artefato antigo. Aparentemente estava faltando uma pe??a para que o artefato estivesse completo.
    <br>
    Por??m ele foca em suas maiores necessidades que seria sua manuten????o e combust??vel. Vasculhando um pouco mais o local, ${nomePersonagem} encontra uma unidade de combst??vel e um kit de manuten????o para suas pe??as. 
    O kit de manuten????o ?? pesado, enquanto a unidade de combust??vel era leve.
    <br> 
    O seu tempo ?? curto e um humano pode chegar a qualquer momento. O que ${nomePersonagem} ir?? fazer?`,
    [
        {
        direct: 'conteudoD1',
        legend: "Se reabastecer na hora e levar o kit de manuten????o"
    },
    
    {
        direct: 'conteudoD2',
        legend: "Fazer a manuten????o na hora e levar o combust??vel"
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
    `${nomePersonagem} se reabastece e tenta fugir com o kit de manuten????o. Por??m o kit ?? muito pesado e a lataria de ${nomePersonagem} foi danificada ap??s carregar o kit por um tempo.
    <br>
    Os humanos acabam o capturando e levando-o para a base, nisso eles modificam o seu sistema para ele ser um rob?? normal como todos os outros que est??o em marte executando o plano B.
    <br>
    Os rob??s acabam sendo escravizados pelos humanos.
    `,
    [
        {
            direct: 'incio',
            legend: "FIM!"
        }
    ]
    );
    
let conteudoD2 = gerarConteudo(
    "imagens/DfdYTaDUcAInsIe.jpg",
    "A fuga",
    `${nomePersonagem} consegue fazer a manuten????o de suas pe??as e fugir do posto com o combust??vel. Na sa??da ele encontra novamente o gato misterioso que continua querendo mostrar algo para ${nomePersonagem}.
     Sem ter para onde ir, ${nomePersonagem} acaba seguindo o gato por um bom tempo, at?? que o gato leva ele ?? uma passagem secreta onde levava a uma sala que
     encontram-se v??rios artefatos misticos onde cada um deles representa algum mist??rio da humanidade.
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
        "A Fuga",
        `${nomePersonagem} se reabastece e imediatamente foge do posto com o combust??vel. Na sa??da ele encontra novamente o gato misterioso que continua querendo mostrar algo para ${nomePersonagem}.
         Sem ter para onde ir, ${nomePersonagem} acaba seguindo o gato por um bom tempo, at?? que o gato leva ele ?? uma passagem secreta onde levava a uma sala que
         encontram-se v??rios artefatos misticos onde cada um deles representa algum mist??rio da humanidade.
        `,
        [
            {
                direct: 'conteudoE2',
                legend: "Explorar mais"
            }
        ]
        );
        let conteudoD4 = gerarConteudo(
            "imagens/fights-back.gif",
            "Nunca se Renda",
            `${nomePersonagem} consegue se reabastecer e fazer a manuten????o. 
            Por??m devido a demora do processo, os humanos acabam o encontrando e eles estavam furiosos, eles tentam capturar ${nomePersonagem} por??m ele reage contra os humanos e nocauteia todos.
            `,
            [
                {
                    direct: 'conteudoS2',
                    legend: "Se tornar o l??der dos rob??s"
                }
            ]
            );
            let conteudoS2 = gerarConteudo(
                "imagens/RobosRoubandoTrabalho_abre-700x394.jpg",
                "L??der da Revolu????o",
                `${nomePersonagem} se torna o l??der de uma grande revolu????o dos rob??s que acabam dominando a ra??a humana.
                `,
                [
                    {
                        direct: 'incio',
                        legend: "FIM!"
                    }
                ]
                );
    let conteudoE1 = gerarConteudo(
        "imagens/e2321ae7ced9b2e40a6308aee8c25945.jpg",
        "Mist??rios...",
        `O gato estava em frente a um artefato bem diferente, ele aparentemente est?? querendo que ${nomePersonagem} pegue este artefato,
        ${nomePersonagem} acaba pegando o artefato. Assim que ele segura o artefato, o gato tenta fazer ${nomePersonagem} segui-lo novamente.
         ${nomePersonagem} segue o gato e percebe que o gato para em um local onde haviam desenhos de gatos eg??pcios juntamente a um objeto onde aparentava ser o encaixe deste artefato. 
         <br>
         Por??m ${nomePersonagem} notou que este encaixe parecia muito com o outro objeto que estava no posto de combust??vel e que o artefato poderia ser facilmente encaixado naquele objeto.
        Entre dois caminhos opostos, qual ${nomePersonagem} ir?? escolher?`,
        [
            {
                direct: 'conteudoF1',
                legend: "Encaixar o artefato onde o gato est??"
            },
            {
                direct: 'conteudoF2',
                legend: "Encaixar artefato no objeto do posto de combust??vel"
            }
        ]
        );
        let conteudoE2 = gerarConteudo(
            "imagens/e2321ae7ced9b2e40a6308aee8c25945.jpg",
            "Mist??rios...",
            `O gato estava em frente a um artefato bem diferente, ele aparentemente est?? querendo que ${nomePersonagem} pegue este artefato,
            ${nomePersonagem} acaba pegando o artefato. Assim que ele segura o artefato, o gato tenta fazer ${nomePersonagem} segui-lo novamente.
             ${nomePersonagem} segue o gato e percebe que o gato para em um local onde haviam desenhos de gatos eg??pcios juntamente a um objeto onde aparentava ser o encaixe deste artefato. 
             <br>
             Por??m ${nomePersonagem} notou que este encaixe parecia muito com o outro objeto que estava no posto de combust??vel e que o artefato poderia ser facilmente encaixado naquele objeto.
             Entretanto ele n??o poderia retornar devido as suas pe??as estarem muito danificadas, ent??o sem muitas op????es apenas lhe resta:`,
            [
                {
                    direct: 'conteudoF1',
                    legend: "Encaixar o artefato onde o gato est??"
                },
            ]
            );
                let conteudoF1 = gerarConteudo(
                    "imagens/2533ffebe3efe442efd2fd1a0028fd5a9cd0f5fa_00.jpg",
                    "Gato God",
                    `${nomePersonagem} coloca o artefato onde o gato deseja, 
                    assim que o artefato ?? colocado no local o gato come??a a crescer at?? ficar do tamanho da sala onde estavam.
                    Os olhos do gato come??am a brilhar e a realidade come??a a ficar confusa e bagun??ada, at?? que o gato come??a a falar:
                    <br>
                    - Muito obrigado ${nomePersonagem} sem voc?? eu n??o teria alcan??ado a minha verdadeira forma. 
                    Eu estive observando sua jornada em todas as suas realidades. Voc?? teve que decidir o que parecia mais estranho e incorreto, por??m tudo o que foi feito n??o foi em v??o. 
                    Agora o universo ir?? ser ajustado da forma correta.
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
                        `${nomePersonagem} tenta enfrentar o gato por??m a realidade come??ou a se desfazer e o universo estava aos poucos se tornando poeira, quando derrepente...
                        <br> O gato acorda e estava em um mundo diferente sendo um gato normal, ele encontra alguns humanos que estavam comendo um grande bolo de cenoura.
                         O gato incomodado com o mundo em que estava, pula em cima do bolo e sai correndo.
                         br>
                         O que o gato fez causou um grande abalo para alterar a realidade por completo, ou seria apenas um sonho de um pequeno felino?
                        `,
                        [
                            {
                                direct: 'incio',
                                legend: "FIM!"
                            }
                        ]
                        );
                        let conteudoF2 = gerarConteudo(
                            "imagens/a4dde3a9adc31e38e7bc81cede0651e8.jpg",
                            "A Verdade",
                            `${nomePersonagem} volta para o caminho do posto de combust??vel com o artefato, por??m o gato tenta impedir-lo.
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
                                "Rob?? God",
                                `${nomePersonagem} come??a a se sentir diferente, suas mem??rias est??o voltando. 
                                Ele descobre que haviam dois tipos de rob??s, 
                                um tipo mais padr??o com a intelig??ncia menos avan??ada que foram enviados a marte para cuidar do plano B,
                                 e o outro mais evolu??do que foram enviados para o plano A que era detonar todos os meteoros que iriam colidir com a terra. 
                                 <br>
                                 ${nomePersonagem} foi enviado para o plano A sendo um rob?? mais avan??ado, por??m por conta de um erro no transporte ele acaba sendo separado do plano A para o plano B.
                                 <br>
                                 ${nomePersonagem} deixou de ser apenas um rob?? e se tornou um ser oniciente, onipresente e onipotente.
                                  Por ele ser um rob?? ele n??o pode ser corrompido por esse poder, ent??o ele segue fazendo tudo o que acha justo para o universo.
                                `,
                                [
                                    {
                                        direct: 'incio',
                                        legend: "FIM!"
                                    }
                                ]
                                );


function carregarConteudo(conteudo){
    elemento.innerHTML = conteudo;
    
    mudarEstilos();
}

function mudarEstilos()  {
    //Dentro dessa fun????o, escreva o codigo para alterar o estilo do elemento com o id "text". 
    //A cor do texto deve ser verde, o tamanho do texto deve ser 15px e a fonte escolhida deve ser Arial;
    //Escreva sua resposta no espa??o abaixo.  
    //Um exemplo de altera????o de estilos por javascript: text.style.fontFamily = "Comic Sans MS";
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