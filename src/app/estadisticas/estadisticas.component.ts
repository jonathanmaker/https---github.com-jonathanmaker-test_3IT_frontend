import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../clientes/cliente';
import { ServiceService} from '../clientes/Service/service.service';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  paginaActual: number = 1;
  clientes:Cliente[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getPersona()
    .subscribe(data=>{
      this.clientes=data;
      console.log(data)
    })
  }

}
