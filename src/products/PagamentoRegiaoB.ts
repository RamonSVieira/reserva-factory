import { Pagamento } from "./Pagamento";

export class PagamentoRegiaoB extends Pagamento{
    efetuarPagamento(): void {
        console.log("Pagamento efetuado na região B.");
    }
}