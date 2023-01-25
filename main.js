// Capturar evento de submit do Formulario


//------------------------------ Selecionando os ID´s -------------------------------------------------

const form = document.querySelector('#formulario') // Selecionei o ID formulario do HTML

form.addEventListener('submit', function(event){// addEventListener('submit') vai parar o evento do formulario. e dentro criei uma função anonima
    event.preventDefault() // Não deixa o formulario ser enviado
    const inputPeso = document.querySelector('#peso') // Selecionei os inputs peso e altura
    const inputAltura = document.querySelector('#altura')
    
    const peso = Number(inputPeso.value) // Converter string em numeros e selecionar o valor "value"
    const altura = Number(inputAltura.value)
    
    
    
    // ----------------------------- Condições para se Peso e Altura for falso retorna resultado invalido ----------------------------------------
    
    if(!peso){ // Condição que se o peso for invalido...
        setResultado('Peso invalido', false); // Vai retorna falso
        return // return vai parar a função
    }
    
    
    if(!altura){
        setResultado('Altura invalida', false)
        return
    }
    
    const imc = getImc(peso, altura) // Cria a variavel pra guarda o calculo do IMC
    const nivelImc = getNivelImc(imc) // Criou a variavel pra guarda os niveis do IMC

    const msg = `Seu IMC e ${imc} (${nivelImc})` // Criou a mensagem
    
    setResultado(msg, true)
    
})



//------------------------------------- Função para colocar as condições para retornar os valores de peso e altura que estão dentro do Array --------------------------
    
    function getNivelImc(imc){



        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 3', 'Obesidade grau 2']
        
        if(imc >= 39.9){
            return nivel[4]
        }
        
        if (imc >= 34.9){
            return nivel[5]
        }
        
        if (imc >= 29.9){
            return nivel[3]
        }
        
        if (imc >= 24.9){
            return nivel[2]
        }
        
        if (imc >= 18.5){
            return nivel[1]
        }
        
        if (imc < 18.5){
            return nivel[0]
        }
    }
        
        
        
        //---------------------------- Função pra fazer o calculo do IMC -----------------------------------
        
        function getImc(peso, altura){
            const imc = peso / altura ** 2
            return imc.toFixed(2)
        }
        

        


//----------------------- Função pra cria a tag<p> dentro do HTML utilizando JS -------------------

function criaP(){ // Criei a função que cria paragrafo
    const p = document.createElement('p') // Criar um paragrafo no HTML usando JS
    // p.classList.add('paragrafoResultado') // Adicionando uma classe no paragrafo "p"
    return p // Vai retornar o 'p'
}



// ---------------------- Função do resultado dentro do documento HTML -----------------------------

function setResultado(msg, isValid){ // Essa função coloca o resultado dentro do documento HTML
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''; // Zerou o HTML, vai ficar uma div em branco

    const p = criaP() // Cria um p
    
    if(isValid){
        p.classList.add('.paragarfoResultado')
    } else {
        p.classList.add('.bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p) // .appendChild() e pra inserir o elemento em na div id="resultado"
}

