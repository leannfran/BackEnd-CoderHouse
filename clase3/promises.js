function dividir(dividendo, divisor) {
    return new Promise(function(resolve, reject) {
      let resultado = dividendo / divisor;
      if (resultado % 2 === 0) {
        resolve(resultado);
      } else {
        reject("El resultado es impar");
      }
    })
    .then(function(resultado) {
      console.log("El resultado es: " + resultado);
    })
    .catch(function(error) {
      console.log("Error al dividir: " + error);
    });
  }
  
 
  dividir(8, 2); 
  dividir(10, 3);