// clase 3 back end

function doubleNumber(number) {
    return number * 2;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  // Utilizando la función externa doubleNumber como callback para la función map
  
  const doubledNumbers = numbers.map(doubleNumber);
  
  console.log(doubledNumbers); // Salida: [2, 4, 6, 8, 10]

  