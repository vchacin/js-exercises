function fibonacciGenerator (n) {

    var arrayFibonacci = [];
    
    for (var i = 0; i < n; i++){
      if (i >= 2){
        var primeraP = arrayFibonacci[i-2];
        var segundaP = arrayFibonacci[i-1];
        var resultado = primeraP+segundaP;
        arrayFibonacci.push(resultado);
      }else{
        arrayFibonacci.push(i);
      }  
    }
    return arrayFibonacci;

}
