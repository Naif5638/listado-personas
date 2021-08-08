import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Input() ingresoTotal: number = 0;
  @Input() egresoTotal: number = 0;
  @Input() presupuestoTotal: number = 0;
  @Input() porcentajeTotal: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
