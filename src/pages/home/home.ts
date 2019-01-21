import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavsPage } from '../favs/favs';
import { InfoPage } from '../info/info';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
favs=FavsPage;
info=InfoPage;
favo=[];
casas=[
  {id:0,nombre:"Providencia condominio", caracteristicas: "De lujo", precio:"$6´150,000.°°", banos:"4.5", recamaras:"3", metros:"180m2", cont:"Gilberto Rangel", tel:" 33 2238-0988", imagen:"../assets/1.jpg"},
{id:1,nombre:"Providencia oficinas", caracteristicas: "Oficinas en renta amuebladas, todos los servicios", precio:"$4,100.00", banos:"0", recamaras:"0", metros:"15m2", cont:"Piscilla Foncerrada",tel:"3331674107", imagen:"../assets/2.jpg"},
  {id:2,nombre:"Espacio ejecutivo", caracteristicas: "Centro de negocios. servicios básicos y de limpieza y mobiliario incluidos.", precio:"$ 4,500.00", banos:"3", recamaras:"0", metros:"5m2", cont:"Maria Teresa Grageda",tel:" 33 16402751", imagen:"../assets/3.jpeg"},
  {id:3,nombre:"Casa Santa Tere ", caracteristicas: "no cochera", precio:"$ 1,600,000.00", banos:"2.5", recamaras:"4", metros:"170m2", cont:"Cecilia Renteria",tel:" 33 2082-1471", imagen:"../assets/4.jpg"},
  {id:4,nombre:"Casa Loma Bonita", caracteristicas: "Cocina integral, cochera para 2 autos, patio de servicio con piso, amplia terraza en segundo y tercer nivel.", precio:"$ 1,300,000.00", banos:"4", recamaras:"4", metros:"120m2", cont:"Liz Loma Bonita",tel:"3310888500", imagen:"../assets/5.jpg"},
  {id:5,nombre:"Casa Gran Plaza", caracteristicas: "Departamento amueblado", precio:"$ 7,100.00 × Mes", banos:"1", recamaras:"1", metros:"60m2", cont:"juan Jones",tel:"33 37249845", imagen:"../assets/6.jpg"},
  {id:6,nombre:"Jardines del Country", caracteristicas: "Nivel 10, con vista privilegiada. Cuenta con aire acondicionado en área social y en recámara principal. Alberca, gimnasio", precio:"$ 17,000.00", banos:"2", recamaras:"2", metros:"114m2", cont:"Maria Ether Isaac Lozada",tel:"3312303185", imagen:"../assets/7.jpg"},
  {id:7,nombre:"Departamento Valle de los Molinos", caracteristicas: "Patio, cajon estacionamiento", precio:"$ 285,000.00", banos:"1", recamaras:"2", metros:"45m2", cont:"Felipe de Jesus Gonzalez",tel:"33 3445-7881", imagen:"../assets/8.jpg"},
  {id:8,nombre:"Departamento Coto privado", caracteristicas: "Con alberca y seguridad, asadores, juegos infantiles, pistas jogging, zona skate, cancha usos multiples, parque infantil, etc.", precio:"$ 410,000.00", banos:"1", recamaras:"2", metros:"47m2", cont:"Isabel Muñoz",tel:"3321239221", imagen:"../assets/9.jpg"},
  {id:9,nombre:"Departamento Quinta Velarte", caracteristicas: "Piso 9 preciosa vista al parque,1 cajon estacionamiento,sala-comedor, cocina integral cbarra, cuarto lavado, closets, protecciones ventanas, cortinas enrollables.", precio:"$ 1,160,000.00", banos:"2", recamaras:"2", metros:"62m2", cont:"Jose Cota",tel:"3336629550", imagen:"../assets/10.jpg"}
]
  constructor(public navCtrl: NavController,public storage:Storage) {
    this.storage.keys()
    .then(keys=>
      {
       console.log(keys);
       if(keys.some(key=> key=='favo')){
         this.storage.get('favo')
         .then(favo=> {
           this.favo=JSON.parse(favo);
         });
      }
    });

  }
  clickobjeto(c){
    this.navCtrl.push(this.info,{casa:c,favo:this.favo})
  }
  clickfavs(){
    this.navCtrl.push(this.favs,{favo:this.favo})
  }
}
