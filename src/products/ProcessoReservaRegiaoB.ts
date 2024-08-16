import { ProcessoReserva } from "./ProcessoReserva";

export class ProcessoReservaRegiaoB extends ProcessoReserva{
    reservar(): void {
        console.log("Reserva processada na Região B");
    }
}