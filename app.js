const blocos={
bloco1:{titulo:"Bloco 1 — Propósito Divino",ramos:[
["Izunometria","Estudo relacionado à dimensão além do tempo, espaço e realidade."],
["Teosofia","Estudo de Deus, da criação e da relação entre o divino e a existência."],
["Gênesis Divino","Estudo da origem e do processo da criação divina."],
["Telosofia","Estudo do propósito e da finalidade da existência."],
["Filopistia","Estudo relacionado à fé, autoridade e defesa do propósito divino."],
["CristoSofia","Estudo da consciência messiânica e do caminho de Cristo."]
]},
bloco2:{titulo:"Bloco 2 — Ser Humano / Consciência",ramos:[
["Sonenlogia","Estudo do sonen e da sua influência na formação do ser humano."],
["Sonengogia","Estudo da formação, educação e desenvolvimento do sonen."],
["Makotologia","Estudo da pureza interior e das condições espirituais do ser humano."]
]},
bloco3:{titulo:"Bloco 3 — Natureza / Leis da Criação",ramos:[
["Johreignoses","Estudo da purificação natural e da restauração às leis da natureza."],
["Toposofia","Estudo dos lugares, espaços e sua relação com a existência."],
["Dinamosofia","Estudo das forças e movimentos presentes na criação."],
["Genesofia","Estudo da origem, transmissão e desenvolvimento da vida."],
["Cronosofia","Estudo do tempo e da sua relação com a criação."]
]}};

const artigos=[
["A VERDADE","A busca pela verdade e pela sabedoria.","A verdade"],
["A FÉ","Fé como confiança na existência da verdade.","A fé"],
["O ERRO","Uma reflexão sobre o erro e o desenvolvimento humano.","O erro"],
["A SALVAÇÃO","Uma perspectiva pansófica sobre a transformação da consciência.","A salvação"],
["A AURA ESPIRITUAL","Consciência, espírito e condição interior.","A aura espiritual"],
["A LUZ DIVINA","Luz, propósito e gratidão.","A luz divina"],
["O SISTEMA PANSÓFICO DA EDUCAÇÃO","Educação como formação do ser.","O sistema pansófico da educação"]];

const textos={
"A VERDADE":`<h2>A Verdade</h2><p>A verdade não foi e não será. A Verdade é.</p><p>A busca pela sabedoria começa quando o ser humano reconhece que existe uma verdade que transcende as suas próprias opiniões.</p><h3>Reflexão</h3><p>Conhecer é aproximar-se daquilo que é verdadeiro. A Pansofia Integral procura integrar diferentes formas de conhecimento nessa busca.</p><h3>Conclusão</h3><p>Buscar a verdade é buscar compreender a realidade e viver de acordo com aquilo que reconhecemos como verdadeiro.</p><p><strong>O Mentor Miguel Fukiau</strong></p>`,
"A FÉ":`<h2>A Fé</h2><p>Fé é confiar que a verdade existe.</p><p>A fé permite ao ser humano caminhar mesmo quando ainda não possui todas as respostas.</p><h3>Reflexão</h3><p>A fé pode ser o ponto de partida para a busca consciente da sabedoria.</p><h3>Conclusão</h3><p>Ter fé é confiar na existência da verdade e continuar caminhando em sua direção.</p><p><strong>O Mentor Miguel Fukiau</strong></p>`,
"O ERRO":`<h2>O Erro</h2><p>O erro faz parte do processo de desenvolvimento do ser humano.</p><h3>Reflexão</h3><p>Reconhecer o erro permite transformar a experiência em conhecimento e conhecimento em sabedoria.</p><h3>Conclusão</h3><p>O verdadeiro problema não está simplesmente em errar, mas em não aprender com o erro.</p><p><strong>O Mentor Miguel Fukiau</strong></p>`,
"A SALVAÇÃO":`<h2>A Salvação</h2><p>A salvação pode ser compreendida como uma transformação da consciência e da condição de existência.</p><h3>Reflexão</h3><p>Nascer de novo representa uma mudança profunda na forma como o ser humano compreende a vida.</p><h3>Conclusão</h3><p>A salvação está relacionada ao desenvolvimento de uma consciência capaz de viver em harmonia com o propósito divino.</p><p><strong>O Mentor Miguel Fukiau</strong></p>`,
"A AURA ESPIRITUAL":`<h2>A Aura Espiritual</h2><p>A aura espiritual pode ser compreendida como um campo relacionado à condição espiritual do ser humano.</p><h3>Reflexão</h3><p>A condição interior influencia a maneira como pensamos, sentimos e nos relacionamos com a vida.</p><h3>Conclusão</h3><p>O desenvolvimento espiritual começa pela transformação da condição interior.</p><p><strong>O Mentor Miguel Fukiau</strong></p>`,
"A LUZ DIVINA":`<h2>A Luz Divina</h2><p>A luz divina representa a presença do propósito, da sabedoria e da orientação espiritual.</p><h3>Reflexão</h3><p>A gratidão pode tornar-se uma forma consciente de reconhecer a luz presente na vida.</p><h3>Conclusão</h3><p>Viver com gratidão é aprender a reconhecer o valor da existência.</p><p><strong>O Mentor Miguel Fukiau</strong></p>`,
"O SISTEMA PANSÓFICO DA EDUCAÇÃO":`<h2>O Sistema Pansófico da Educação</h2><p>A educação não deve ser compreendida apenas como acumulação de informações.</p><h3>Reflexão</h3><p>Educar é contribuir para a formação da personalidade, da consciência e da capacidade de viver.</p><h3>Conclusão</h3><p>O verdadeiro ensino deve formar o ser humano, e não apenas transmitir conhecimento.</p><p><strong>O Mentor Miguel Fukiau</strong></p>`};

function mostrarPagina(id){document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));const p=document.getElementById(id);if(p)p.classList.add("active");window.scrollTo({top:0,behavior:"smooth"});fecharMenu()}
function voltarInicio(){mostrarPagina("inicio")} function irPara(id){mostrarPagina(id)}
function abrirMenu(){document.getElementById("sideMenu").classList.add("open")}
function fecharMenu(){document.getElementById("sideMenu").classList.remove("open")}

function mostrarRamos(bloco){
 const d=blocos[bloco];document.getElementById("tituloRamos").textContent=d.titulo;
 document.getElementById("listaRamos").innerHTML=d.ramos.map(r=>`<div class="ramo"><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join("");
 mostrarPagina("ramos");
}
function abrirArtigo(titulo){document.getElementById("conteudoArtigo").innerHTML=textos[titulo]||"<h2>Conteúdo em preparação</h2>";mostrarPagina("artigo")}

document.getElementById("articleList").innerHTML=artigos.map((a,i)=>`<article onclick="abrirArtigo('${a[0]}')"><span>${String(i+1).padStart(2,"0")}</span><div><h3>${a[0]}</h3><p>${a[1]}</p></div></article>`).join("");
