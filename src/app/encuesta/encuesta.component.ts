import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../clientes/cliente';
import { ServiceService} from '../clientes/Service/service.service';
import {Estilos} from '../clientes/estilos'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

 // private cliente:Cliente = new Cliente()
 clientes:Cliente[];
  estilos:Estilos[];


 // listaMusica: string[] = ['Rock','Pop','Jazz','Clasica','Metal','Reggae']
  constructor(private service:ServiceService, private router:Router) {}
  ngOnInit() {

    this.service.getEstilo()
    .subscribe(data=>{
      this.estilos=data;

    })


  }
  public create(values:any): void{
    console.log("clicked!")
    console.log(values)
    this.service.crearPersona(values)
    .subscribe(data=>{
      Swal.fire({
        title: 'Perfecto ya puedes ver las estadisticas !!.',
        width: 600,
        padding: '3em',
        color: '#716add',

      })
     // alert("se guardaron los cambios con exito");
      this.router.navigate(["estadisticas"])
    })
  }


}
