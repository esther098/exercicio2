function tabuada(){
    numero = parseInt(document.formulario.numero.value);
 
 let resultado = "";
            for (let i = 1; i <= 10; i++) {
                resultado += `${numero} x ${i} = ${numero * i} <br>`;
            }

            document.getElementById("demo").innerHTML = resultado;

 

    
}
