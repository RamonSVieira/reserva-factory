import { Pagamento } from "../products/Pagamento";
import { ProcessoReserva } from "../products/ProcessoReserva";
import { Quarto } from "../products/Quarto";

export interface ReservaFactory{
    criarQuarto(isLuxuoso: boolean): Quarto,
    criarProcessoReserva(): ProcessoReserva,
    criarPagamento(): Pagamento,
}