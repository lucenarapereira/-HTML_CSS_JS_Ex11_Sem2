function CalculatorPA(){

    var value1 = parseInt(prompt('Digite um valor inicial: '));
    var raiz = parseInt(prompt('Digite um valor para a raiz: '));
    var pa = 'PA: <br />';

    for(var i=1; i<=10; i++){
      pa += "Termo "+i+" = "+value1+"<br />";
      value1 += raiz;
    };
      
    document.write(pa);
}
   