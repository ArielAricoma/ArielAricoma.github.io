var imagenes= ['../imagenes/De-gamer-a-soldado.jpg','../imagenes/El-multimillonario-disfrazado-contraataca.jpg','../imagenes/La-leyenda-del-joven-maestro.jpg','../imagenes/Mi-esposa-es-millonaria.jpg'];
cont=0;

function carrucel(contenedor){
    contenedor.addEventListener('click',e =>{
        let atras=contenedor.querySelector('.atras'),
        siguiente=contenedor.querySelector('.siguiente'),
        img=contenedor.querySelector('.img'),
        tgt=e.target;

        if(tgt===atras){
            if (cont > 0) {
                img.src=imagenes[cont -1];
                cont--;
            }else{
                img.src=imagenes[imagenes.length -1];
                cont = imagenes.length-1;
            }
        }else if(tgt===siguiente){
            if (cont < imagenes.length) {
                img.src=imagenes[cont +1];
                cont++;
            }else{
                img.src=imagenes[0];
                cont = 0;
            }
        }
    });
}
document.addEventListener("DOMcontentLoaded",()=>{
    let contenedor =document.querySelector('.contenedor')
    carrucel(contenedor);
});