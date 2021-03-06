const eventos = {
    "1": {
        tipo: "Clase Magistral",
        fecha: "20/11/2021", hora: "16:00",
        recinto: "Sala Quetzalcoatl",
        referencia: 'https://www.google.com/maps/place/Auditorio+%22Quetzalcoatl%22/@19.3584681,-99.0905918,19.37z/data=!3m1!5s0x85d1fde5fe944127:0xa8ec348d62910dc9!4m5!3m4!1s0x85d1fde5fcdda86d:0x5397b1774d229a9e!8m2!3d19.3587669!4d-99.0906742',
        imparte: 1
    },
    "2": {
        tipo: "Clase Magistral",
        fecha: "20/11/2021",  hora: "16:45",
        recinto: "Sala Quetzalcoatl",
        referencia: 'https://www.google.com/maps/place/Auditorio+%22Quetzalcoatl%22/@19.3584681,-99.0905918,19.37z/data=!3m1!5s0x85d1fde5fe944127:0xa8ec348d62910dc9!4m5!3m4!1s0x85d1fde5fcdda86d:0x5397b1774d229a9e!8m2!3d19.3587669!4d-99.0906742',
        imparte: 1
    },
    "3": {
        tipo: "Concierto",
        fecha: "20/11/2021",  hora: "18:00",
        recinto: "Sala Quetzalcoatl",
        referencia: 'https://www.google.com/maps/place/Auditorio+%22Quetzalcoatl%22/@19.3584681,-99.0905918,19.37z/data=!3m1!5s0x85d1fde5fe944127:0xa8ec348d62910dc9!4m5!3m4!1s0x85d1fde5fcdda86d:0x5397b1774d229a9e!8m2!3d19.3587669!4d-99.0906742',
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
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        imparte: 10
    },
    "5": {
        tipo: "Clase Magistral",
        fecha: "21/11/2021",  hora: "11:15",
        recinto: "Exconvento Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        imparte: 10
    },
    "6": {
        tipo: "Concierto",
        fecha: "21/11/2021",  hora: "12:00",
        recinto: "Exconvento Culhuacan",
        referencia: 'https://www.google.com/maps/place/Ex+Convento+de+Culhuac%C3%A1n/@19.3395286,-99.1081752,18z/data=!3m1!5s0x85ce01fdfb485a27:0xca00c51275a1e5ef!4m5!3m4!1s0x85ce01fded985e43:0x4199351d66eda0d6!8m2!3d19.3398968!4d-99.1074886',
        programa: [
            [{ interprete: 8, contenido: null}],
            [{ interprete: 1, contenido: null}]
        ]
    },
    "7": {
        tipo: "Clase Magistral",
        fecha: "27/11/2021", hora: "16:00",
        recinto: "Museo de las Culturas pasi??n Por iztapalapa",
        referencia: 'https://www.google.com/maps/place/Museo+de+las+Culturas+pasi%C3%B3n+Por+iztapalapa/@19.3578932,-99.0886145,19z/data=!4m5!3m4!1s0x85d1fdef1f9a6ab3:0x109752766732863e!8m2!3d19.3575828!4d-99.0875471',
        imparte: 7
    },
    "8": {
        tipo: "Clase Magistral",
        fecha: "27/11/2021",  hora: "16:45",
        recinto: "Museo de las Culturas pasi??n Por iztapalapa",
        referencia: 'https://www.google.com/maps/place/Museo+de+las+Culturas+pasi%C3%B3n+Por+iztapalapa/@19.3578932,-99.0886145,19z/data=!4m5!3m4!1s0x85d1fdef1f9a6ab3:0x109752766732863e!8m2!3d19.3575828!4d-99.0875471',
        imparte: 7
    },
    "9": {
        tipo: "Concierto",
        fecha: "27/11/2021",  hora: "18:00",
        recinto: "Museo de las Culturas pasi??n Por iztapalapa",
        referencia: 'https://www.google.com/maps/place/Museo+de+las+Culturas+pasi%C3%B3n+Por+iztapalapa/@19.3578932,-99.0886145,19z/data=!4m5!3m4!1s0x85d1fdef1f9a6ab3:0x109752766732863e!8m2!3d19.3575828!4d-99.0875471',
        programa: [
            [{ interprete: 6, contenido: null}],
            [{ interprete: 9, contenido: null}]
        ]
    },
    "10": {
        tipo: "Concierto",
        fecha: "28/11/2021",  hora: "12:00",
        recinto: "Sala Quetzalcoatl",
        referencia: 'https://www.google.com/maps/place/Auditorio+%22Quetzalcoatl%22/@19.3584681,-99.0905918,19.37z/data=!3m1!5s0x85d1fde5fe944127:0xa8ec348d62910dc9!4m5!3m4!1s0x85d1fde5fcdda86d:0x5397b1774d229a9e!8m2!3d19.3587669!4d-99.0906742',
        programa: [
            [{ interprete: 11, contenido: null}],
            [{ interprete: 7, contenido: null}],
            [{ interprete: 12, contenido: null}]
        ]
    }
}

const interpretes = {
    "0": {
        nombre: "Por definir",
        resenia: `Por definir`,
        imagen: "./src/img/FIG_image.png",
        fondo: './src/img/FIGFondo.png'
    },
    "1": {
        nombre: "Natalia Tarquino",
        resenia: `Guitarrista Cl??sica de la Universidad Distrital Francisco Jos?? de Caldas ??? Facultad de Artes ASAB, nacida en Bogot?? ??? Colombia. Comienza sus estudios en guitarra a los 7 a??os de edad, donde emprende una trayectoria de formaci??n en las m??sicas tradicionales colombianas, pasando por instituciones emblem??ticas en esta ??rea, como la fundaci??n Gilberto Alzate Avenda??o y la Academia Luis A. Calvo. Posteriormente Ingresa a la Academia Superior de Artes de Bogot?? (ASAB), facultad donde comienza sus estudios formales en m??sica con ??nfasis en guitarra. Posteriormente cursa una movilidad acad??mica luego de ganar una beca con el mejor promedio de su universidad para vivir y estudiar en Xalapa ??? M??xico durante un a??o. All?? tuvo la oportunidad de continuar su formaci??n musical en la Universidad Veracruzana, donde culmina los dos ??ltimos semestres de su carrera profesional. Cuenta con una gran trayectoria como concertista, en diversas salas emblem??ticas a nivel internacional. Una carrera enriquecida de experiencia como interprete, donde se pueden plasmar; dos giras internacionales por el territorio mexicano, en ciudades como Zacatecas, Durango, Xalapa, Veracruz, Ciudad de M??xico, Oaxaca, Hermosillo, entre otras; diversos conciertos en ciudades de Colombia, adem??s de participaciones como solista en festivales y concursos en M??xico, Colombia y Estados Unidos. 
        Fue ganadora del Segundo Lugar en el Concurso Latinoamericano de Mujeres Interpretes de la Guitarra en Hermosillo Sonora en 2018, fue candidata nominada por la Universidad Distrital al Premio Nacional Mujeres de ??xito ??? Colombia 2020, particip?? en el Latin American Music Festival Boston 2020, en el que fue ganadora de beca para tomar masterclass con la gran maestra Sharon Isbin, adem??s de poder presentar un concierto de gala en el Auditorio en The Rivers School Conservatory of Music ??? Massachusetts, estas entre otras participaciones. Natalia ha pasado por la tutor??a de grandes maestros de gran talla internacional, en Colombia su formaci??n profesional comienza con los maestros de guitarra; Yimy Robles, Le??n Salcedo, Mario Riveros y Juan Miguel Sossa, posteriormente en M??xico llega bajo la tutor??a del guitarrista y compositor Cutberto C??rdova, y este camino se ha ido enriqueciendo con un gran n??mero de clases magistrales cursadas con grandes guitarristas a nivel mundial, como lo son: William Anderson (Estados Unidos), Mauro Zanatta (Italia), Luis Quintero (Venezuela), Luis Zea (Venezuela), Antonio Laguna (M??xico), Mauricio Hern??ndez (M??xico), Norman Ruiz (Estados Unidos), entre otros. 
        Su formaci??n Musical se ha complementado con su experiencia como docente en el ??rea infantil, donde ha podido emprender investigaciones entorno a la pedagog??a infantil de la guitarra y los que ha logrado llevar a cabo en M??xico. Tambi??n emprendi?? estudios en el ??rea de la Direcci??n Orquestal, por lo que curs?? en la Universidad Veracruzana el Diplomado en Ensambles Instrumentales, el que culmin?? y aprob?? satisfactoriamente luego de dirigir en quinteto de cuerdas el 3er Movimiento (Sentimental Saraband) de la Simple Symphony de Benjamin Britten en 2021. 
        Actualmente Natalia se encuentra radicada en Xalapa - M??xico donde tuvo la oportunidad de formar su perfil laboral, al entrar como Consultora Acad??mica del Instituto Superior de M??sica del Estado de Veracruz en 2020. Hoy en d??a ocupa el cargo como Subdirectora Acad??mica de esta instituci??n; de tanto valor dentro del arte y la cultura veracruzana en el territorio mexicano.`,
        imagen: "./src/img/Natalia.jpeg",
        fondo: './src/img/NataliaFondo.jpg'
    },
    "2": {
        nombre: "Blanca Pineda",
        resenia: `Licenciada en piano por la Facultad de M??sica UNAM, disc??pula de Jes??s Mar??a Figueroa, Eva del Carmen Medina y Francisco Viesca. Ha perfeccionado sus conocimientos musicales con cursos sobre Bach, m??sica espa??ola, an??lisis auditivo de la m??sica, m??todo Alexander, ensamble, improvisaci??n y docencia. Sus estudios sobre jazz corrieron a cargo de personalidades como Felipe Gordillo, Juan Jos?? Calatayud y Daniel Wong.
        Su trayectoria incluye presentaciones como solista, acompa??ante, elemento de Orquesta Sinf??nica y miembro de grupos de c??mara. Ha sido directora musical e integrante de numerosos proyectos musicales. Actualmente cursa la maestr??a en Pedagog??a de las Artes en la Universidad Veracruzana, es pianista del ensamble de c??mara Scherzo, docente tutor investigador del IEMS, pianista titular de la Orquesta Sinf??nica de la UACM y fundadora, pianista y directora de la banda de jazz Los Ochocuartos.`,
        imagen: "./src/img/Blanca.jpg",
        fondo: './src/img/BlancaFondo.jpg'
    },
    "3": {
        nombre: "Alan Bernal",
        resenia: "Disc??pulo de Blanca Pineda, comenz?? como m??sico autodidacta para continuar en la Escuela de Iniciaci??n Art??stica del Instituto Nacional de Bellas Artes n??mero 2, para poder expandir sus horizontes musicales.  Ha tomado cursos de perfeccionamiento en jazz y m??sica contempor??nea. Actualmente estudia Educaci??n Musical con especialidad en guitarra en la Facultad de M??sica UNAM, es profesor de guitarra y canto, guitarrista en la Orquesta Sinf??nica de la UACM y en la banda de jazz Los Ochocuartos.",
        imagen: "./src/img/Alan.jpg",
        fondo: './src/img/AlanFondo.jpg'
    },
    "4": {
        nombre: "Axel Trejo",
        resenia: `Originario de la Ciudad de M??xico comenz?? sus estudios musicales a la edad de 19 a??os en el Centro de estudios profesionales a nivel profesional ???Ad Libitum???, bajo la direcci??n del profesor Alexis Huerta. Adem??s, ha complementado sus estudios siendo alumno de guitarristas de talla internacional como Al?? Arango y Mauro Zanatta.
        Sus intereses musicales se centran en la m??sica escrita para la??d del S. XVI, particularmente se ha enfocado en la obra del compositor franc??s Adrian Le Roy de quien ha transcrito su Primer libro de tablatura de la??d.
        Hoy en d??a estudia el ciclo proped??utico de la licenciatura Instrumentista en guitarra de la Facultad de M??sica de la UNAM bajo la c??tedra del profesor Jos?? Luis Segura Maldonado.`,
        imagen: "./src/img/Axel.jpg",
        fondo: './src/img/AxelFondo.jpg'
    },
    "5": {
        nombre: "Alexis Huerta",
        resenia: `M??sico mexicano que quiere brindar m??sica de la mejor calidad para el p??blico y as?? abrir una nueva ventana a la cultura.
                  Estudi?? la licenciatura en Guitarra en el Conservatorio Nacional de M??sica.
                  Ha tomado clases magistrales con Bertha Rojas, Benjam??n Garrido, Iliana Matos, Denis Azabagic, Simon Powis, Gohar Vardanyan, Duo Angostino y Horacio Franco.
                  Particip?? en el Concurso Interno del Conservatorio Nacional de M??sica en las ediciones 2015, 2018 y 2019.
                  Se ha presentado en diferentes foros como la Sala Silvestre Revueltas, Sala de recepciones del MUNAL, Museo Dolores Olmedo, Museo del Virreinato Walter J. Mannien Center for the Arts (Beverly Massachussets). y el Museo del Carmen.
                  Se ha desempe??ado como Maestro de guitarra en el Ad Libitum - Centro de estudios musicales a nivel profesional durante el 2018 a 2019; y como Maestro de guitarra, bajo y ukelele en el MVS Music Center desde el 2018.`,
        imagen: "./src/img/Alexis.jpg",
        fondo: './src/img/AlexisFondo.jpg'
    },
    "6": {
        nombre: "Sheila M??nica Mu??iz Estrada",
        resenia: `En el 2014, inicia sus estudios musicales, con la especializaci??n en guitarra cl??sica, en la escuela de iniciaci??n art??stica #4 (INBA), en el a??o 2017 egresa de dicha instituci??n.
        En 2019 ingresa al Conservatorio Nacional de M??sica de M??xico, a la Licenciatura de ense??anza musical, con la guitarra como instrumento eje, bajo la c??tedra del maestro Roberto Medrano.
        Ha participado como solista en distintos recintos culturales del estado de M??xico como: Casa de Morelos, Centro Cultural Real del Bosque, Estaci??n L??rica CM, centro cultural mexiquense, y en la ciudad de M??xico, como, Museo Nacional de Arte, Museo Casa Carranza, Biblioteca Vasconcelos.
        En 2017 se integra a la Orquesta sinf??nica de la UACM, participando en distintos escenarios, como: Desierto de los leones, centro cultural M??xico contempor??neo, museo Nacional de antropolog??a e historia, la antigua academia de San Carlos, biblioteca M??xico, Centro cultural Venustiano Carranza, Centro cultural mexiquense, Ex convento de Culhuac??n, as?? como en una cl??nica de interpretaci??n de cuerdas.
        Ha participado con el cuarteto de guitarras SUACM, en distintos eventos como: Festival guitarreando, , feria del tamal en Coacalco, museo de San Carlos, Ciudad Universitaria, feria del libro de la Alameda central, centro cultural Elena Garro, Ex convento de Culhuac??n, Palacio de medicina, Centro Vlady, museo de las culturas pasi??n por Ixtapalapa, este ??ltimo, Junto al compositor y Guitarrista Veracruzano Cutberto C??rdova Nieto.
        A mediados del a??o 2018 comienza a impartir clases de m??sica en centros culturales.
        Ha participado con el ensamble de m??sica popular 'Cuerdas al Aire' en recintos culturales del Edo de M??xico: Festival ??Guitarreando?? d??a Nacional de la guitarra, Casa de Morelos, en la Ciudad de M??xico: Centro Cultural Acatitla, Centro Cultural Elena Garro, entre otros. 
        En el 2020, debido a la pandemia comienza a dar recitales virtuales de m??sica acad??mica. En el 2021, da inicio a un proyecto en su canal de Youtube, llamado 'Grandes maestros de la guitarra de concierto' (https://youtube.com/channel/UCzIRiOPp3evte7rXAiCe60A ) donde busca promover la guitarra cl??sica, e impulsar a las personas a acercarse a la m??sica, por medio de entrevistas virtuales a maestros reconocidos en el ??mbito musical de dicho instrumento.
        Actualmente se encuentra en el ??mbito de la docencia a nivel b??sico, en el Centro Cultural Real del Bosque e impartiendo clases particulares,contin??a como guitarrista en la Orquesta Sinf??nica de la UACM, en el ensamble Cuerdas al Aire, como solista y en diversos proyectos personales.`,
        imagen: "./src/img/Sheila.jpg",
        fondo: './src/img/SheilaFondo.jpg'
    },
    "7": {
        nombre: "Cutberto C??rdova Nieto",
        resenia: `Cutberto C??rdova se ha convertido en un representante de la m??sica mexicana de nueva creaci??n. Sus obras van desde dotaciones para guitarra solista, duetos, cuartetos, m??sica de c??mara, hasta un concierto para guitarra y orquesta.
        Frecuentemente su obra es interpretada de diversas partes del mundo incluyendo Festivales Internacionales e incluso como obra obligatoria en Concursos Nacionales.
        Cuenta con grabaciones de discos de su trabajo compositivo que se encuentran en las plataformas digitales, adem??s de haber sido grabada su obra para NAXOS por el guitarrista mexicano Cecilio Perera.
        Gracias a su gran labor como compositor o como ejecutante, ha sido invitado en diversos foros tales como; ponente y con el Ensamble de Guitarras del ISMEV al 5?? Festival Internacional de Orquestas de Guitarra en la ciudad de Cali Colombia; en una conferencia de su obra y clases magistrales en Boston en el Latin American Music Festival auspiciado por The Rivers School Conservatory; es ganador del la beca Habilitaci??n del Perfil Internacional (HAPI) de la Universidad Veracruzana para realizar una Residencia Art??stica en la Universidad de Rio Grande Valley, Texas, Estados Unidos; invitado al conversatorio de compositores, adem??s de ser interpretada su obra por la Orquesta Internacional de Guitarra en el XVI Encuentro Internacional de Guitarra en Panam??; como Jurado del Concurso Latinoamericano de Mujeres Int??rpretes de la Guitarra en Hermosillo Sonora; clases magistrales, ponencia y concierto en la Universidad Distrital ASAB de Bogot?? Colombia; ponencia de su CD Cr??nicas de Viaje en el Latin-American Guitar Festival Chicago Estados Unidos; participa en el Segundo, Tercer y Quinto Festival de Orquestas de Guitarra en la ciudad de Cali Colombia en las ediciones del donde interpretaron diversas orquestas de diferentes pa??ses su obra; conferencista en el Foro de Compositores Clutch en la Universidad de Austin Texas.
        Ha presentado su CD Mictl??n en Latina, Italia; Caravaca de la Cruz, Espa??a; Universidad del Mozarteum en Salzburgo, Austria y en el Conservatorio Koninklijk de la Haya, Holanda.
        Realiz?? una gira con la Orquesta de Guitarras de Xalapa por un mes a China, desde Hong Kong hasta Beijing y se ha presentado en la Escuela de Artes Musicales de la Universidad de San Jos?? Costa Rica; en el Conservatorio de M??sica ???G. B. Pergolesi??? de Fermo Italia, as?? como una conferencia en la Universidad del Cuyo, Mendoza Argentina.`,
        imagen: "./src/img/Cutberto.jpg",
        fondo: './src/img/CutbertoFondo.jpg'
    },
    "8": {
        nombre: "Marco Mizael Blanno Lugo",
        resenia: `Naci?? en el municipio de Tlalnepantla de Baz en el Estado de M??xico en el a??o de 1990.
        Inicio sus estudios de manera autodidacta en el ??mbito popular a la edad de 14 a??os. Posteriormente ingres?? a la Casa de Cultura de Coacalco en el a??o 2006 donde aprendi?? guitarra cl??sica.
        En el a??o de 2015 ingresa a la Escuela de Bellas Artes de Tultepec bajo la tutela del maestro Jorge Pompa. Actualmente estudia la Licenciatura en Ejecuci??n Musical en el ??rea de Guitarra en la Escuela de Bellas Artes de Tultepec.
        Ha tomado clases magistrales con el maestro Sergio Fr??as, Cutberto C??rdoba, Natalia Tarquino, Jos?? Miguel Garc??a Torres, Jos?? Francisco Grijalva Vega, Edilberto Vega Garc??a, ha participado en cursos de direcci??n orquestal, m??todos de pedagog??a musical y el encuentro de guitarras de M??xico de la FAM UNAM.
        En el a??o 2018 ingresa a la Orquesta Sinf??nica de la Universidad Aut??noma de la Ciudad de M??xico en la que participo en cuatro temporadas, realizando conciertos en distintas ferias del libro, noche de museos, ferias internacionales; interpretando obras de todo tipo de repertorio, incluyendo popular, pero en un formato de m??sica acad??mica.
        De forma paralela a la Orquesta Sinf??nica forma parte del Cuarteto de Guitarras de la OSUACM teniendo presentaciones en ciudad universitaria, museo de San Carlos, Ex convento de Culhuac??n en noche de museos, entre otros.`,
        imagen: "./src/img/Marco.jpg",
        fondo: './src/img/MarcoFondo.jpg'
    },
    "9": {
        nombre: "Marcos Yair Guzm??n Rueda",
        resenia: `Comenz?? sus estudios formales de m??sica en el instrumento de guitarra cl??sica en la Escuela de Iniciaci??n Art??stica No. 2. Posteriormente, ingres?? a la Escuela de Bellas Artes de Toluca en la carrera t??cnica de m??sico instrumentista en guitarra cl??sica. 
        Actualmente estudia la carrera de instrumentista en guitarra de la Facultad de M??sica de la UNAM.
        Ha tenido presentaciones como solista; as?? como integrante del Ensamble Juvenil de Guitarras de la EBAT en distintos lugares, tales como: en la Acad??mica de M??sica Yamaha; en la sala Xochipilli por el "Taller de Guitarras Cl??sicas"; "La Feria del tamal 2018" en San Lorenzo Tetlixtac; en el colegio de "Comunidad Europea"; en el "Colegio Cultural Cuauht??moc"; la casa de cultura de El Sif??n en la CDMX, en el auditorio Mozart de la EBAT, entre otros.`,
        imagen: "./src/img/Yair.jpg",
        fondo: './src/img/YairFondo.jpg'
    },
    "10": {
        nombre: "Jos?? Luis Segura",
        resenia: `Licenciado Instrumentista en Guitarra por la Facultad de M??sica de la UNAM, donde se gradu?? con menci??n Honorifica. Concluyo sus estudios de Maestr??a en Musicolog??a en el Posgrado en M??sica de la UNAM. Realizo un curso de Posgrado en la Real Academia de Bellas Artes de San Fernando y el Conservatorio ???Reina Sof??a??? en Madrid Espa??a. Ha ofrecido recitales en salas de concierto a lo largo de la rep??blica Mexicana, as?? como en varios pa??ses de Europa, Am??rica Latina y el Caribe; como solista, solista con orquesta, con Nova M??sica Guitar Duo, con el Cuarteto de Guitarras de la Ciudad de M??xico, con el Duo Lux Chordarum y con el grupo de rock Fausto. Ha dictado conferencias e impartido cursos en diversos foros acad??micos y universidades de M??xico, as?? como en Bolivia, Cuba, Espa??a y Per??. Del a??o 2011 a 2018 fue coordinador de investigaci??n del CENIDIM Carlos Ch??vez del INBA. Actualmente se desempe??a como profesor de Guitarra y M??sica de C??mara en la Facultad de M??sica de la UNAM, donde ademas es presidente del Claustro de Guitarra e integrante del Comit?? Editorial.`,
        imagen: "./src/img/JoseLuisSegura.jpg",
        fondo: './src/img/JoseLuisSeguraFondo.jpg'
    },
    "11": {
        nombre: "Jos?? Miguel Garc??a Torres",
        resenia: `Licenciado en Guitarra Cl??sica por la Facultad de M??sica de la UNAM. Ha tomado cursos de perfeccionamiento guitarr??stico en las ??reas de m??sica del siglo XVI, Jazz, Lectura a primera vista, Tablatura Renacentista, Interpretaci??n en m??sica del siglo XX, Direcci??n Coral, Direcci??n de ensambles musicales diversos, Interpretaci??n de m??sica contempor??nea (Rock). Ha formado parte de diversas agrupaciones musicales como la Orquesta Sinf??nica de la UACM bajo la batuta del director Francisco Grijalba; Direcci??n y participaci??n del Cuarteto de Guitarras de la UACM. Tambi??n ha participado en el ??rea vocal con el Coro Filarm??nico Universitario UNAM; coro Gabriel Zald??var del Centro Cultural Oll??n Yoliztli. Ha tenido diversas presentaciones como solista o con ensambles musicales en la CDMX y en el interior de la rep??blica como son el Auditorio Nacional, la Sala Nezahualc??yotl, la sala Silvestre Revueltas del Centro Cultural Oll??n Yoliztli, en la Universidad Aut??noma de Nuevo Le??n, en el Centro Cultural Mexiquense Bicentenario, por mencionar algunos. Actualmente imparte la asignatura de Educaci??n Est??tica y Art??stica M??sica IV y V en el plantel No. 8 ???Miguel E. Schulz??? de la Escuela Nacional Preparatoria en la Ciudad de M??xico.`,
        imagen: "./src/img/Miguel.jpg",
        fondo: './src/img/MiguelFondo.jpg'
    },
    "12": {
        nombre: "Cuarteto de Guitarras SUAM",
        resenia: `El Cuarteto de Guitarras SUACM se forma en Enero de 2018, por el Amor y la Pasi??n de sus integrantes hacia la Guitarra de Concierto, teniendo como prioridad la interpretaci??n y difusi??n de los Grandes Compositores Mexicanos de la Guitarra Cl??sica, sin dejar de lado al resto del mundo. El Cuarteto de Guitarras SUACM cuenta con una amplia trayectoria de sus integrantes en la Guitarra de Concierto, tanto solistas como en diferentes ensambles, se ha presentado en diferentes foros como: el Antiguo Colegio de San Carlos, el Museo de San Carlos, el Palacio de Medicina de la UNAM. El Ex Convento del Desierto de   los Leones, Ex Convento de Cilhuc??n, Museo de las culturas Pasi??n por Iztapalapa, as?? como en galer??as, ferias de libro y ferias populares.
                Integrantes:
                Jos?? Miguel Garc??a Torres FaM UNAM
                Marco Mizarl Blanno Lugo EBAT
                Gabriel Lara Amador INBA`,
        imagen: "./src/img/FIG_image.png",
        fondo: './src/img/FIGFondo.png'
    }


}

const programas = {
    "1": `<b>Programa1</b>`,
    "2": `<b>Programa1</b>`,
    "3": `<b>Programa1</b>`
}

const muestraInfo = (persona) => {
    let espacio = document.getElementById('interpreteResumen')
    while(espacio.childElementCount){
        espacio.removeChild(espacio.children[0])

    }
    let miInterprete = interpretes[persona]
    let parrafos = miInterprete.resenia.split('\n')
    
    let imagen = creaElemento('img', 'class', 'imgInterpreteInfo')
    imagen.src = interpretes[persona].fondo 
    espacio.appendChild(imagen)

    let titulo = creaElemento('h3', 'class', 'tituloInterpreteInfo')
    titulo.textContent = interpretes[persona].nombre 
    espacio.appendChild(titulo)

    let p = null
    for(let i of parrafos){
        p = creaElemento('p')
        p.textContent = i
        espacio.appendChild(p)
    }
    let cierre = creaElemento('span', 'id', 'cierre')
    cierre.textContent = 'X'
    cierre.setAttribute('onClick', `cerrar()`)
    espacio.appendChild(cierre)
    /*if(interpretes[persona].fondo) {
        espacio.style.backgroundImage = `url('${interpretes[persona].fondo}')`
    }else{
        espacio.style.backgroundImage = null
    } */

    espacio.style.display = 'block'
    
}

const cerrar = () => {
    let espacio = document.getElementById('interpreteResumen')
    espacio.style.display = 'none'
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

    .persona:hover{
        color: #682444;
        cursor: pointer;
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
        //eventData.appendChild(lineInfo('Donde?', `${evento.recinto}`))
        let recinto = creaElemento('p')
        let donde = creaElemento('b', 'class', 'derecha')
        let lugar = creaElemento('a', 'class', 'linkRecinto')
        donde.textContent = 'Donde?'
        lugar.textContent = `${evento.recinto}`
        lugar.setAttribute('target', '_blank')
        lugar.href = `${evento.referencia}`
        recinto.appendChild(donde)
        recinto.appendChild(lugar)
        eventData.appendChild(recinto)
        

        shadow.appendChild(style)
        shadow.appendChild(titulo)
        shadow.appendChild(eventData)

        let interprete = null
        if(evento.tipo === "Clase Magistral"){
            eventData.appendChild(lineInfo('Imparte', "")) //`${interpretes[evento.imparte].nombre}`))
            interprete = creaElemento(`interprete-info`, 'persona', `${evento.imparte}`)
            interprete.actualiza()
            interprete.setAttribute('onClick', `muestraInfo("${evento.imparte}")`)
            shadow.appendChild(interprete)

        }else{
            eventData.appendChild(lineInfo('Interpretes', ""))
            for(let i of evento.programa){
                for(let j of i){
                    interprete = creaElemento(`interprete-info`, 'persona', `${j.interprete}`)
                    interprete.actualiza()
                    interprete.setAttribute('onClick', `muestraInfo("${j.interprete}")`)
                    shadow.appendChild(interprete)
                }
                
            }
        }
        
        
        
    }
}




customElements.define('interprete-info', InterpreteInfo)

customElements.define('evento-figi', EventoFigi)

document.onkeydown = e => { 
    if(e.key === 'Escape') cerrar()
}