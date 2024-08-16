import { ReservaFactory } from "./ReservaFactory";
import { Pagamento } from "../products/Pagamento";
import { PagamentoRegiaoA } from "../products/PagamentoRegiaoA";
import { ProcessoReserva } from "../products/ProcessoReserva";
import { ProcessoReservaRegiaoA } from "../products/ProcessoReservaRegiaoA";
import { Quarto } from "../products/Quarto";
import { QuartoRegiaoA } from "../products/QuartoRegiaoA";

export class ReservaFactoryRegiaoA implements ReservaFactory{
    criarQuarto(isLuxuoso: boolean): Quarto{
        const quarto = new QuartoRegiaoA();
        quarto.definirDescricao(isLuxuoso);
        return quarto;
    }

    criarProcessoReserva(): ProcessoReserva{
        return new ProcessoReservaRegiaoA();
    }

    criarPagamento(): Pagamento {
        return new PagamentoRegiaoA();
    }
}