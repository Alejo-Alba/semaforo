const luces = document.querySelectorAll('.semaforo > .luz > div')
const red = luces[0]
const yellow = luces[1]
const green = luces[2]

function iniciarSemaforo(){
    
    setTimeout(()=>{
        ponerEnRojo()
    },2000)
    setTimeout(()=>{
        ponerEnVerde()
    },6000)
}

function ponerEnRojo(){
    sacarVerde()
    ponerAmarillo()
    setTimeout(()=>{
        sacarAmarillo()
        ponerRojo()
    },2000)
    

}

function ponerEnVerde(){
    ponerAmarillo()
    setTimeout(()=>{
        sacarRojo()
        sacarAmarillo()
        ponerVerde()
    },2000)
    

}

function ponerRojo(){
    if(!red.classList.contains("redlight")){
        red.classList.add("redlight")
    }
}

function ponerVerde(){
    if(!green.classList.contains("greenlight")){
        green.classList.add("greenlight")
    }
}

function ponerAmarillo(){
    
    if(!yellow.classList.contains("yellowlight")){
        yellow.classList.add("yellowlight")
    }
   
}

function sacarRojo(){
    
    if(red.classList.contains("redlight")){
        red.classList.remove("redlight")
    }
}

function sacarVerde(){
    console.log(green.classList.contains("greenlight"));
    if(green.classList.contains("greenlight")){
        green.classList.remove("greenlight")
    }
    
}

function sacarAmarillo(){
    if(yellow.classList.contains("yellowlight")){
        yellow.classList.remove("yellowlight")

    }
}
iniciarSemaforo()
setInterval(()=>{
    iniciarSemaforo()
},10000)