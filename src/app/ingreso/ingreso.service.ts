import { Ingreso } from "./ingreso.model";

export class IngresosServices {
    ingresos: Ingreso[] = [
        new Ingreso("Salario", 4000),
        new Ingreso("Venta de Coche", 1500)
    ];

    Eliminar(ingreso: Ingreso) {
        const indice = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}