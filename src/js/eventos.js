const eventos = {
    "1": {
        tipo: "Clase Magistral",
        fecha: "20/11/2021", hora: "16:00",
        recinto: "Sala Quetzalcoatl",
        imparte: 1
    },
    "2": {
        tipo: "Clase Magistral",
        fecha: "20/11/2021",  hora: "16:45",
        recinto: "Sala Quetzalcoatl",
        imparte: 1
    },
    "3": {
        tipo: "Concierto",
        fecha: "20/11/2021",  hora: "18:00",
        recinto: "Sala Quetzalcoatl",
        programa: [
            [{ interprete: 2, contenido: null}],
            [{ interprete: 3, contenido: null}],
            [{ interprete: 4, contenido: null}],
            [{ interprete: 5, contenido: null}]
        ]
    },
    "4": {
        tipo: "Clase Magistral",
        fecha: "21/11/2021",  hora: "10:30",
        recinto: "Exconvento Culhuacan",
        imparte: 0
    },
    "5": {
        tipo: "Clase Magistral",
        fecha: "21/11/2021",  hora: "11:15",
        recinto: "Exconvento Culhuacan",
        imparte: 0
    },
    "6": {
        tipo: "Concierto",
        fecha: "21/11/2021",  hora: "12:30",
        recinto: "Exconvento Culhuacan",
        programa: [
            [{ interprete: 6, contenido: null}],
            [{ interprete: 1, contenido: null}]
        ]
    },
    "7": {
        tipo: "Clase Magistral",
        fecha: "27/11/2021", hora: "16:00",
        recinto: "Por definir",
        imparte: 7
    },
    "8": {
        tipo: "Clase Magistral",
        fecha: "27/11/2021",  hora: "16:45",
        recinto: "Por definir",
        imparte: 7
    },
    "9": {
        tipo: "Concierto",
        fecha: "27/11/2021",  hora: "17:30",
        recinto: "Por definir",
        programa: [
            [{ interprete: 0, contenido: null}],
            [{ interprete: 0, contenido: null}]
        ]
    },
    "10": {
        tipo: "Concierto",
        fecha: "28/11/2021",  hora: "12:00",
        recinto: "Por definir",
        programa: [
            [{ interprete: 0, contenido: null}],
            [{ interprete: 7, contenido: null}],
            [{ interprete: 0, contenido: null}]
        ]
    }
}

const interpretes = {
    "0": {
        nombre: "Por definir",
        resenia: ``,
        imagen: "./src/img/chile.jpeg"
    },
    "1": {
        nombre: "Natalia Tarquino",
        resenia: `Guitarrista Clásica de la Universidad Distrital Francisco José de Caldas – Facultad de Artes ASAB, nacida en Bogotá – Colombia. Comienza sus estudios en guitarra a los 7 años de edad, donde emprende una trayectoria de formación en las músicas tradicionales colombianas, pasando por instituciones emblemáticas en esta área, como la fundación Gilberto Alzate Avendaño y la Academia Luis A. Calvo. Posteriormente Ingresa a la Academia Superior de Artes de Bogotá (ASAB), facultad donde comienza sus estudios formales en música con énfasis en guitarra. Posteriormente cursa una movilidad académica luego de ganar una beca con el mejor promedio de su universidad para vivir y estudiar en Xalapa – México durante un año. Allí tuvo la oportunidad de continuar su formación musical en la Universidad Veracruzana, donde culmina los dos últimos semestres de su carrera profesional. Cuenta con una gran trayectoria como concertista, en diversas salas emblemáticas a nivel internacional. Una carrera enriquecida de experiencia como interprete, donde se pueden plasmar; dos giras internacionales por el territorio mexicano, en ciudades como Zacatecas, Durango, Xalapa, Veracruz, Ciudad de México, Oaxaca, Hermosillo, entre otras; diversos conciertos en ciudades de Colombia, además de participaciones como solista en festivales y concursos en México, Colombia y Estados Unidos. 
        Fue ganadora del Segundo Lugar en el Concurso Latinoamericano de Mujeres Interpretes de la Guitarra en Hermosillo Sonora en 2018, fue candidata nominada por la Universidad Distrital al Premio Nacional Mujeres de Éxito – Colombia 2020, participó en el Latin American Music Festival Boston 2020, en el que fue ganadora de beca para tomar masterclass con la gran maestra Sharon Isbin, además de poder presentar un concierto de gala en el Auditorio en The Rivers School Conservatory of Music – Massachusetts, estas entre otras participaciones. Natalia ha pasado por la tutoría de grandes maestros de gran talla internacional, en Colombia su formación profesional comienza con los maestros de guitarra; Yimy Robles, León Salcedo, Mario Riveros y Juan Miguel Sossa, posteriormente en México llega bajo la tutoría del guitarrista y compositor Cutberto Córdova, y este camino se ha ido enriqueciendo con un gran número de clases magistrales cursadas con grandes guitarristas a nivel mundial, como lo son: William Anderson (Estados Unidos), Mauro Zanatta (Italia), Luis Quintero (Venezuela), Luis Zea (Venezuela), Antonio Laguna (México), Mauricio Hernández (México), Norman Ruiz (Estados Unidos), entre otros. 
        Su formación Musical se ha complementado con su experiencia como docente en el área infantil, donde ha podido emprender investigaciones entorno a la pedagogía infantil de la guitarra y los que ha logrado llevar a cabo en México. También emprendió estudios en el Área de la Dirección Orquestal, por lo que cursó en la Universidad Veracruzana el Diplomado en Ensambles Instrumentales, el que culminó y aprobó satisfactoriamente luego de dirigir en quinteto de cuerdas el 3er Movimiento (Sentimental Saraband) de la Simple Symphony de Benjamin Britten en 2021. 
        Actualmente Natalia se encuentra radicada en Xalapa - México donde tuvo la oportunidad de formar su perfil laboral, al entrar como Consultora Académica del Instituto Superior de Música del Estado de Veracruz en 2020. Hoy en día ocupa el cargo como Subdirectora Académica de esta institución; de tanto valor dentro del arte y la cultura veracruzana en el territorio mexicano.`,
        imagen: "./src/img/Natalia.jpeg"
    },
    "2": {
        nombre: "Blanca Pineda",
        resenia: `Licenciada en piano por la Facultad de Música UNAM, discípula de Jesús María Figueroa, Eva del Carmen Medina y Francisco Viesca. Ha perfeccionado sus conocimientos musicales con cursos sobre Bach, música española, análisis auditivo de la música, método Alexander, ensamble, improvisación y docencia. Sus estudios sobre jazz corrieron a cargo de personalidades como Felipe Gordillo, Juan José Calatayud y Daniel Wong.
        Su trayectoria incluye presentaciones como solista, acompañante, elemento de Orquesta Sinfónica y miembro de grupos de cámara. Ha sido directora musical e integrante de numerosos proyectos musicales. Actualmente cursa la maestría en Pedagogía de las Artes en la Universidad Veracruzana, es pianista del ensamble de cámara Scherzo, docente tutor investigador del IEMS, pianista titular de la Orquesta Sinfónica de la UACM y fundadora, pianista y directora de la banda de jazz Los Ochocuartos.`,
        imagen: "./src/img/Blanca.jpg"
    },
    "3": {
        nombre: "Alan Bernal",
        resenia: "Discípulo de Blanca Pineda, comenzó como músico autodidacta para continuar en la Escuela de Iniciación Artística del Instituto Nacional de Bellas Artes número 2, para poder expandir sus horizontes musicales.  Ha tomado cursos de perfeccionamiento en jazz y música contemporánea. Actualmente estudia Educación Musical con especialidad en guitarra en la Facultad de Música UNAM, es profesor de guitarra y canto, guitarrista en la Orquesta Sinfónica de la UACM y en la banda de jazz Los Ochocuartos.",
        imagen: "./src/img/Alan.jpg"
    },
    "4": {
        nombre: "Axel",
        resenia: "Reseña del interprete",
        imagen: "./src/img/tomasa.jpg"
    },
    "5": {
        nombre: "Compa Axel",
        resenia: "Reseña del interprete",
        imagen: "./src/img/tomasa.jpg"
    },
    "6": {
        nombre: "Sheila",
        resenia: "Reseña del interprete",
        imagen: "./src/img/tomasa.jpg"
    },
    "7": {
        nombre: "Cutberto Córdova Nieto",
        resenia: `Cutberto Córdova se ha convertido en un representante de la música mexicana de nueva creación. Sus obras van desde dotaciones para guitarra solista, duetos, cuartetos, música de cámara, hasta un concierto para guitarra y orquesta.
        Frecuentemente su obra es interpretada de diversas partes del mundo incluyendo Festivales Internacionales e incluso como obra obligatoria en Concursos Nacionales.
        Cuenta con grabaciones de discos de su trabajo compositivo que se encuentran en las plataformas digitales, además de haber sido grabada su obra para NAXOS por el guitarrista mexicano Cecilio Perera.
        Gracias a su gran labor como compositor o como ejecutante, ha sido invitado en diversos foros tales como; ponente y con el Ensamble de Guitarras del ISMEV al 5º Festival Internacional de Orquestas de Guitarra en la ciudad de Cali Colombia; en una conferencia de su obra y clases magistrales en Boston en el Latin American Music Festival auspiciado por The Rivers School Conservatory; es ganador del la beca Habilitación del Perfil Internacional (HAPI) de la Universidad Veracruzana para realizar una Residencia Artística en la Universidad de Rio Grande Valley, Texas, Estados Unidos; invitado al conversatorio de compositores, además de ser interpretada su obra por la Orquesta Internacional de Guitarra en el XVI Encuentro Internacional de Guitarra en Panamá; como Jurado del Concurso Latinoamericano de Mujeres Intérpretes de la Guitarra en Hermosillo Sonora; clases magistrales, ponencia y concierto en la Universidad Distrital ASAB de Bogotá Colombia; ponencia de su CD Crónicas de Viaje en el Latin-American Guitar Festival Chicago Estados Unidos; participa en el Segundo, Tercer y Quinto Festival de Orquestas de Guitarra en la ciudad de Cali Colombia en las ediciones del donde interpretaron diversas orquestas de diferentes países su obra; conferencista en el Foro de Compositores Clutch en la Universidad de Austin Texas.
        Ha presentado su CD Mictlán en Latina, Italia; Caravaca de la Cruz, España; Universidad del Mozarteum en Salzburgo, Austria y en el Conservatorio Koninklijk de la Haya, Holanda.
        Realizó una gira con la Orquesta de Guitarras de Xalapa por un mes a China, desde Hong Kong hasta Beijing y se ha presentado en la Escuela de Artes Musicales de la Universidad de San José Costa Rica; en el Conservatorio de Música “G. B. Pergolesi” de Fermo Italia, así como una conferencia en la Universidad del Cuyo, Mendoza Argentina.`,
        imagen: "./src/img/Cutberto.jpg"
    },
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
        padding: 5px 10px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        margin: 10px;
    }
    .imgInterprete {
        width: 60px;
        border-radius: 50%;
        margin: 0 20px;
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

        shadow.appendChild(style)
        shadow.appendChild(titulo)
        shadow.appendChild(eventData)

        let interprete = null
        if(evento.tipo === "Clase Magistral"){
            eventData.appendChild(lineInfo('Imparte', "")) //`${interpretes[evento.imparte].nombre}`))
            interprete = creaElemento(`interprete-info`, 'persona', `${evento.imparte}`)
            interprete.actualiza()
            shadow.appendChild(interprete)

        }else{
            for(let i of evento.programa){
                for(let j of i){
                    interprete = creaElemento(`interprete-info`, 'persona', `${j.interprete}`)
                    interprete.actualiza()
                    shadow.appendChild(interprete)
                }
                
            }
        }
        
        
        
    }
}




customElements.define('interprete-info', InterpreteInfo)

customElements.define('evento-figi', EventoFigi)

