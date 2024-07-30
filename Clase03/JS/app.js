// Costo de la canasta básica en 2019
const costoCanasta2019 = 38960.3; // en pesos argentinos

// Inflación acumulada del 2019 al 2023
const inflacionAcumulada = 1020; // en porcentaje

// Convertimos el porcentaje a un multiplicador
const multiplicadorInflacion = 1 + (inflacionAcumulada / 100);

// Calculamos el costo de la canasta básica en 2023
const costoCanasta2023 = costoCanasta2019 * multiplicadorInflacion;

console.log(`
  El costo de la canasta básica en 2019 era: 
  ${costoCanasta2019.toFixed(2)} pesos argentinos`
);
console.log(`
  El costo de la canasta básica en 2023 es:
   ${costoCanasta2023.toFixed(2)} pesos argentinos`
  );
