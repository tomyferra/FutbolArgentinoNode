
const express = require('express')
const app = express()
const cors = require('cors');

const port = 3000
app.use(cors());

const teams = [
  {
      "id": 465,
      "Name": "Gimnasia L.P.",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/434.png",
      "City": "La Plata, Provincia de Buenos Aires",
      "StadiumName": "Estadio Juan Carmelo Zerillo",
      "StadiumImg": "https://resizer.glanacion.com/resizer/v2/el-estadio-de-gimnasia-y-esgrima-de-la-plata-F256E3YY7NEQPNAXKM3QJT6VHM.jpg?auth=c060dd4d2ee7facb59aea969c3e4235bb9a06061a8aebf63fff88ca624a78d8c&width=880&height=586&quality=70&smart=true",
      "StadiumCapacity": 24544
  },
  {
      "id": 466,
      "Name": "River Plate",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/435.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Mas Monumental",
      "StadiumImg": "https://media.api-sports.io/football/venues/19570.png",
      "StadiumCapacity": 83214
  },
  {
      "id": 467,
      "Name": "Racing Club",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/436.png",
      "City": "Avellaneda, Provincia de Buenos Aires",
      "StadiumName": "Estadio Presidente Juan Domingo Peron",
      "StadiumImg": "https://media.api-sports.io/football/venues/99.png",
      "StadiumCapacity": 51500
  },
  {
      "id": 468,
      "Name": "Rosario Central",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/437.png",
      "City": "Rosario, Provincia de Santa Fe",
      "StadiumName": "Estadio Gigante de Arroyito",
      "StadiumImg": "https://media.api-sports.io/football/venues/19391.png",
      "StadiumCapacity": 41654
  },
  {
      "id": 469,
      "Name": "Velez Sarsfield",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/438.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Jose Amalfitani",
      "StadiumImg": "https://media.api-sports.io/football/venues/115.png",
      "StadiumCapacity": 49747
  },
  {
      "id": 470,
      "Name": "Godoy Cruz",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/439.png",
      "City": "Mendoza, Provincia de Mendoza",
      "StadiumName": "Estadio Malvinas Argentinas",
      "StadiumImg": "https://media.api-sports.io/football/venues/80.png",
      "StadiumCapacity": 40268
  },
  {
      "id": 471,
      "Name": "Belgrano Cordoba",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/440.png",
      "City": "Ciudad de Cordoba, Provincia de Cordoba",
      "StadiumName": "Estadio Julio Cesar Villagra",
      "StadiumImg": "https://media.api-sports.io/football/venues/45.png",
      "StadiumCapacity": 28000
  },
  {
      "id": 472,
      "Name": "Union Santa Fe",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/441.png",
      "City": "Ciudad de Santa Fe, Provincia de Santa Fe",
      "StadiumName": "Estadio 15 de Abril",
      "StadiumImg": "https://media.api-sports.io/football/venues/1933.png",
      "StadiumCapacity": 27000
  },
  {
      "id": 473,
      "Name": "Defensa Y Justicia",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/442.png",
      "City": "Florencio Varela, Provincia de Buenos Aires",
      "StadiumName": "Estadio Norberto Tito Tomaghello",
      "StadiumImg": "https://media.api-sports.io/football/venues/59.png",
      "StadiumCapacity": 20000
  },
  {
      "id": 474,
      "Name": "Olimpo Bahia Blanca",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/443.png",
      "City": "Bahia Blanca, Provincia de Buenos Aires",
      "StadiumName": "Estadio Roberto Natalio Carminatti",
      "StadiumImg": "https://media.api-sports.io/football/venues/95.png",
      "StadiumCapacity": 15000
  },
  {
      "id": 475,
      "Name": "Patronato",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/444.png",
      "City": "Parana, Provincia de Entre Rios",
      "StadiumName": "Estadio Presbitero Bartolome Grella",
      "StadiumImg": "https://media.api-sports.io/football/venues/96.png",
      "StadiumCapacity": 22000
  },
  {
      "id": 476,
      "Name": "Huracan",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/445.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Tomas Adolfo Duco",
      "StadiumImg": "https://media.api-sports.io/football/venues/82.png",
      "StadiumCapacity": 48314
  },
  {
      "id": 477,
      "Name": "Lanus",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/446.png",
      "City": "Lanus, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ciudad de Lanus - Nestor Diaz Perez",
      "StadiumImg": "https://media.api-sports.io/football/venues/88.png",
      "StadiumCapacity": 46619
  },
  {
      "id": 478,
      "Name": "Chacarita Juniors",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/447.png",
      "City": "General San Martin, Provincia de Buenos Aires",
      "StadiumName": "Estadio de Chacarita Juniors",
      "StadiumImg": "https://media.api-sports.io/football/venues/54.png",
      "StadiumCapacity": 24300
  },
  {
      "id": 479,
      "Name": "Colon Santa Fe",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/448.png",
      "City": "Ciudad de Santa Fe, Provincia de Santa Fe",
      "StadiumName": "Estadio Brigadier General Estanislao Lopez",
      "StadiumImg": "https://media.api-sports.io/football/venues/57.png",
      "StadiumCapacity": 40000
  },
  {
      "id": 480,
      "Name": "Banfield",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/449.png",
      "City": "Lomas de Zamora, Provincia de Buenos Aires",
      "StadiumName": "Estadio Florencio Sola",
      "StadiumImg": "https://media.api-sports.io/football/venues/43.png",
      "StadiumCapacity": 34901
  },
  {
      "id": 481,
      "Name": "Estudiantes L.P.",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/450.png",
      "City": "La Plata, Provincia de Buenos Aires",
      "StadiumName": "Estadio Unico Diego Armando Maradona",
      "StadiumImg": "https://media.api-sports.io/football/venues/12716.png",
      "StadiumCapacity": 53000
  },
  {
      "id": 482,
      "Name": "Boca Juniors",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/451.png",
      "City": "Ciudad de Buenos Aires",
      "StadiumName": "Estadio Alberto Jose Armando",
      "StadiumImg": "https://media.api-sports.io/football/venues/46.png",
      "StadiumCapacity": 49000
  },
  {
      "id": 483,
      "Name": "Tigre",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/452.png",
      "City": "San Fernando, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Dellagiovanna",
      "StadiumImg": "https://media.api-sports.io/football/venues/112.png",
      "StadiumCapacity": 26282
  },
  {
      "id": 484,
      "Name": "Independiente",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/453.png",
      "City": "Avellaneda, Provincia de Buenos Aires",
      "StadiumName": "Estadio Libertadores de America",
      "StadiumImg": "https://media.api-sports.io/football/venues/7131.png",
      "StadiumCapacity": 52364
  },
  {
      "id": 485,
      "Name": "Temperley",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/454.png",
      "City": "Temperley, Provincia de Buenos Aires",
      "StadiumName": "Estadio Alfredo Martin Beranger",
      "StadiumImg": "https://media.api-sports.io/football/venues/111.png",
      "StadiumCapacity": 19500
  },
  {
      "id": 486,
      "Name": "Atletico Tucuman",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/455.png",
      "City": "San Miguel de Tucuman, Provincia de Tucuman",
      "StadiumName": "Estadio Monumental Presidente Jose Fierro",
      "StadiumImg": "https://media.api-sports.io/football/venues/42.png",
      "StadiumCapacity": 35200
  },
  {
      "id": 487,
      "Name": "Talleres Cordoba",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/456.png",
      "City": "Ciudad de Cordoba, Provincia de Cordoba",
      "StadiumName": "Estadio Mario Alberto Kempes",
      "StadiumImg": "https://media.api-sports.io/football/venues/110.png",
      "StadiumCapacity": 57503
  },
  {
      "id": 488,
      "Name": "Newells Old Boys",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/457.png",
      "City": "Rosario, Provincia de Santa Fe",
      "StadiumName": "Estadio Marcelo Alberto Bielsa",
      "StadiumImg": "https://media.api-sports.io/football/venues/93.png",
      "StadiumCapacity": 42000
  },
  {
      "id": 489,
      "Name": "Argentinos JRS",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/458.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Diego Armando Maradona",
      "StadiumImg": "https://media.api-sports.io/football/venues/37.png",
      "StadiumCapacity": 24380
  },
  {
      "id": 490,
      "Name": "Arsenal Sarandi",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/459.png",
      "City": "Avellaneda, Provincia de Buenos Aires",
      "StadiumName": "Estadio Julio Humberto Grondona",
      "StadiumImg": "https://media.api-sports.io/football/venues/38.png",
      "StadiumCapacity": 18300
  },
  {
      "id": 491,
      "Name": "San Lorenzo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/460.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Pedro Bidegain",
      "StadiumImg": "https://media.api-sports.io/football/venues/103.png",
      "StadiumCapacity": 43494
  },
  {
      "id": 492,
      "Name": "San Martin S.J.",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/461.png",
      "City": "San Juan, Provincia de San Juan",
      "StadiumName": "Estadio Ingeniero Hilario Sanchez",
      "StadiumImg": "https://media.api-sports.io/football/venues/104.png",
      "StadiumCapacity": 19000
  },
  {
      "id": 493,
      "Name": "Agropecuario",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/462.png",
      "City": "Carlos Casares, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ofelia Rosenzuaig",
      "StadiumImg": "https://i.ytimg.com/vi/46qzxsfsJG8/sddefault.jpg",
      "StadiumCapacity": 5000
  },
  {
      "id": 494,
      "Name": "Aldosivi",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/463.png",
      "City": "Mar del Plata, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Maria Minella",
      "StadiumImg": "https://media.api-sports.io/football/venues/33.png",
      "StadiumCapacity": 35354
  },
  {
      "id": 495,
      "Name": "All Boys",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/464.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Islas Malvinas",
      "StadiumImg": "https://media.api-sports.io/football/venues/34.png",
      "StadiumCapacity": 16500
  },
  {
      "id": 496,
      "Name": "Atletico DE Rafaela",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/465.png",
      "City": "Rafaela, Provincia de Santa Fe",
      "StadiumName": "Estadio Nuevo Monumental",
      "StadiumImg": "https://media.api-sports.io/football/venues/41.png",
      "StadiumCapacity": 16000
  },
  {
      "id": 497,
      "Name": "Atletico Mitre",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/466.png",
      "City": "Santiago del Estero, Prov. de Santiago del Estero",
      "StadiumName": "Estadio Aurinegro",
      "StadiumImg": "https://www.nuevodiariodesalta.com.ar/public/images/noticias/60929-gimnasia-jugara-la-final-en-mitre-de-santiago.jpg",
      "StadiumCapacity": 10500
  },
  {
      "id": 498,
      "Name": "Boca Unidos",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/467.png",
      "City": "Corrientes, Provincia de Corrientes",
      "StadiumName": "Estadio Jose Antonio Romero Feris",
      "StadiumImg": "https://media.api-sports.io/football/venues/3033.png",
      "StadiumCapacity": 15172
  },
  {
      "id": 499,
      "Name": "Brown DE Adrogue",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/468.png",
      "City": "Almirante Brown, Provincia de Buenos Aires",
      "StadiumName": "Estadio Lorenzo Arandilla",
      "StadiumImg": "https://media.api-sports.io/football/venues/48.png",
      "StadiumCapacity": 6000
  },
  {
      "id": 500,
      "Name": "Deportivo Moron",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/469.png",
      "City": "Moron, Provincia de Buenos Aires",
      "StadiumName": "Estadio Nuevo Francisco Urbano",
      "StadiumImg": "https://media.api-sports.io/football/venues/65.png",
      "StadiumCapacity": 32000
  },
  {
      "id": 501,
      "Name": "Ferro Carril Oeste",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/470.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Arquitecto Ricardo Etcheverry",
      "StadiumImg": "https://media.api-sports.io/football/venues/73.png",
      "StadiumCapacity": 24442
  },
  {
      "id": 502,
      "Name": "Flandria",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/471.png",
      "City": "Lujan, Provincia de Buenos Aires",
      "StadiumName": "Estadio Carlos V",
      "StadiumImg": "https://media.api-sports.io/football/venues/75.png",
      "StadiumCapacity": 3000
  },
  {
      "id": 503,
      "Name": "Guillermo Brown",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/472.png",
      "City": "Puerto Madryn, Provincia de Chubut",
      "StadiumName": "Estadio Raul Conti",
      "StadiumImg": "https://media.api-sports.io/football/venues/49.png",
      "StadiumCapacity": 8500
  },
  {
      "id": 504,
      "Name": "Independ. Rivadavia",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/473.png",
      "City": "Mendoza, Provincia de Mendoza",
      "StadiumName": "Estadio Juan Bautista Gargantini",
      "StadiumImg": "https://media.api-sports.io/football/venues/83.png",
      "StadiumCapacity": 16000
  },
  {
      "id": 505,
      "Name": "Sarmiento Junin",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/474.png",
      "City": "Junin, Provincia de Buenos Aires",
      "StadiumName": "Estadio Eva Peron de Junin",
      "StadiumImg": "https://media.api-sports.io/football/venues/107.png",
      "StadiumCapacity": 22000
  },
  {
      "id": 506,
      "Name": "Santamarina",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/475.png",
      "City": "Tandil, Provincia de Buenos Aires",
      "StadiumName": "Estadio Municipal General San Martin de Tandil",
      "StadiumImg": "https://i.ytimg.com/vi/H6c3wHvx144/sddefault.jpg",
      "StadiumCapacity": 8762
  },
  {
      "id": 507,
      "Name": "Deportivo Riestra",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/476.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Guillermo Laza",
      "StadiumImg": "https://media.api-sports.io/football/venues/66.png",
      "StadiumCapacity": 3000
  },
  {
      "id": 508,
      "Name": "Estudiantes S.l.",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/477.png",
      "City": "Ciudad de San Luis, Provincia de San Luis",
      "StadiumName": "Estadio Hector Odicino Pedro Benoza",
      "StadiumImg": "https://interiorfutbolero.com.ar/wp-content/uploads/2020/07/estadio-coliseo-estudiantes-sl.jpg",
      "StadiumCapacity": 12000
  },
  {
      "id": 509,
      "Name": "Instituto Cordoba",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/478.png",
      "City": "Ciudad de Cordoba, Provincia de Cordoba",
      "StadiumName": "Estadio Juan Domingo Peron",
      "StadiumImg": "https://media.api-sports.io/football/venues/84.png",
      "StadiumCapacity": 26535
  },
  {
      "id": 510,
      "Name": "Gimnasia Jujuy",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/479.png",
      "City": "San Salvador de Jujuy, Provincia de Jujuy",
      "StadiumName": "Estadio 23 de Agosto",
      "StadiumImg": "https://media.api-sports.io/football/venues/76.png",
      "StadiumCapacity": 23200
  },
  {
      "id": 511,
      "Name": "Quilmes",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/480.png",
      "City": "Quilmes, Provincia de Buenos Aires",
      "StadiumName": "Estadio Centenario Ciudad de Quilmes",
      "StadiumImg": "https://media.api-sports.io/football/venues/20215.png",
      "StadiumCapacity": 30200
  },
  {
      "id": 512,
      "Name": "Villa Dalmine",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/481.png",
      "City": "Campana, Provincia de Buenos Aires",
      "StadiumName": "Estadio El Coliseo de Mitre y Puccini",
      "StadiumImg": "https://media.api-sports.io/football/venues/117.png",
      "StadiumCapacity": 11250
  },
  {
      "id": 513,
      "Name": "Almagro",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/482.png",
      "City": "Tres de Febrero, Provincia de Buenos Aires",
      "StadiumName": "Estadio Tres de Febrero",
      "StadiumImg": "https://pbs.twimg.com/media/FINBGgZXwAMLcAt.jpg:large",
      "StadiumCapacity": 19000
  },
  {
      "id": 514,
      "Name": "Los Andes",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/483.png",
      "City": "Lomas de Zamora, Provincia de Buenos Aires",
      "StadiumName": "Estadio Eduardo Gallardon",
      "StadiumImg": "https://media.api-sports.io/football/venues/90.png",
      "StadiumCapacity": 33532
  },
  {
      "id": 515,
      "Name": "Nueva Chicago",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/484.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Republica de Mataderos",
      "StadiumImg": "https://media.api-sports.io/football/venues/94.png",
      "StadiumCapacity": 28500
  },
  {
      "id": 516,
      "Name": "San Martin Tucuman",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/485.png",
      "City": "San Miguel de Tucuman, Provincia de Tucuman",
      "StadiumName": "Estadio La Ciudadela",
      "StadiumImg": "https://media.api-sports.io/football/venues/105.png",
      "StadiumCapacity": 27000
  },
  {
      "id": 517,
      "Name": "Juventud Unida",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/486.png",
      "City": "Ingeniero Adolfo Sourdeaux, Buenos Aires",
      "StadiumName": "Estadio Islas Malvinas",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/07/juventud-unida-sm04-1.jpg",
      "StadiumCapacity": 500
  },
  {
      "id": 518,
      "Name": "Atletico Parana",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/787.png",
      "City": "Parana, Provincia de Entre Rios",
      "StadiumName": "Estadio Pedro Mutio",
      "StadiumImg": "https://media.lacapital.com.ar/p/7ed773e23006949a76360b6744369ffa/adjuntos/204/imagenes/100/582/0100582238/pedromutiojpg.jpg",
      "StadiumCapacity": 6000
  },
  {
      "id": 519,
      "Name": "Crucero Del Norte",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/788.png",
      "City": "Gran Posadas, Provincia de Misiones",
      "StadiumName": "Estadio Comandante Andres Guacurari",
      "StadiumImg": "https://media.api-sports.io/football/venues/58.png",
      "StadiumCapacity": 12000
  },
  {
      "id": 520,
      "Name": "Douglas Haig",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/789.png",
      "City": "Pergamino, Provincia de Buenos Aires",
      "StadiumName": "Estadio Miguel Morales",
      "StadiumImg": "https://media.api-sports.io/football/venues/69.png",
      "StadiumCapacity": 18000
  },
  {
      "id": 521,
      "Name": "Central Cordoba",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/790.png",
      "City": "Rosario, Provincia de Santa Fe",
      "StadiumName": "Estadio Gabino Sosa",
      "StadiumImg": "https://media.api-sports.io/football/venues/52.png",
      "StadiumCapacity": 17500
  },
  {
      "id": 522,
      "Name": "CDJU Gualeguaychu",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1061.png",
      "City": "Gualeguaychu, Provincia de Entre Rios",
      "StadiumName": "Estadio Luis Delfino",
      "StadiumImg": "https://elargentinocdn.eleco.com.ar/img/noticias/208600/300-JUVENTUD%2520UNIDA%2520280820.jpg",
      "StadiumCapacity": 10000
  },
  {
      "id": 523,
      "Name": "Platense",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1064.png",
      "City": "Vicente Lopez, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ciudad de Vicente Lopez",
      "StadiumImg": "https://media.api-sports.io/football/venues/97.png",
      "StadiumCapacity": 31030
  },
  {
      "id": 524,
      "Name": "Central Cordoba de Santiago",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1065.png",
      "City": "Santiago del Estero, Provincia de Santiago del Est",
      "StadiumName": "Estadio Alfredo Terrera",
      "StadiumImg": "https://i.ytimg.com/vi/r9KN3eWcqvs/maxresdefault.jpg",
      "StadiumCapacity": 16000
  },
  {
      "id": 525,
      "Name": "Gimnasia M.",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1066.png",
      "City": "Mendoza, Provincia de Mendoza",
      "StadiumName": "Estadio Victor Antonio Legrotaglie",
      "StadiumImg": "https://media.api-sports.io/football/venues/78.png",
      "StadiumCapacity": 11500
  },
  {
      "id": 526,
      "Name": "Defensores De Belgrano",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1067.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Juan Pasquale",
      "StadiumImg": "https://i.ytimg.com/vi/g3I6rzgmqMQ/maxresdefault.jpg",
      "StadiumCapacity": 8300
  },
  {
      "id": 527,
      "Name": "Deportivo Laferrere",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1924.png",
      "City": "Gregorio de Laferrere, Provincia de Buenos Aires",
      "StadiumName": "Estadio Deportivo Laferrere",
      "StadiumImg": "https://media.api-sports.io/football/venues/87.png",
      "StadiumCapacity": 5000
  },
  {
      "id": 560,
      "Name": "Alvarado",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1962.png",
      "City": "Mar del Plata, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Maria Minella",
      "StadiumImg": "https://media.api-sports.io/football/venues/33.png",
      "StadiumCapacity": 35354
  },
  {
      "id": 528,
      "Name": "Union Aconquija",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1925.png",
      "City": "Andalgala, Provincia de Catamarca",
      "StadiumName": "Estadio de Tiro Federal y Gimnasia de Andalgala",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/06/tiro-federal-gimnasia2-1.jpg",
      "StadiumCapacity": 2000
  },
  {
      "id": 529,
      "Name": "Talleres Remedios",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1927.png",
      "City": "Remedios Escalada, Provincia de Buenos Aires",
      "StadiumName": "Estadio Pablo Comelli",
      "StadiumImg": "https://media.api-sports.io/football/venues/19376.png",
      "StadiumCapacity": 16000
  },
  {
      "id": 530,
      "Name": "Gimnasia Y Tiro",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1928.png",
      "City": "Salta, Provincia de Salta",
      "StadiumName": "Estadio El Gigante del Norte",
      "StadiumImg": "https://media.api-sports.io/football/venues/79.png",
      "StadiumCapacity": 24300
  },
  {
      "id": 531,
      "Name": "Deportivo Madryn",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1929.png",
      "City": "Puerto Madryn, Provincia de Chubut",
      "StadiumName": "Estadio Abel Sastre",
      "StadiumImg": "https://media.api-sports.io/football/venues/63.png",
      "StadiumCapacity": 6000
  },
  {
      "id": 532,
      "Name": "Sansinena",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1930.png",
      "City": "General Daniel Cerri, Provincia de Buenos Aires",
      "StadiumName": "Estadio Luis Molina",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2015/09/cancha-sansinena-cerri4.jpg",
      "StadiumCapacity": 4000
  },
  {
      "id": 533,
      "Name": "Sportivo Barracas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1931.png",
      "City": "Moron, Provincia de Buenos Aires",
      "StadiumName": "Estadio Nuevo Francisco Urbano",
      "StadiumImg": "https://media.api-sports.io/football/venues/65.png",
      "StadiumCapacity": 32000
  },
  {
      "id": 534,
      "Name": "San Telmo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1932.png",
      "City": "Avellaneda, Provincia de Buenos Aires",
      "StadiumName": "Estadio Dr. Osvaldo Francisco Baletto",
      "StadiumImg": "https://media.api-sports.io/football/venues/5957.png",
      "StadiumCapacity": 7500
  },
  {
      "id": 535,
      "Name": "Union Sunchales",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1934.png",
      "City": "Sunchales, Provincia de Santa Fe",
      "StadiumName": "Estadio Union de Sunchales",
      "StadiumImg": "https://media.api-sports.io/football/venues/114.png",
      "StadiumCapacity": 5650
  },
  {
      "id": 536,
      "Name": "San Martin Formosa",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1935.png",
      "City": "Ciudad de Formosa, Provincia de Formosa",
      "StadiumName": "Estadio 17 de Octubre",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/08/san-martin-formosa02-1.jpg",
      "StadiumCapacity": 2000
  },
  {
      "id": 537,
      "Name": "CA Estudiantes",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1936.png",
      "City": "Caseros, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ciudad de Caseros",
      "StadiumImg": "https://media.api-sports.io/football/venues/71.png",
      "StadiumCapacity": 16740
  },
  {
      "id": 538,
      "Name": "Atletico Atlas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1937.png",
      "City": "General Rodriguez, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ricardo Puga",
      "StadiumImg": "https://media.api-sports.io/football/venues/40.png",
      "StadiumCapacity": 2500
  },
  {
      "id": 539,
      "Name": "Villa Mitre",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1938.png",
      "City": "Bahia Blanca, Provincia de Buenos Aires",
      "StadiumName": "Estadio El Fortin",
      "StadiumImg": "https://media.api-sports.io/football/venues/118.png",
      "StadiumCapacity": 6000
  },
  {
      "id": 540,
      "Name": "Leandro N. Alem",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1940.png",
      "City": "General Rodriguez, Provincia de Buenos Aires",
      "StadiumName": "Estadio Leandro Niceforo Alem",
      "StadiumImg": "https://www.lapostanoticias.com.ar/adjuntos/800/cancha-alem.jpg",
      "StadiumCapacity": 4000
  },
  {
      "id": 541,
      "Name": "Sol de Mayo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1941.png",
      "City": "Viedma, Provincia de Rio Negro",
      "StadiumName": "Estadio Sol De Mayo",
      "StadiumImg": "https://www.rionegro.com.ar/wp-content/uploads/2022/04/Sin-titulo-10.jpg",
      "StadiumCapacity": 5000
  },
  {
      "id": 542,
      "Name": "Sacachispas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1942.png",
      "City": "Villa Soldati, Provincia de Buenos Aires",
      "StadiumName": "Estadio Beto Larrosa",
      "StadiumImg": "https://media.api-sports.io/football/venues/102.png",
      "StadiumCapacity": 4000
  },
  {
      "id": 543,
      "Name": "Atletico Camioneros",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1943.png",
      "City": "Lujan, Provincia de Buenos Aires",
      "StadiumName": "Estadio Carlos V",
      "StadiumImg": "https://media.api-sports.io/football/venues/75.png",
      "StadiumCapacity": 3000
  },
  {
      "id": 544,
      "Name": "Defensores Unidos",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1945.png",
      "City": "Zarate, Provincia de Buenos Aires",
      "StadiumName": "Estadio Gigante de Villa Fox",
      "StadiumImg": "https://media.api-sports.io/football/venues/61.png",
      "StadiumCapacity": 6000
  },
  {
      "id": 545,
      "Name": "Chaco For Ever",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1946.png",
      "City": "Resistencia, Provincia del Chaco",
      "StadiumName": "Estadio Juan Alberto Garcia",
      "StadiumImg": "https://media.api-sports.io/football/venues/55.png",
      "StadiumCapacity": 30500
  },
  {
      "id": 546,
      "Name": "Canuelas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1947.png",
      "City": "Canuelas, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jorge Alfredo Arin",
      "StadiumImg": "https://media.api-sports.io/football/venues/50.png",
      "StadiumCapacity": 3000
  },
  {
      "id": 547,
      "Name": "Atlanta",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1948.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Don Leon Kolbovski",
      "StadiumImg": "https://media.api-sports.io/football/venues/39.png",
      "StadiumCapacity": 24500
  },
  {
      "id": 548,
      "Name": "Cipolletti",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1949.png",
      "City": "Cipolletti, Provincia de Rio Negro",
      "StadiumName": "Estadio La Visera de Cemento",
      "StadiumImg": "https://i.pinimg.com/originals/22/cd/ca/22cdca98983f883fb0e9ebb22fc23d31.jpg",
      "StadiumCapacity": 11000
  },
  {
      "id": 549,
      "Name": "Sportivo Las Parejas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1950.png",
      "City": "Las Parejas, Provincia de Santa Fe",
      "StadiumName": "Estadio La Perrera",
      "StadiumImg": "https://media.api-sports.io/football/venues/109.png",
      "StadiumCapacity": 3000
  },
  {
      "id": 550,
      "Name": "Central Norte",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1951.png",
      "City": "Salta, Provincia de Salta",
      "StadiumName": "Estadio Dr. Luis Guemes",
      "StadiumImg": "https://i.ytimg.com/vi/EvTk_1wC5Gg/hqdefault.jpg",
      "StadiumCapacity": 10000
  },
  {
      "id": 551,
      "Name": "Sarmiento Resistencia",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1953.png",
      "City": "Resistencia, Provincia del Chaco",
      "StadiumName": "Estadio Centenario del Club Atletico Sarmiento",
      "StadiumImg": "https://media.api-sports.io/football/venues/1733.png",
      "StadiumCapacity": 25000
  },
  {
      "id": 552,
      "Name": "Deportivo Maipu",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1954.png",
      "City": "Maipu, Provincia de Mendoza",
      "StadiumName": "Estadio Omar Higinio Sperdutti",
      "StadiumImg": "https://media.api-sports.io/football/venues/64.png",
      "StadiumCapacity": 9000
  },
  {
      "id": 553,
      "Name": "General Lamadrid",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1955.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Enrique VI",
      "StadiumImg": "https://media.api-sports.io/football/venues/81.png",
      "StadiumCapacity": 3500
  },
  {
      "id": 554,
      "Name": "UAI Urquiza",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1956.png",
      "City": "General San Martin, Provincia de Buenos Aires",
      "StadiumName": "Estadio Monumental de Villa Lynch",
      "StadiumImg": "https://media.api-sports.io/football/venues/10527.png",
      "StadiumCapacity": 1000
  },
  {
      "id": 555,
      "Name": "Racing Cordoba",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1957.png",
      "City": "Ciudad de Cordoba, Provincia de Cordoba",
      "StadiumName": "Estadio Miguel Sancho",
      "StadiumImg": "https://media.api-sports.io/football/venues/100.png",
      "StadiumCapacity": 22000
  },
  {
      "id": 556,
      "Name": "Lujan",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1958.png",
      "City": "Lujan, Provincia de Buenos Aires",
      "StadiumName": "Campo Municipal de Deportes",
      "StadiumImg": "https://media.api-sports.io/football/venues/91.png",
      "StadiumCapacity": 2500
  },
  {
      "id": 557,
      "Name": "Deportivo Rincon",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1959.png",
      "City": "Rincon de Los Sauces, Provincia del Neuquen",
      "StadiumName": "Estadio Gremio de Los Petroleros",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2016/08/deportivo-rincon3.jpg",
      "StadiumCapacity": 3200
  },
  {
      "id": 558,
      "Name": "Independiente De Chivilcoy",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1960.png",
      "City": "Chivilcoy, Provincia de Buenos Aires",
      "StadiumName": "Estadio Raul Orlando Lungarzo",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2014/11/independiente-chivilcoy013-1.jpg",
      "StadiumCapacity": 2500
  },
  {
      "id": 559,
      "Name": "Juventud Antoniana",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1961.png",
      "City": "Ciudad de Salta, Provincia de Salta",
      "StadiumName": "Estadio Fray Honorato Pistoia",
      "StadiumImg": "https://upload.wikimedia.org/wikipedia/commons/4/48/Popular_Fray_Honorato_Pistoia.JPG",
      "StadiumCapacity": 8000
  },
  {
      "id": 561,
      "Name": "Midland",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1963.png",
      "City": "Libertad, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ferrocarril Midland",
      "StadiumImg": "https://pbs.twimg.com/media/E1dEtF6XIAMIhHt.jpg",
      "StadiumCapacity": 6000
  },
  {
      "id": 562,
      "Name": "Victoriano Arenas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1964.png",
      "City": "Avellaneda, Provincia de Buenos Aires",
      "StadiumName": "Estadio Saturnino Moure",
      "StadiumImg": "https://media.api-sports.io/football/venues/116.png",
      "StadiumCapacity": 1500
  },
  {
      "id": 563,
      "Name": "Tristan Suarez",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1965.png",
      "City": "Ezeiza, Provincia de Buenos Aires",
      "StadiumName": "Estadio 20 de Octubre",
      "StadiumImg": "https://media.api-sports.io/football/venues/113.png",
      "StadiumCapacity": 13500
  },
  {
      "id": 564,
      "Name": "Sportivo Belgrano",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1966.png",
      "City": "San Francisco, Provincia de Cordoba",
      "StadiumName": "Estadio Juan Pablo Francia",
      "StadiumImg": "https://media.api-sports.io/football/venues/18532.png",
      "StadiumCapacity": 7000
  },
  {
      "id": 565,
      "Name": "Central Ballester",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/1967.png",
      "City": "General Rodriguez, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ricardo Puga",
      "StadiumImg": "https://media.api-sports.io/football/venues/40.png",
      "StadiumCapacity": 2500
  },
  {
      "id": 566,
      "Name": "Real Pilar",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2422.png",
      "City": "Partido de Pilar, Provincia de Buenos Aires",
      "StadiumName": "Estadio Municipal de Pilar",
      "StadiumImg": "https://media.api-sports.io/football/venues/1915.png",
      "StadiumCapacity": 8500
  },
  {
      "id": 567,
      "Name": "Deportivo Roca",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2423.png",
      "City": "General Roca, Provincia de Rio Negro",
      "StadiumName": "Estadio Luis Maiolino",
      "StadiumImg": "https://media.api-sports.io/football/venues/67.png",
      "StadiumCapacity": 10000
  },
  {
      "id": 568,
      "Name": "Estudiantes de Rio Cuarto",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2424.png",
      "City": "Ciudad de Rio Cuarto, Provincia de Cordoba",
      "StadiumName": "Estadio Ciudad de Rio Cuarto",
      "StadiumImg": "https://canalshowsport.com.ar/wp-content/uploads/2019/04/estudiantes-rr-copia.jpg",
      "StadiumCapacity": 9000
  },
  {
      "id": 569,
      "Name": "Acassuso",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2425.png",
      "City": "San Isidro, Provincia de Buenos Aires",
      "StadiumName": "Estadio La Quema",
      "StadiumImg": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Estadio_la_quema_1.jpg",
      "StadiumCapacity": 800
  },
  {
      "id": 570,
      "Name": "Defensores de Belgrano VR",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2426.png",
      "City": "Villa Ramallo, Provincia de Buenos Aires",
      "StadiumName": "Estadio Salomon Boeseldin",
      "StadiumImg": "https://media.api-sports.io/football/venues/1715.png",
      "StadiumCapacity": 2000
  },
  {
      "id": 571,
      "Name": "Deportivo Armenio",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2427.png",
      "City": "Ingeniero Maschwitz, Provincia de Buenos Aires",
      "StadiumName": "Estadio Armenia",
      "StadiumImg": "https://media.api-sports.io/football/venues/62.png",
      "StadiumCapacity": 10500
  },
  {
      "id": 572,
      "Name": "Huracan Las Heras",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2428.png",
      "City": "Las Heras, Provincia de Mendoza",
      "StadiumName": "Estadio General San Martin",
      "StadiumImg": "https://i.ytimg.com/vi/9iR834Vv1u4/maxresdefault.jpg",
      "StadiumCapacity": 10000
  },
  {
      "id": 573,
      "Name": "Dock Sud",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2429.png",
      "City": "Avellaneda, Provincia de Buenos Aires",
      "StadiumName": "Estadio de los Inmigrantes",
      "StadiumImg": "https://media.api-sports.io/football/venues/68.png",
      "StadiumCapacity": 6500
  },
  {
      "id": 574,
      "Name": "Argentino de Merlo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2430.png",
      "City": "Parque San Martin, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Manuel Moreno",
      "StadiumImg": "https://media.api-sports.io/football/venues/5966.png",
      "StadiumCapacity": 6200
  },
  {
      "id": 575,
      "Name": "Barracas Central",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/2432.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Claudio Fabian Tapia",
      "StadiumImg": "https://media.api-sports.io/football/venues/44.png",
      "StadiumCapacity": 4400
  },
  {
      "id": 576,
      "Name": "AH Zapla",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3941.png",
      "City": "Palpala, Provincia de Jujuy",
      "StadiumName": "Estadio Coronel Emilio Fabrizzi",
      "StadiumImg": "https://media.api-sports.io/football/venues/2998.png",
      "StadiumCapacity": 20704
  },
  {
      "id": 577,
      "Name": "Def. de Pronunciamiento",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3942.png",
      "City": "Pronunciamiento, Provincia de Entre Rios",
      "StadiumName": "Estadio Delio Esteban Cardozo",
      "StadiumImg": "https://media.api-sports.io/football/venues/2999.png",
      "StadiumCapacity": 2000
  },
  {
      "id": 578,
      "Name": "Deportivo Camioneros",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3943.png",
      "City": "Rio Grande, Tierra del Fuego",
      "StadiumName": "Estadio Municipal del Centro Deportivo de Rio Grande",
      "StadiumImg": "https://www.minutofueguino.com.ar/galeria/fotos/2019/11/15/e_42257.jpg",
      "StadiumCapacity": 1500
  },
  {
      "id": 579,
      "Name": "Ferro Carril Oeste LP",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3944.png",
      "City": "General Pico, Provincia La Pampa",
      "StadiumName": "Estadio Coloso de Barrio Talleres",
      "StadiumImg": "https://i.pinimg.com/originals/d7/30/5e/d7305e69f2077ac1919731745e11d666.jpg",
      "StadiumCapacity": 6000
  },
  {
      "id": 580,
      "Name": "Gimnasia Concepcion",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3945.png",
      "City": "Concepcion del Uruguay, Provincia de Entre Rios",
      "StadiumName": "Estadio Manuel y Ramon Nunez",
      "StadiumImg": "https://media.elentrerios.com/fotos-emb/2020/11/18/o_1605726163.jpg",
      "StadiumCapacity": 6000
  },
  {
      "id": 581,
      "Name": "Independiente Neuquen",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3946.png",
      "City": "Neuquen, Provincia de Neuquen",
      "StadiumName": "Estadio Jose Rosas y Perito Moreno",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2017/02/municipal-perito-moreno2.jpg",
      "StadiumCapacity": 9000
  },
  {
      "id": 582,
      "Name": "Juventud Unida Univ.",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3947.png",
      "City": "San Luis, Provincia de San Luis",
      "StadiumName": "Estadio Mario Sebastian Diez",
      "StadiumImg": "https://media.api-sports.io/football/venues/3004.png",
      "StadiumCapacity": 13000
  },
  {
      "id": 583,
      "Name": "San Jorge Tucuman",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3948.png",
      "City": "San Miguel de Tucuman, Provincia de Tucuman",
      "StadiumName": "Estadio Luis Hayward",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2017/10/estadio-san-jorge-tucuman3-640x480.jpg",
      "StadiumCapacity": 11000
  },
  {
      "id": 584,
      "Name": "San Lorenzo Alem",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3949.png",
      "City": "San Fernando del Valle de Catamarca, Catamarca",
      "StadiumName": "Estadio de la Liga Catamarquena",
      "StadiumImg": "https://upload.wikimedia.org/wikipedia/commons/2/26/EstadioMalvinasCatamarca2.jpg",
      "StadiumCapacity": 6500
  },
  {
      "id": 585,
      "Name": "Sportivo Desamparados",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3950.png",
      "City": "San Juan, Provincia de San Juan",
      "StadiumName": "Estadio El Serpentario",
      "StadiumImg": "https://media.api-sports.io/football/venues/3007.png",
      "StadiumCapacity": 10050
  },
  {
      "id": 586,
      "Name": "Atletico Pellegrini",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3951.png",
      "City": "Ciudad de Salta, Provincia de Salta",
      "StadiumName": "Estadio Liga Saltena de Futbol",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/05/estadio-liga-salta011-1.jpg",
      "StadiumCapacity": 3500
  },
  {
      "id": 587,
      "Name": "Atletico San Jorge",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3952.png",
      "City": "San Jorge, Provincia de Santa Fe",
      "StadiumName": "Parque 23 de Junio",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2015/09/cancha-san-jorge-santa-fe2-640x343.jpg",
      "StadiumCapacity": 12000
  },
  {
      "id": 588,
      "Name": "Deportivo Achirense",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3953.png",
      "City": "Las Achiras, Provincia de Entre Rios",
      "StadiumName": "Estadio Guillermo Bonnin",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/07/cancha-achirense01-1.jpg",
      "StadiumCapacity": 1000
  },
  {
      "id": 589,
      "Name": "Ferro Carril Sud",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3954.png",
      "City": "Olavarria, Provincia de Buenos Aires",
      "StadiumName": "Estadio Domingo Francisco Colasurdo",
      "StadiumImg": "https://media.api-sports.io/football/venues/3011.png",
      "StadiumCapacity": 2000
  },
  {
      "id": 590,
      "Name": "Huracan San Rafael",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3955.png",
      "City": "San Rafael, Provincia de Mendoza",
      "StadiumName": "Estadio Pretel Hermanos",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/03/huracan-san-rafael01-1.jpg",
      "StadiumCapacity": 11000
  },
  {
      "id": 591,
      "Name": "Racing Olavarria",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3956.png",
      "City": "Olavarria, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Domingo Buglione Martinese",
      "StadiumImg": "https://media.api-sports.io/football/venues/3013.png",
      "StadiumCapacity": 11000
  },
  {
      "id": 592,
      "Name": "Rivadavia Lincoln",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3957.png",
      "City": "Lincoln, Provincia de Buenos Aires",
      "StadiumName": "Estadio El Coliseo",
      "StadiumImg": "https://i.pinimg.com/736x/6b/5c/1e/6b5c1e1c6c38b348dc0302a5c7905a17.jpg",
      "StadiumCapacity": 8000
  },
  {
      "id": 593,
      "Name": "Sarmiento Leones",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3958.png",
      "City": "Leones, Provincia de Cordoba",
      "StadiumName": "Estadio La Calderita",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/06/sarmiento-leones2-1.jpg",
      "StadiumCapacity": 3200
  },
  {
      "id": 594,
      "Name": "Sportivo Patria",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3959.png",
      "City": "Ciudad de Formosa, Provincia de Formosa",
      "StadiumName": "Estadio Antonio Romero",
      "StadiumImg": "https://i.imgur.com/TzqMCZf.jpg",
      "StadiumCapacity": 23000
  },
  {
      "id": 595,
      "Name": "Sportivo Penarol",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3960.png",
      "City": "San Juan, Provincia de San Juan",
      "StadiumName": "Estadio Ramon Pablo Rojas",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2015/04/cancha-pe%C3%B1arol-san-juan1-640x480.jpg",
      "StadiumCapacity": 3000
  },
  {
      "id": 596,
      "Name": "Union Villa Krause",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3961.png",
      "City": "Ciudad de Santa Fe, Provincia de Santa Fe",
      "StadiumName": "Estadio 15 de Abril",
      "StadiumImg": "https://media.api-sports.io/football/venues/1933.png",
      "StadiumCapacity": 27000
  },
  {
      "id": 597,
      "Name": "Almirante Brown de Lules",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3962.png",
      "City": "Lules, Provincia Tucuman",
      "StadiumName": "Estadio Municipal",
      "StadiumImg": "https://www.ole.com.ar/images/2022/09/02/WrrTm439V_720x0__1.jpg",
      "StadiumCapacity": 1000
  },
  {
      "id": 598,
      "Name": "Argentinos 25 de Mayo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3963.png",
      "City": "25 de Mayo, Provincia de Buenos Aires",
      "StadiumName": "Estadio Argentinos 25 de Mayo",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/05/argentinos-25-de-mayo3-1.jpg",
      "StadiumCapacity": 3000
  },
  {
      "id": 599,
      "Name": "Atletico Colon Junior",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3964.png",
      "City": "San Juan",
      "StadiumName": "Estadio Dr. Jorge R. Barassi",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/05/colon-junior01-3.jpg",
      "StadiumCapacity": 4000
  },
  {
      "id": 600,
      "Name": "Atletico Laguna Blanca",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3965.png",
      "City": "Laguna Blanca, Provincia de Formosa",
      "StadiumName": "Estadio de Atletico Laguna Blanca",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2015/12/cancha-atletico-laguna-blanca5-740x417.jpg",
      "StadiumCapacity": 1000
  },
  {
      "id": 601,
      "Name": "Belgrano Parana",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3966.png",
      "City": "Parana, Provincia de Entre Rios",
      "StadiumName": "Estadio Mondonguero",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2015/07/cancha-belgrano-parana3-640x360.jpg",
      "StadiumCapacity": 8000
  },
  {
      "id": 602,
      "Name": "Belgrano San Nicolas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3967.png",
      "City": "La Emilia, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jacinto Gato Lopez",
      "StadiumImg": "https://suquia.ar/wp-content/uploads/2022/09/Quedo-registrado-por-las-camaras-de-videovigilancia.-19.jpg",
      "StadiumCapacity": 6000
  },
  {
      "id": 603,
      "Name": "Ben Hur",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3968.png",
      "City": "Rafaela, Provincia de Santa Fe",
      "StadiumName": "Estadio Nestor Zenklusen",
      "StadiumImg": "https://pbs.twimg.com/media/DxRsD42X0AAockg.jpg",
      "StadiumCapacity": 11500
  },
  {
      "id": 604,
      "Name": "Club Atletico Guemes",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3969.png",
      "City": "Santiago del Estero, Prov. de Santiago del Estero",
      "StadiumName": "Estadio Arturo Jiya Miranda",
      "StadiumImg": "https://sde.gob.ar/wp-content/uploads/2023/10/cancha-guemes-santiago5-740x416-1.jpg",
      "StadiumCapacity": 2000
  },
  {
      "id": 605,
      "Name": "Comercio Central Unidos",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3970.png",
      "City": "Santiago del Estero, Prov. de Santiago del Estero",
      "StadiumName": "Estadio Raul Adolfo Seijas",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/06/comercio-unido-santiago2-1.jpg",
      "StadiumCapacity": 1000
  },
  {
      "id": 606,
      "Name": "Ferroviario Corrientes",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3971.png",
      "City": "Corrientes, Provincia de Corrientes",
      "StadiumName": "Estadio Juan Carlos Vallejos",
      "StadiumImg": "https://www.corrienteshoy.com/galeria/fotos/2016/11/25/l_25112016174646.jpg",
      "StadiumCapacity": 5000
  },
  {
      "id": 607,
      "Name": "Germinal de Rawson",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3972.png",
      "City": "Rawson, Provincia del Chubut",
      "StadiumName": "Estadio El Fortin",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2014/11/germinal-rawson1-1.jpg",
      "StadiumCapacity": 8000
  },
  {
      "id": 608,
      "Name": "Huracan de Comodoro",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3973.png",
      "City": "Comodoro Rivadavia, Provincia del Chubut",
      "StadiumName": "Estadio Cesar Munoz",
      "StadiumImg": "https://media.api-sports.io/football/venues/3028.png",
      "StadiumCapacity": 5000
  },
  {
      "id": 609,
      "Name": "Jorge Newbery CR",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3974.png",
      "City": "Comodoro Rivadavia, Provincia del Chubut",
      "StadiumName": "Estadio Jorge Newbery",
      "StadiumImg": "https://media.api-sports.io/football/venues/3029.png",
      "StadiumCapacity": 4000
  },
  {
      "id": 610,
      "Name": "Kimberley Mar del Plata",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3975.png",
      "City": "Mar del Plata, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Antonio Valle",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/08/kimberley01-1.jpg",
      "StadiumCapacity": 4000
  },
  {
      "id": 611,
      "Name": "Sportivo Barracas Colon",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3976.png",
      "City": "Colon, Provincia de Buenos Aires",
      "StadiumName": "Estadio Hugo Viccei",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/11/sportivo-barracas-colon06-1.jpg",
      "StadiumCapacity": 4500
  },
  {
      "id": 612,
      "Name": "Talleres de Perico",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3977.png",
      "City": "Perico, Provincia de Jujuy",
      "StadiumName": "Estadio Doctor Plinio Zabala",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2014/07/cancha-talleres-perico01-1.jpg",
      "StadiumCapacity": 5000
  },
  {
      "id": 613,
      "Name": "Textil Mandiyu",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3978.png",
      "City": "Corrientes, Provincia de Corrientes",
      "StadiumName": "Estadio Jose Antonio Romero Feris",
      "StadiumImg": "https://media.api-sports.io/football/venues/3033.png",
      "StadiumCapacity": 15172
  },
  {
      "id": 614,
      "Name": "Tiro Federal",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3979.png",
      "City": "Rosario, Provincia de Santa Fe",
      "StadiumName": "Predio Club Atletico Tiro Federal Argentino De Rosario",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2014/05/tiro-federal-rosario56-1.jpg",
      "StadiumCapacity": 1000
  },
  {
      "id": 615,
      "Name": "Tiro Federal Morteros",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3980.png",
      "City": "Morteros, Provincia de Cordoba",
      "StadiumName": "Estadio Bautista Monetti",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/03/tiro-federal-morteros01-1.jpg",
      "StadiumCapacity": 5500
  },
  {
      "id": 616,
      "Name": "Bella Vista",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3981.png",
      "City": "Bahia Blanca, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ignacio Nicolas",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/05/bella-vista-bahia5-1.jpg",
      "StadiumCapacity": 4000
  },
  {
      "id": 617,
      "Name": "Sol de America",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/3982.png",
      "City": "Ciudad de Formosa, Provincia de Formosa",
      "StadiumName": "Estadio Club Sol de America Formosa",
      "StadiumImg": "https://media.api-sports.io/football/venues/3037.png",
      "StadiumCapacity": 8000
  },
  {
      "id": 618,
      "Name": "Comunicaciones",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8008.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Alfredo Ramos",
      "StadiumImg": "https://media.api-sports.io/football/venues/5709.png",
      "StadiumCapacity": 2076
  },
  {
      "id": 619,
      "Name": "Fenix",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8374.png",
      "City": "Parque San Martin, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Manuel Moreno",
      "StadiumImg": "https://media.api-sports.io/football/venues/5966.png",
      "StadiumCapacity": 6200
  },
  {
      "id": 620,
      "Name": "Almirante Brown",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8375.png",
      "City": "La Matanza, Provincia de Buenos Aires",
      "StadiumName": "Estadio Fragata Presidente Sarmiento",
      "StadiumImg": "https://media.api-sports.io/football/venues/5959.png",
      "StadiumCapacity": 19000
  },
  {
      "id": 621,
      "Name": "Argentino Quilmes",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8376.png",
      "City": "Quilmes, Provincia de Buenos Aires",
      "StadiumName": "Estadio de Argentino de Quilmes",
      "StadiumImg": "https://media.api-sports.io/football/venues/10528.png",
      "StadiumCapacity": 12000
  },
  {
      "id": 622,
      "Name": "Colegiales",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8377.png",
      "City": "Vicente Lopez, Provincia de Buenos Aires",
      "StadiumName": "Estadio de Colegiales",
      "StadiumImg": "https://media.api-sports.io/football/venues/5961.png",
      "StadiumCapacity": 6000
  },
  {
      "id": 623,
      "Name": "JJ Urquiza",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8378.png",
      "City": "Loma Hermosa, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ramon Roque Martin",
      "StadiumImg": "https://media.api-sports.io/football/venues/5962.png",
      "StadiumCapacity": 2500
  },
  {
      "id": 624,
      "Name": "San Miguel",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8379.png",
      "City": "Los Polvorines, Provincia de Buenos Aires",
      "StadiumName": "Estadio Malvinas Argentinas",
      "StadiumImg": "https://media.api-sports.io/football/venues/5963.png",
      "StadiumCapacity": 6800
  },
  {
      "id": 625,
      "Name": "Villa San Carlos",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8380.png",
      "City": "Berisso, Provincia de Buenos Aires",
      "StadiumName": "Estadio Genancio Salice",
      "StadiumImg": "https://pbs.twimg.com/media/EPJb_SgWkAMk846.jpg:large",
      "StadiumCapacity": 4000
  },
  {
      "id": 626,
      "Name": "Deportivo Espanol",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8381.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio Nueva Espana",
      "StadiumImg": "https://media.api-sports.io/football/venues/5956.png",
      "StadiumCapacity": 34500
  },
  {
      "id": 627,
      "Name": "Berazategui",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8382.png",
      "City": "Berazategui, Provincia de Buenos Aires",
      "StadiumName": "Estadio Norman Lee",
      "StadiumImg": "https://upload.wikimedia.org/wikipedia/commons/8/87/Estadio_Norman_Lee_-_Asociacion_Deportiva_Berazategui.jpg",
      "StadiumCapacity": 4240
  },
  {
      "id": 628,
      "Name": "Deportivo Merlo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8383.png",
      "City": "Parque San Martin, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Manuel Moreno",
      "StadiumImg": "https://media.api-sports.io/football/venues/5966.png",
      "StadiumCapacity": 6200
  },
  {
      "id": 629,
      "Name": "El Porvenir",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8384.png",
      "City": "Gerli, Provincia de Buenos Aires",
      "StadiumName": "Estadio Gildo Francisco Ghersinich",
      "StadiumImg": "https://media.api-sports.io/football/venues/5967.png",
      "StadiumCapacity": 14000
  },
  {
      "id": 630,
      "Name": "Excursionistas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8385.png",
      "City": "Capital Federal, Ciudad de Buenos Aires",
      "StadiumName": "Estadio de Excursionistas",
      "StadiumImg": "https://www.mibelgrano.com.ar/wp-content/uploads/2023/04/Estadio-Excursionistas.jpg",
      "StadiumCapacity": 6900
  },
  {
      "id": 631,
      "Name": "Ituzaingo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8386.png",
      "City": "Ituzaingo, Provincia de Buenos Aires",
      "StadiumName": "Estadio de Ituzaingo",
      "StadiumImg": "https://i.ytimg.com/vi/sRx34NnxC4k/maxresdefault.jpg",
      "StadiumCapacity": 3300
  },
  {
      "id": 632,
      "Name": "San Martin Burzaco",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8387.png",
      "City": "Burzaco, Provincia de Buenos Aires",
      "StadiumName": "Estadio Francisco Boga",
      "StadiumImg": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Tribuna_visitante_del_Estadio_Francisco_Boga_de_San_Martin_de_Burzaco.jpg",
      "StadiumCapacity": 2500
  },
  {
      "id": 633,
      "Name": "Sportivo Italiano",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8388.png",
      "City": "La Matanza, Provincia de Buenos Aires",
      "StadiumName": "Estadio Republica de Italia",
      "StadiumImg": "https://media.api-sports.io/football/venues/32.png",
      "StadiumCapacity": 6200
  },
  {
      "id": 634,
      "Name": "Argentino Rosario",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8389.png",
      "City": "Rosario, Provincia de Santa Fe",
      "StadiumName": "Estadio Jose Maria Olaeta",
      "StadiumImg": "https://media.api-sports.io/football/venues/5971.png",
      "StadiumCapacity": 6800
  },
  {
      "id": 635,
      "Name": "Centro Espanol",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8390.png",
      "City": "Ituzaingo, Provincia de Buenos Aires",
      "StadiumName": "Estadio de Ituzaingo",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2015/02/cancha-club-ituzaingo3-640x480.jpg",
      "StadiumCapacity": 3300
  },
  {
      "id": 636,
      "Name": "Claypole",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8391.png",
      "City": "Claypole, Provincia de Buenos Aires",
      "StadiumName": "Estadio Rodolfo Vicente Capocasa",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2015/09/cancha-claypole1-740x477.png",
      "StadiumCapacity": 1300
  },
  {
      "id": 637,
      "Name": "Defensores de Cambaceres",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8392.png",
      "City": "Ensenada, Provincia de Buenos Aires",
      "StadiumName": "Estadio 12 de Octubre",
      "StadiumImg": "https://media.api-sports.io/football/venues/5974.png",
      "StadiumCapacity": 8500
  },
  {
      "id": 638,
      "Name": "Deportivo Paraguayo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8394.png",
      "City": "La Matanza, Provincia de Buenos Aires",
      "StadiumName": "Estadio Juan Antonio Arias",
      "StadiumImg": "https://media.api-sports.io/football/venues/5976.png",
      "StadiumCapacity": 3000
  },
  {
      "id": 639,
      "Name": "Liniers",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8395.png",
      "City": "La Matanza, Provincia de Buenos Aires",
      "StadiumName": "Estadio Juan Antonio Arias",
      "StadiumImg": "https://media.api-sports.io/football/venues/5976.png",
      "StadiumCapacity": 3000
  },
  {
      "id": 640,
      "Name": "Lugano",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8396.png",
      "City": "La Matanza, Provincia de Buenos Aires",
      "StadiumName": "Estadio Jose Maria Moranos",
      "StadiumImg": "https://media.api-sports.io/football/venues/10530.png",
      "StadiumCapacity": 1500
  },
  {
      "id": 641,
      "Name": "Puerto Nuevo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8397.png",
      "City": "Campana, Provincia de Buenos Aires",
      "StadiumName": "Estadio Ruben Carlos Vallejos",
      "StadiumImg": "https://media.api-sports.io/football/venues/5977.png",
      "StadiumCapacity": 500
  },
  {
      "id": 642,
      "Name": "Yupanqui",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8398.png",
      "City": "Merlo, Provincia de Buenos Aires",
      "StadiumName": "Estadio Juan Carlos Brieva",
      "StadiumImg": "https://media.api-sports.io/football/venues/36.png",
      "StadiumCapacity": 11000
  },
  {
      "id": 643,
      "Name": "Circulo Deportivo",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/8399.png",
      "City": "Comandante Nicanor Otamendi, Pr. de Buenos Aires",
      "StadiumName": "Estadio Guillermo Trama",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2016/04/cancha-circulo-deportivo-otamendi3-640x412.jpg",
      "StadiumCapacity": 1300
  },
  {
      "id": 644,
      "Name": "Guarani A. Franco",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11135.png",
      "City": "Posadas, Provincia de Misiones",
      "StadiumName": "Estadio Clemente Argentino Fernandez de Oliveira",
      "StadiumImg": "https://media.api-sports.io/football/venues/7443.png",
      "StadiumCapacity": 12000
  },
  {
      "id": 645,
      "Name": "Union Mar del Plata",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11136.png",
      "City": "Mar del Plata, Provincia de Buenos Aires",
      "StadiumName": "Estadio Club Atletico Union",
      "StadiumImg": "https://pbs.twimg.com/media/CYOimWtWsAEzeWW.jpg",
      "StadiumCapacity": 5000
  },
  {
      "id": 646,
      "Name": "Deportivo Mandiyu",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11155.png",
      "City": "Corrientes, Provincia de Corrientes",
      "StadiumName": "Estadio Jose Antonio Romero Feris",
      "StadiumImg": "https://media.api-sports.io/football/venues/3033.png",
      "StadiumCapacity": 15172
  },
  {
      "id": 647,
      "Name": "Gutierrez",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11156.png",
      "City": "Maipu, Provincia de Mendoza",
      "StadiumName": "Estadio General Gutierrez",
      "StadiumImg": "https://media.api-sports.io/football/venues/7452.png",
      "StadiumCapacity": 5000
  },
  {
      "id": 648,
      "Name": "Libertad",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11157.png",
      "City": "Sunchales, Provincia de Santa Fe",
      "StadiumName": "Estadio Dr. Placido Tita",
      "StadiumImg": "https://media.api-sports.io/football/venues/7453.png",
      "StadiumCapacity": 6000
  },
  {
      "id": 649,
      "Name": "9 de Julio Morteros",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11159.png",
      "City": "Morteros, Provincia de Cordoba",
      "StadiumName": "Complejo Deportivo La Villa de los Deportes",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2015/04/cancha-nueve-julio-morteros1-640x370.jpg",
      "StadiumCapacity": 5000
  },
  {
      "id": 650,
      "Name": "Alianza Cutral Co",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11160.png",
      "City": "Cutral Co, Provincia del Neuquen",
      "StadiumName": "Estadio El Coloso del Ruca Quimey",
      "StadiumImg": "https://media.api-sports.io/football/venues/7455.png",
      "StadiumCapacity": 16500
  },
  {
      "id": 651,
      "Name": "Americo Tesorieri",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11161.png",
      "City": "La Rioja, Provincia de La Rioja",
      "StadiumName": "Cancha del Club Americo Tesorieri",
      "StadiumImg": "https://www.estadiosdeargentina.com.ar/wp-content/uploads/2021/11/cancha-americo-tesorieri-la-rioja4-640x360.jpg",
      "StadiumCapacity": 2000
  },
  {
      "id": 652,
      "Name": "Andino",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11162.png",
      "City": "La Rioja, Provincia de La Rioja",
      "StadiumName": "Polideportivo 20 de Agosto",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2014/10/estadio-andino-la-rioja01-1.jpg",
      "StadiumCapacity": 5000
  },
  {
      "id": 653,
      "Name": "CAI",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11163.png",
      "City": "Comodoro Rivadavia, Provincia del Chubut",
      "StadiumName": "Estadio Municipal de Comodoro Rivadavia",
      "StadiumImg": "https://media.api-sports.io/football/venues/7458.png",
      "StadiumCapacity": 7500
  },
  {
      "id": 654,
      "Name": "Concepcion FC",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11164.png",
      "City": "Concepcion, Provincia de Tucuman",
      "StadiumName": "Estadio Antonio Guillen",
      "StadiumImg": "https://interiorfutbolero.com.ar/wp-content/uploads/2023/10/estadio-antonio-guillen.jpeg",
      "StadiumCapacity": 12550
  },
  {
      "id": 655,
      "Name": "Tiro Federal BB",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11165.png",
      "City": "Bahia Blanca, Provincia de Buenos Aires",
      "StadiumName": "Estadio Onofre Pirrone",
      "StadiumImg": "https://media.api-sports.io/football/venues/7460.png",
      "StadiumCapacity": 2500
  },
  {
      "id": 656,
      "Name": "Velez de San Ramon",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11166.png",
      "City": "San Ramon, departamento Banda",
      "StadiumName": "Estadio Coliseo de los Suenos",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2015/05/velez-san-ramon01-1.jpg",
      "StadiumCapacity": 2500
  },
  {
      "id": 657,
      "Name": "Alumni",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/11167.png",
      "City": "Villa Maria, Provincia de Cordoba",
      "StadiumName": "Estadio Plaza Manuel Anselmo Ocampo",
      "StadiumImg": "https://media.api-sports.io/football/venues/7462.png",
      "StadiumCapacity": 5600
  },
  {
      "id": 658,
      "Name": "Ciudad de Bolivar",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/16612.png",
      "City": "Bolivar, Provincia de Buenos Aires",
      "StadiumName": "Estadio Municipal Eva Peron",
      "StadiumImg": "https://i.ytimg.com/vi/1i2xhlew-Vk/sddefault.jpg",
      "StadiumCapacity": 3300
  },
  {
      "id": 659,
      "Name": "Argentino Monte Maiz",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/18764.png",
      "City": "Laborde, Cordoba",
      "StadiumName": "Estadio Olimpo de Laborde",
      "StadiumImg": "https://montemaizmira.com.ar/06-2020/resize_1593390464.jpg",
      "StadiumCapacity": 1000
  },
  {
      "id": 660,
      "Name": "Liniers Bahia Blanca",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/18765.png",
      "City": "Bahia Blanca, Provincia de Buenos Aires",
      "StadiumName": "Estadio Dr. Alejandro Perez",
      "StadiumImg": "https://media.api-sports.io/football/venues/18535.png",
      "StadiumCapacity": 12000
  },
  {
      "id": 661,
      "Name": "Mercedes",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/18915.png",
      "City": "Mercedes, Provincia de Buenos Aires",
      "StadiumName": "Estadio Liga Mercedes",
      "StadiumImg": "https://estadiosdeargentina.com.ar/wp-content/uploads/2014/08/ligamercedina16-1.jpg",
      "StadiumCapacity": 6000
  },
  {
      "id": 662,
      "Name": "9 de Julio Rafaela",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/21040.png",
      "City": "Rafaela, Provincia de Santa Fe",
      "StadiumName": "Estadio German Malacho Soltermam",
      "StadiumImg": "https://interiorfutbolero.com.ar/wp-content/uploads/2020/12/cancha-nueve-de-julio-rafaela01-1.jpg",
      "StadiumCapacity": 8000
  },
  {
      "id": 663,
      "Name": "El Linqueno",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/21041.png",
      "City": "Lincoln, Provincia de Buenos Aires",
      "StadiumName": "Estadio Leonardo Costa",
      "StadiumImg": "https://media.api-sports.io/football/venues/19532.png",
      "StadiumCapacity": 6000
  },
  {
      "id": 664,
      "Name": "San Martin Mendoza",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/21042.png",
      "City": "San Martin, Provincia de Mendoza",
      "StadiumName": "Estadio General Jose de San Martin",
      "StadiumImg": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Estadio_Libertador_General_San_Martin_%28Mendoza%29.png",
      "StadiumCapacity": 8782
  },
  {
      "id": 665,
      "Name": "Atenas",
      "Country": "Argentina",
      "Logo": "https://media.api-sports.io/football/teams/21043.png",
      "City": "Ciudad de Rio Cuarto, Provincia de Cordoba",
      "StadiumName": "Estadio 9 de Julio",
      "StadiumImg": "https://media.api-sports.io/football/venues/19534.png",
      "StadiumCapacity": 7000
  }
]

const leaderboard = [
  {
    "id" : '3155cf13f4a04afe9ac08dd885720976',
    "Name": "Tomas",
    "Score": 3
  },
  {
    "id" : "3155cf13f4a04afe9ac08dd885720976",
    "Name": "Fiorella",
    "Score":10
}
]


app.get('/teams', (req, res) => {
  res.send(teams)
})
app.get('/leaderboard', (req, res) => {
  res.send(leaderboard)
})

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto: ${port}`)
})