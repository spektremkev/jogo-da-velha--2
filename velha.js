const espacos = document.getElementsByTagName('input'); //pega a lista de espaços do tabuleiro do jogos
const b_reiniciar = document.getElementById('reiniciar'); //pega o botão de reiniciar
const label_jogador = document.getElementById('jogador'); //pegar o label do jogador que usaremos para mostrar qual jogador tem a vez

var div1 = document.getElementById('qtd1');
var div2 = document.getElementById('qtd2');

var nome1;
var nome2;
var ponto1=0;
var ponto2=0;
var jogador;
var jogador1;
var jogador2;


for(var i=0;i<9;i++) {
	espacos[i].addEventListener('click', (event) => {
		//se a casa estiver vazia e ninguém tiver vencido a partida
		if(event.target.value=='_') {
			event.target.value=jogador; 
			if (jogador=="X"){
                event.target.style.color="#f00"; 
            }else if(jogador=="O"){
                event.target.style.color='#00f';            }

			mudarJogador();

            if(verificarVitoria()=="ponto"){
                zerar();
                

            };

            div1.innerHTML = jogador1 + ": " + ponto1;
            div2.innerHTML = jogador2 + ": " + ponto2;

            if(ponto1 == 2){
                alert(label_jogador.innerText=document.getElementById("nome1").value + " venceu")
            }
            if(ponto2 == 2){
                alert(label_jogador.innerText=document.getElementById("nome2").value + " venceu")
            }
		}       

	});
}

var zerar = function(){
    for(i=0;i<9;i++){
        espacos[i].style.backgroundColor = '#fff';
        espacos[i].style.color = '#fff';
        espacos[i].value = '_';
    }
}


b_reiniciar.addEventListener('click', (event) => {

	for(var i=0;i<9;i++) {
		espacos[i].value='_'; 
		espacos[i].style.color="#000"; 
		espacos[i].style.backgroundColor='#fff';
        espacos[i].disabled = false;        
	}

    jogador1=document.getElementById("nome1").value;
    document.getElementById("nome1").disabled=true;
    
    jogador2=document.getElementById("nome2").value;
    document.getElementById("nome2").disabled=true;
    b_reiniciar.style.backgroundColor="#555";

    div1.innerHTML = jogador1;
    div2.innerHTML = jogador2;

	sortearJogador(); 

	
});





function verificarNomes(){
    nome1=document.getElementById("nome1");
    nome2=document.getElementById("nome2");

    if(nome1.value!="" && nome2.value!=""){
        b_reiniciar.disabled=false;
    }
}



var sortearJogador = function() {
	if(Math.floor(Math.random() * 2)==0) {
		jogador = "O"; 
		label_jogador.innerText=document.getElementById("nome1").value; 
		label_jogador.style.color='#ffffff'; 
	}else{
		jogador = "X";
		label_jogador.innerText=document.getElementById("nome2").value; 
		label_jogador.style.color='#ffffff'; 
	}
}

var mudarJogador = function() {
	if(jogador=='X') {
		jogador='O';
		label_jogador.innerText=document.getElementById("nome1").value;
		label_jogador.style.color='#ffffff';
		
	}else{
		jogador='X';
		label_jogador.innerText=document.getElementById("nome2").value;
		label_jogador.style.color='#ffffff';
	}
}

var verificarVitoria = function() {
	if((espacos[0].value==espacos[1].value) && (espacos[1].value==espacos[2].value) && espacos[0].value!='_' ) {
		espacos[0].style.backgroundColor='#0F0';
		espacos[1].style.backgroundColor='#0F0';
		espacos[2].style.backgroundColor='#0F0';

        if(espacos[0].value=="O"){
            ponto1++;
            console.log("jogador 1:" + ponto1);
        }
        else if(espacos[0].value=="X"){
            ponto2++
            console.log("jogador 2:" +ponto2);
        }
        return "ponto";

	}else if((espacos[3].value==espacos[4].value) && (espacos[4].value==espacos[5].value) && espacos[3].value!='_' ) {
		espacos[3].style.backgroundColor='#0F0';
		espacos[4].style.backgroundColor='#0F0';
		espacos[5].style.backgroundColor='#0F0';

        if(espacos[3].value=="O"){
            ponto1++;
            console.log("jogador 1:" + ponto1);
        }
        else if(espacos[3].value=="X"){
            ponto2++
            console.log("jogador 2:" +ponto2);
        }	
		return "ponto";

	}else if((espacos[6].value==espacos[7].value) && (espacos[7].value==espacos[8].value) && espacos[6].value!='_' ) {
		espacos[6].style.backgroundColor='#0F0';
		espacos[7].style.backgroundColor='#0F0';
		espacos[8].style.backgroundColor='#0F0';
        if(espacos[6].value=="O"){
            ponto1++;
            console.log("jogador 1:" + ponto1);
        }
        else if(espacos[6].value=="X"){
            ponto2++
            console.log("jogador 2:" +ponto2);
        }	
		return "ponto";

	}else if((espacos[0].value==espacos[3].value) && (espacos[3].value==espacos[6].value) && espacos[0].value!='_' ) {
		espacos[0].style.backgroundColor='#0F0';
		espacos[3].style.backgroundColor='#0F0';
		espacos[6].style.backgroundColor='#0F0';
        if(espacos[0].value=="O"){
            ponto1++;
            console.log("jogador 1:" + ponto1);
        }
        else if(espacos[0].value=="X"){
            ponto2++
            console.log("jogador 2:" +ponto2);
        }	
		return "ponto";

	}else if((espacos[1].value==espacos[4].value) && (espacos[4].value==espacos[7].value) && espacos[1].value!='_' ) {
		espacos[1].style.backgroundColor='#0F0';
		espacos[4].style.backgroundColor='#0F0';
		espacos[7].style.backgroundColor='#0F0';

		if(espacos[1].value=="O"){
            ponto1++;
            console.log("jogador 1:" + ponto1);
        }
        else if(espacos[1].value=="X"){
            ponto2++
            console.log("jogador 2:" +ponto2);
        }
        return "ponto";

	}else if((espacos[2].value==espacos[5].value) && (espacos[5].value==espacos[8].value) && espacos[2].value!='_' ) {
		espacos[2].style.backgroundColor='#0F0';
		espacos[5].style.backgroundColor='#0F0';
		espacos[8].style.backgroundColor='#0F0';
        if(espacos[2].value=="O"){
            ponto1++;
            console.log("jogador 1:" + ponto1);
        }
        else if(espacos[2].value=="X"){
            ponto2++
            console.log("jogador 2:" +ponto2);
        }
        return "ponto";	
		
	}else if((espacos[0].value==espacos[4].value) && (espacos[4].value==espacos[8].value) && espacos[0].value!='_' ) {
		espacos[0].style.backgroundColor='#0F0';
		espacos[4].style.backgroundColor='#0F0';
		espacos[8].style.backgroundColor='#0F0';
        if(espacos[0].value=="O"){
            ponto1++;
            console.log("jogador 1:" + ponto1);
        }
        else if(espacos[0].value=="X"){
            ponto2++
            console.log("jogador 2:" +ponto2);
        }	
		return "ponto";

	}else if((espacos[2].value==espacos[4].value) && (espacos[4].value==espacos[6].value) && espacos[2].value!='_' ) {
		espacos[2].style.backgroundColor='#0F0';
		espacos[4].style.backgroundColor='#0F0';
		espacos[6].style.backgroundColor='#0F0';
        if(espacos[2].value=="O"){
            ponto1++;
            console.log("jogador 1:" + ponto1);
        }
        else if(espacos[2].value=="X"){
            ponto2++
            console.log("jogador 2:" +ponto2);
        }
        return "ponto";
	}
	
			
    
}