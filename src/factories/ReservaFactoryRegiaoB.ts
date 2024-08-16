import { ReservaFactory } from "./ReservaFactory";
import { Pagamento } from "../products/Pagamento";
import { PagamentoRegiaoB } from "../products/PagamentoRegiaoB";
import { ProcessoReserva } from "../products/ProcessoReserva";
import { ProcessoReservaRegiaoB } from "../products/ProcessoReservaRegiaoB";
import { Quarto } from "../products/Quarto";
import { QuartoRegiaoB } from "../products/QuartoRegiaoB";

export class ReservaFactoryRegiaoB implements ReservaFactory{
    criarQuarto(isLuxuoso: boolean): Quarto {
        const quarto = new QuartoRegiaoB();
        quarto.definirDescricao(isLuxuoso);
        return quarto;
    }

    criarProcessoReserva(): ProcessoReserva {
        return new ProcessoReservaRegiaoB();
    }

    criarPagamento(): Pagamento {
        return new PagamentoRegiaoB();
    }
}