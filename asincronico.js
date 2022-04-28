
var peliculas = [
    pelicula1 = {
    titulo: '"Busqueda implacable"',
    rating: 5,
    loHasVisto: "Viste"

    },
    pelicula2 ={
        titulo: '"Nobit"',
    rating: 3,
    loHasVisto: "NoViste" 
    },
    pelicula3 = {
        titulo: '"Mini Espias"',
        rating: 2,
        loHasVisto: "Viste" 

    },
    pelicula4 = {
        titulo: '"La Vida es Bella"',
        rating: 5,
        loHasVisto: "Viste" 

    }

]

for(i=0; peliculas.length>i; i++) {
    console.log(peliculas[i].loHasVisto + " " +  peliculas[i].titulo + " - " + peliculas[i].rating + " " + "estrellas")
}



function arregloDeObjetos(numero,saludo) {
 var arreglo = [];
    iterador = 0;
    while(iterador<numero) {
      iterador++
        arreglo.push({[saludo]:iterador})
      
    }   
    console.log(arreglo)
  }
    

arregloDeObjetos(4,"hola")