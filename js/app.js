let qtdPista=100
let qtdSuperior=200
let qtdInferior=400


function comprar() {
    let ingresso= document.getElementById('tipo-ingresso').value;
    let quantidade = Number(document.getElementById('qtd').value);

    if (ingresso===''||quantidade===0|| quantidade<0){
        alert('Todos os campos devem ser preenchidos adequadamente.');
        compraAprovada('nao');
    } else {    
    if (ingresso === 'pista'){
        if (qtdPista>0 && qtdPista>=quantidade){
            qtdPista-=quantidade;

            let ingressosPista=(document.getElementById('qtd-pista'));
            ingressosPista.innerHTML=`${qtdPista}`; 

            quantidade='';
            compraAprovada('true');
        } else {
            validarQuantidade(quantidade, qtdPista, 'Pista' );
            quantidade='';
        }
                       
    } else if (ingresso === 'superior'){
        if (qtdSuperior>0 && qtdSuperior>=quantidade){
            qtdSuperior-=quantidade;

            let ingressoSuperior=document.getElementById('qtd-superior');
            ingressoSuperior.innerHTML=`${qtdSuperior}`;

            quantidade=''; 
            compraAprovada('true'); 
        } else {
            validarQuantidade(quantidade, qtdSuperior, 'Cadeira Superior' );
            quantidade='';
        }
        
    } else {
        if (qtdInferior>0 && qtdInferior>=quantidade){
            qtdInferior-=quantidade;

            let ingressosPista=document.getElementById('qtd-inferior');
            ingressosPista.innerHTML=qtdInferior; 

            quantidade='';
            compraAprovada('true');
        } else {
            validarQuantidade(quantidade, qtdInferior, 'Cadeira Inferior' );
            quantidade='';
        }
    }
          
    }
    }


function validarQuantidade(pedido, quantArmazenada, tipo) {
    if(pedido>quantArmazenada){
        alert(`Não é possível comprar essa quantidade, há apenas ${quantArmazenada} restantes de ${tipo}.` )
    }
}

function compraAprovada (text){
     const compraAprovada = String(text);
     const mensagem = document.getElementById("mensagem-sucesso");

    if (text== 'true') {
        document
            .getElementById("mensagem-sucesso")
            .classList.remove("oculto");
        setTimeout(() => {
            mensagem.classList.add("oculto");
        }, 1000);
    }
}