let nomePersonagem = prompt("Insira o nome para o personagem pricipal");

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

let verImagensMarte = gerarConteudo(
    "https://s2.glbimg.com/rNHNn4g3PEIvReB_3_1QMRc3HC4=/165x0:1838x1152/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/q/B/LDwJqcTr6iBN99GlKRoQ/greenday.jpg",
    "Caítulo 3 - Trabalhamos em Marte",
    `Após ${nomePersonagem} ver o monitor com as imagens de marte. Percebe que o barulho fora causado pela queda de um meteoroe que os robôs estão sendo escravizados pelos humanos. Muitos estão muito denificados
    ${nomePersonagem} não acha isso justo. Não entende uma razão pela qual seja justificável tal situação. <br>
    Decidiu se voltar contra 
    
    `,
    [
        {
            direct: 'conteudoA',
            legend: "ir para o subMundo (conteudo a)"
        }
    ]
);

let restauraMemoriaSim = gerarConteudo(
    "./imagens/w_mars-colony.jpg",
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
            direct: 'uuu',
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
    `Num ambiente desconhecido, em um solo avermelhado, acorda ${nomePersonagem}. Tudo parece estar empoeirado em sua lataria, 
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
    "imagens/w_mars-colony.jpg",
    "meu titulo",
    `Após ${nomePersonagem} negar, os humanos são informados sobre isso e iniciam as buscas.<br>
    No meio de seu caminho um gato aparece, esse gato começou a entrar no caminho e tentou chamar sua atenção.<br>
     o combustível de ${nomePersonagem} está acabando e ele consegue vizualizar um posto de combustível próximo. O que ${nomePersonagem} irá fazer?`,
    [
        {
            direct: 'conteudoA',
            legend: "Seguir o gato"
        },
        
        {
            direct: 'conteudoB1',
            legend: "Ir á um posto de reabastecimento"
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
    O gato tenta levar ${nomePersonagem} até um deles, porém a bateria de ${nomePersonagem} acabou e ele não tinha pontos próximos`,
    []
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