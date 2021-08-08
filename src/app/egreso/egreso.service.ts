import { Egreso } from "./egreso.model";

export class EgresosServices {
    egresos: Egreso[] = [
        new Egreso("Renta Departamento", 900),
        new Egreso("Ropa", 435.28)
    ]

    Eliminar(egreso: Egreso) {
        const indice = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }
}