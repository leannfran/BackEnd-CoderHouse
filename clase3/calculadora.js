const suma = (a,b) => new Promise((resolve, reeject) => (a === 0 || b === 0) ? reeject('operacion innecesaria'):(a = b < 0)? reeject('la operacion debe ser positiva') : resolve (a + b))
