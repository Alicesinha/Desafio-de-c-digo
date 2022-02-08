// Problema 1 - Manipulando Listas

let recebeListaEOrdena = (lista) => {
    let listaOrdenada = lista.sort(function Ordena(a, b){
        if(a > b) {
            return 1;
        }

        if (b > a) {
            return -1;
        }

        return 0;
    });

    let listaSimplesOrdenada = listaOrdenada.filter(function (a, b){
        return listaOrdenada.indexOf(a) === b;
    });

    console.log(listaSimplesOrdenada);
}

let listaNumerica = [10, 10, 10, 10, 10, 4, 10, 3];
recebeListaEOrdena(listaNumerica);
length


var element = [a, b, c];

var idx = array.lastIndexOf(element);