import { Pagamento } from "./Pagamento";

export class PagamentoRegiaoA extends Pagamento{
    efetuarPagamento(): void {
        console.log("Pagamento efetuado na região A.");
    }
}