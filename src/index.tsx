import { SistemasReservas } from './SistemaReservas';
import { ReservaFactoryRegiaoA } from './factories/ReservaFactoryRegiaoA';
import { ReservaFactoryRegiaoB } from './factories/ReservaFactoryRegiaoB';

const SistemaReservaSimplesA = new SistemasReservas( new ReservaFactoryRegiaoA, false);
SistemaReservaSimplesA.processarReserva();
SistemaReservaSimplesA.processarPagamento();

console.log("--------------------------------------------------");

const SistemaReservasLuxoB = new SistemasReservas( new ReservaFactoryRegiaoB, true);
SistemaReservasLuxoB.processarReserva();
SistemaReservasLuxoB.processarPagamento();
