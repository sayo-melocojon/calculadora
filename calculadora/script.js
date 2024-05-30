/*document.getElementById("formu").addEventListener("submit",function(event){
    event.preventDefault();
    //Declarar variables.
    var num1 = Number(document.getElementById("num_1").value);
    var num2 = Number(document.getElementById("num_2").value);
    
    //Cuando el usuario cliclea en suma.
    if(document.getElementById("IDsum").onclick === true){
        var resultado = num1 + num2;
        var txt = " + ";
     
    }else if(document.getElementById("IDres").onclick === true){
        var resultado = num1 - num2;
        var txt = " - ";
    }
        //Almacenar datos en almacenamiento local.
    localStorage.setItem("numJS_1",num1);
    localStorage.setItem("numJS_2",num2);
    localStorage.setItem("txtJS",txt);
    localStorage.setItem("resultadoJS",resultado);
        //Abre otra ventana con el resultado impreso.
    window.location.href="resultados.html";
});
*/
    //Función que se ejecuta al cliclear "+".
function sumar(){
        //Declarar variables.
    var num1 = Number(document.getElementById("num_1").value);
    var num2 = Number(document.getElementById("num_2").value);
    var resultado = num1 + num2;
    var txt = " + ";
        //Almacenar datos en almacenamiento local.
    localStorage.setItem("numJS_1",num1);
    localStorage.setItem("numJS_2",num2);
    localStorage.setItem("txtJS",txt);
    localStorage.setItem("resultadoJS",resultado);
        //Abre otra ventana con el resultado impreso.
    window.location.href="resultados.html";
}
    //Función que se ejecuta al cliclear -".
function restar(){
        //Declarar variables.
    var num1 = Number(document.getElementById("num_1").value);
    var num2 = Number(document.getElementById("num_2").value);
        //Operar
    var resultado = num1 - num2;
    var txt = " - ";
        //Almacenar datos en almacenamiento local.
    localStorage.setItem("numJS_1",num1);
    localStorage.setItem("numJS_2",num2);
    localStorage.setItem("txtJS",txt);
    localStorage.setItem("resultadoJS",resultado);
        //Abre otra ventana con el resultado impreso.
    window.location.href="resultados.html";
}
    //Función que se ejecuta al cliclear "/".
function dividir(){
    //Declarar variables.
var num1 = Number(document.getElementById("num_1").value);
var num2 = Number(document.getElementById("num_2").value);
    //Operar
var resultado = num1 / num2;
var txt = " / ";
    //Almacenar datos en almacenamiento local.
localStorage.setItem("numJS_1",num1);
localStorage.setItem("numJS_2",num2);
localStorage.setItem("txtJS",txt);
localStorage.setItem("resultadoJS",resultado);
    //Abre otra ventana con el resultado impreso.
window.location.href="resultados.html";
}
    //Función que se ejecuta al cliclear "x".
function multiplicar(){
    //Declarar variables.
var num1 = Number(document.getElementById("num_1").value);
var num2 = Number(document.getElementById("num_2").value);
    //Operar
var resultado = num1 * num2;
var txt = " x ";
    //Almacenar datos en almacenamiento local.
localStorage.setItem("numJS_1",num1);
localStorage.setItem("numJS_2",num2);
localStorage.setItem("txtJS",txt);
localStorage.setItem("resultadoJS",resultado);
    //Abre otra ventana con el resultado impreso.
window.location.href="resultados.html";
}
    //Función que se ejecuta al cliclear "borrar".



