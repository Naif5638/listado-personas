import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresosServices } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Ingreso[] = [];
  constructor(private ingresosService: IngresosServices) { }

  ngOnInit(): void {
    this.ingresos = this.ingresosService.ingresos;
  }

  EliminarIngreso(ingreso: Ingreso) {
    this.ingresosService.Eliminar(ingreso);
  }

}
