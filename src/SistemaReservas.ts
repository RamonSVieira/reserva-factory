import { ReservaFactory } from "./factories/ReservaFactory";
import { Pagamento } from "./products/Pagamento";
import { ProcessoReserva } from "./products/ProcessoReserva";
import { Quarto } from "./products/Quarto";

export class SistemasReservas{
    private quarto: Quarto;
    private processoReserva: ProcessoReserva;
    private pagamento: Pagamento;

    constructor(factory: ReservaFactory, isLuxuoso: boolean){
        this.quarto = factory.criarQuarto(isLuxuoso);
        this.processoReserva = factory.criarProcessoReserva();
        this.pagamento = factory.criarPagamento();
    }

    processarReserva(): void{
        this.processoReserva.reservar();
    }

    processarPagamento(): void{
        this.pagamento.efetuarPagamento();
    }
}