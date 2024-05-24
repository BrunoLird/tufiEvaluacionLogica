


// Ejercicio 1
// Funcion que devuelva una frase con la primera letra de cada palabra en minuscula y el resto en mayuscula.

function transformarFrase(frase) {
    return frase
        .split(' ')
        // palabra [0] es la primera letra de la palabra
        .map(palabra => palabra[0].toLowerCase() + palabra.slice(1).toUpperCase())
        .join(' ');
        // split separamos y con join juntamos
}

let fraseOriginal = 'Hola Mundo soy Bruno';
let resultado = transformarFrase(fraseOriginal);
console.log(resultado);
// hOLA mUNDO sOY bRUNO


// Ejercicio 2
// Funcion con un array de enteros y un entero como parametro y que retorne un array con los indices sumando el entero

function indicesSumatoria(array, entero) {
    const map = new Map();


    for (let i = 0; i < array.length; i++) {
        // recorremos el array y si el map tiene el entero menos el array en la posicion i
        if (map.has(entero - array[i])) {
            //verificamos entero dado - numero actual =true me da un array
            return [map.get(entero - array[i]), i];
        }
        // si no lo encuentra lo guarda en el map
        map.set(array[i], i);
    }

    return [];
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let entero = 10;

let resultado = indicesSumatoria(array, entero);
console.log(resultado);
// 3 y 5 ya que 4 y 6 suman  10