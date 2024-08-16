import { ProcessoReserva } from "./ProcessoReserva";

export class ProcessoReservaRegiaoA extends ProcessoReserva{
    reservar(): void {
        console.log("Reserva processada na Região A");
    }
}