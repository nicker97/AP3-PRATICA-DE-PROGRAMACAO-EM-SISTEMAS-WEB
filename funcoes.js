var perguntas = ["Como se chama o alimento extraído pelas plantas do solo?", "Celulose", "Seiva", "Mitose", "Clorofila", "2",
                "Qual bicho transmite Doença de Chagas?", "Abelha", "Barata", "Pulga", "Barbeiro", "4",
                "Qual fruto é conhecido no Norte e Nordeste como 'jerimum'?", "Caju", "Abóbora", "Chuchu", "Côco", "2",
                "Qual é o coletivo de cães?", "Matilha", "Rebanho", "Alcateia", "Manada", "1",
                "Qual é o triângulo que tem todos os lados diferentes?", "Equilátero", "Isóceles", "Escaleno", "Trapézio", "3",
                "Quem compôs o Hino da Independência?", "Dom Pedro I", "Manuel Bandeira", "Castro Alves", "Carlos Gomes", "1",
                "Qual é o antônimo de 'malograr'?", "Perder", "Conseguir", "Desprezar", "Fracassar", "2",
                "Em que país nasceu Carmem Miranda?", "Brasil", "Espanha", "Portugal", "Argentina", "3",
                "Qual foi o último Presidente do período da ditadura militar no Brasil?", "Costa e Silva", "João Figueiredo", "Ernesto Geisel", "Emílio Médici", "2",
                "Seguindo a sequência do baralho, qual carta vem depois do dez?", "Rei", "Valete", "Nove", "Ás", "2",
                "O adjetivo 'venoso' está relacionado a:", "Vela", "Vento", "Vênia", "Veia", "4",
                "Que nome se dá à purificação por meio da água?", "Abolição", "Abnegação", "Ablução", "Abrupção", "3"
            ]
var contador = score = valorBarra = numeroacertos = aproveitamento = 0
var totalperguntas = perguntas.length/6
var tempo = 1500 //1seg
        
function acertou() {
    var acertou = document.createElement("audio")
    acertou.setAttribute("src", "sons/acertou.mp3")
    acertou.setAttribute("autoplay:false", "autoplay")
    acertou.play()
}

function errou() {
    var errou = document.createElement("audio")
    errou.setAttribute("src", "sons/errou.mp3")
    errou.setAttribute("autoplay:false", "autoplay")
    errou.play()        
}

function novaPergunta() {
    if (contador<perguntas.length) { 
        window.document.getElementById('resposta1').style.backgroundColor = "#1a54e7"
        window.document.getElementById('resposta2').style.backgroundColor = "#1a54e7"
        window.document.getElementById('resposta3').style.backgroundColor = "#1a54e7"
        window.document.getElementById('resposta4').style.backgroundColor = "#1a54e7"
        window.document.getElementById('resposta1').value = "1 "
        window.document.getElementById('resposta2').value = "2 "
        window.document.getElementById('resposta3').value = "3 "
        window.document.getElementById('resposta4').value = "4 "
        window.document.getElementById('valorPlacar').innerHTML = score
        contador+=6
        valorBarra +=1
        exibirPegunta()

    }if(contador==perguntas.length){
        resp1 = window.document.getElementById('resposta1')
        resp1.parentNode.removeChild(resp1)
        resp2 = window.document.getElementById('resposta2')
        resp2.parentNode.removeChild(resp2)
        resp3 = window.document.getElementById('resposta3')
        resp3.parentNode.removeChild(resp3)
        resp4 = window.document.getElementById('resposta4')
        resp4.parentNode.removeChild(resp4)
        
        window.document.getElementById('logo').style.textAlign="center"
        pergunta.style.marginLeft= "250px"
        pergunta.style.width="300px"
        pergunta.innerHTML = `Pontuação <br>` + score + `<br><br>Respostas certas <br>` + numeroacertos + `/` + totalperguntas + `<br><br>Aproveitamento <br>` + (numeroacertos*100/totalperguntas).toFixed(0) + `%`
    }
}

function exibirPegunta() {
    pergunta.innerHTML = `<p>${perguntas[contador]}</p>`
    resposta1.value += perguntas[contador+1]
    resposta2.value += perguntas[contador+2]
    resposta3.value += perguntas[contador+3]
    resposta4.value += perguntas[contador+4] 
    window.document.getElementById('barra').value = valorBarra
    window.document.getElementById('barra').max = perguntas.length/6          
}     

function verificarAcerto1(){
    var resposta1 = window.document.getElementById('resposta1').value

    if (contador<perguntas.length) {  
        if(resposta1[0] == perguntas[contador+5]){
            window.document.getElementById('resposta1').style.backgroundColor = "#3eff43"//verde 
            score +=100
            numeroacertos+=1
            acertou()
            setTimeout(novaPergunta,tempo) 
        }
        else{
            window.document.getElementById('resposta1').style.backgroundColor = "#ff3338"//vermelho
            errou()
            setTimeout(novaPergunta,tempo)
        }
    }
 }

function verificarAcerto2(){ 
    var resposta2 = window.document.getElementById('resposta2').value
            
    if (contador<perguntas.length) { 
        if(resposta2[0] == perguntas[contador+5]){  
            window.document.getElementById('resposta2').style.backgroundColor = "#3eff43"//verde
            score +=100
            numeroacertos+=1
            acertou()
            setTimeout(novaPergunta,tempo)     
        }else{
                window.document.getElementById('resposta2').style.backgroundColor = "#ff3338"//vermelho
                errou()
                setTimeout(novaPergunta,tempo)         
        }
    }
}

function verificarAcerto3(){
    var resposta3 = window.document.getElementById('resposta3').value

    if (contador<perguntas.length){    
        if(resposta3[0] == perguntas[contador+5]){
            window.document.getElementById('resposta3').style.backgroundColor = "#3eff43"//verde 
            score +=100
            numeroacertos+=1
            acertou()
            setTimeout(novaPergunta,tempo)     
        }else{
            window.document.getElementById('resposta3').style.backgroundColor = "#ff3338"//vermelho
            errou()
            setTimeout(novaPergunta,tempo)
        }
    }
}

function verificarAcerto4(){
    var resposta4 = window.document.getElementById('resposta4').value
    if (contador<perguntas.length) { 
        if(resposta4[0] == perguntas[contador+5]){
            window.document.getElementById('resposta4').style.backgroundColor = "#3eff43"//verde
            score +=100
            numeroacertos+=1
            acertou()
            setTimeout(novaPergunta,tempo)
        }else{
            window.document.getElementById('resposta4').style.backgroundColor = "#ff3338"//vermelho
            errou()
            setTimeout(novaPergunta,tempo)
         }
    }    
}

exibirPegunta()
musicaFundo()
        