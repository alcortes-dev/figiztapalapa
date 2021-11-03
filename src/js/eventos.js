const eventos = {
    "1": {
        tipo: "Clase Magistral",
        fecha: "20/11/2021",
        hora: "17:30",
        recinto: "Fausto Vega",
        imparte: 1
    },
    "2": {
        tipo: "Clase Magistral",
        fecha: "20/11/2021",
        hora: "18:00",
        recinto: "Quetzalcoatl",
        imparte: 1
    },
    "3": {
        tipo: "Concierto",
        fecha: "21/11/2021",
        hora: "17:30",
        recinto: "Fausto Vega",
        programa: [
            {
                interprete: 2,
                contenido: null
            }
        ]
    },
}

const interpretes = {
    "1": {
        nombre: "Interprete 1",
        resenia: "Reseña del interprete",
        imagen: "./src/img/chile.jpeg"
    },
    "2": {
        nombre: "Interprete 1",
        resenia: "Reseña del interprete",
        imagen: "./src/img/tomasa.jpg"
    }
}

const programas = {
    "1": `<b>Programa1</b>`,
    "2": `<b>Programa1</b>`,
    "3": `<b>Programa1</b>`
}

const creaElemento = (elemento, atributo = null, valor = null) => {
    let resultado = document.createElement(elemento)
    if(atributo) resultado.setAttribute(atributo, valor )
    return resultado
}

const lineInfo = (tag, contenido) => {
    let wrapper = creaElemento('p')
    let etiqueta = creaElemento('b', 'class', 'derecha')
    etiqueta.textContent = `${tag}:`
    
    let texto = document.createElement('span')
    texto.textContent = ` ${contenido}`
        
    wrapper.appendChild(etiqueta)
    wrapper.appendChild(texto)
    return wrapper
}

const estilos = `
    .nombreEvento{
        text-align: center;
    }
    .eventData p{
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 10px;
    }
    .derecha{
        text-align: right;
    }
`

const estilosInterprete = `
    .persona {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .imgInterprete {
        width: 90px;
        border-radius: 50%;
    }
`

class InterpreteInfo extends HTMLElement {
    constructor(){
        super()
        
        const persona = interpretes[this.getAttribute('persona')]
        let shadow = this.attachShadow({mode: 'open'})
        
        let wrapper = creaElemento('div', "class", 'persona')
        let img = creaElemento('img', 'class', 'imgInterprete')
        let nombre = creaElemento('span', 'class', 'nombreInterprete')

        if(persona){
            img.src= persona.imagen
            nombre.textContent = persona.nombre
        }else{
            img.src= './src/img/tomasa.jpg'
            nombre.textContent = "Pendiente"
        }
        const estilo = document.createElement('style')
        estilo.textContent = estilosInterprete

        wrapper.appendChild(img)
        wrapper.appendChild(nombre)
        shadow.appendChild(wrapper)
        shadow.appendChild(estilo)
    }
    actualiza(){
        const persona = interpretes[this.getAttribute('persona')]
        let nodo = this.shadowRoot.childNodes[0].childNodes
        
        console.log(nodo)

        nodo[0].src= persona.imagen
        nodo[1].textContent = persona.nombre
    }
}

//evento-figi
class EventoFigi extends HTMLElement {
    constructor(){
        super()
        const evento = eventos[this.getAttribute('evento')]
        let shadow = this.attachShadow({mode: 'open'})
        

        let titulo = creaElemento('h3', 'class', 'nombreEvento')
        titulo.textContent = evento.tipo
        
        let eventData = creaElemento('div', 'class', 'eventData')

        

        const style = document.createElement('style')
        style.textContent = estilos

        eventData.appendChild(lineInfo('Cuando?', `${evento.fecha} a las ${evento.hora} horas.`))
        eventData.appendChild(lineInfo('Donde?', `${evento.recinto}`))

        let interprete = null
        if(evento.tipo === "Clase Magistral"){
            eventData.appendChild(lineInfo('Imparte', `${interpretes[evento.imparte].nombre}`))
        }else{
            interprete = creaElemento(`interprete-info`, 'persona', '1')
            interprete.actualiza()
        }
        shadow.appendChild(titulo)
        shadow.appendChild(eventData)
        if(interprete) shadow.appendChild(interprete)
        shadow.appendChild(style)
    }
}




customElements.define('interprete-info', InterpreteInfo)

customElements.define('evento-figi', EventoFigi)

