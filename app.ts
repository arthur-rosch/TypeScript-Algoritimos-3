// 1.Faça uma função que receba um parâmetro string e um segundo como string
// também, a função deve retornar true caso o primeiro termine como o segundo.

function fim(frase: string, fim: string) {
  (frase = frase.toLowerCase()), (fim = fim.toLowerCase());

  let ultimaLetras = frase.substring(frase.length - fim.length);

  if (ultimaLetras == fim) {
    return true;
  } else {
    return false;
  }
}

console.log(fim("Arthur", "HUR"));

// 2. Faça uma função que receba uma string como parâmetro, e deve converter para
// uma nova string onde cada caractere deve ser substituído por “(“ se aparece
// apenas uma vez na string original ou por “)” se aparecer mais de uma vez. A função
// não deve diferenciar maiúsculas e minúsculas para fazer a contagem.

function Substituindo(frase: string): string {
  frase = frase.toLocaleLowerCase();
  let arrayLetras = frase.split("");

  for (let A = 0; A < arrayLetras.length; A++) {
    if (arrayLetras.includes(frase[A], A + 1)) {
      arrayLetras.splice(A, 1, ")");
      arrayLetras.splice(arrayLetras.indexOf(frase[A]), 1, ")");
    }
  }
  arrayLetras.forEach((item: string, index: number) => {
    if (item != ")") {
      arrayLetras[index] = "(";
    }
  });
  return arrayLetras.join("");
}

console.log(Substituindo("TECH"));

// 3. Faça uma função que recebe dois parâmetros: um número inteiro positivo ”n” e um
// dígito “d” entre 0 e 9. A função deve calcular o quadrado de todos os números entre
// 0 e “n”, e depois contar quantas vezes o dígito “d” aparece nos resultados das
// contas anteriores e por fim retorne esse valor. (para calcular o quadrado basta
// multiplicar um número vezes ele mesmo => k*k)
function calculandoQuadrado(numeroA: number, numeroB: number): number {
  let numero: number[] = [],
    contador = 0;

  for (let index = 0; index <= numeroA; index++) {
    numero[index] = index * index;
  }

  let numeroSeparados = numero.join("").split("");

  for (let index = 0; index < numeroSeparados.length; index++) {
    if (numeroB == parseInt(numeroSeparados[index])) {
      contador++;
    }
  }
  console.log(numero);
  return contador;
}

console.log(calculandoQuadrado(11, 6));
