function multiplicar(num1, num2) {
    return num1 * num2;
  }

  var resultados = document.getElementById("resultados");
  var num1 = parseInt(document.getElementById("var1").getAttribute("data-num1"));
  var veces = 10; // define cuántas veces se repetirá el ciclo
  
  while (veces > 1) {
    var titulo = "Tabla de multiplicar del número " + num1;
    var h2 = document.createElement("h2");
    h2.textContent = titulo;
    resultados.appendChild(h2);
  
    for (var i = 0; i <= 9; i++) {
      var num2 = i + 1;
      var resultado = multiplicar(num1, num2);
      var h3 = document.createElement("h3");
      h3.textContent = num1 + " x " + num2 + " = " + resultado;
  
      resultados.appendChild(h3);
    }
    
    num1++; // aumenta en 1 el valor de num1
    veces--; // disminuye en 1 la cantidad de veces que se repetirá el ciclo
  }


