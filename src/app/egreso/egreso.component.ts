import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresosServices } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css'],
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() ingresoTotal: number = 0;
  constructor(private egresosServices: EgresosServices) {}

  ngOnInit(): void {
    this.egresos = this.egresosServices.egresos;
  }

  EliminarEgreso(egreso: Egreso) {
    this.egresosServices.Eliminar(egreso);
  }

  CalcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
