import { Quarto } from "./Quarto";

export class QuartoRegiaoB extends Quarto{
    definirDescricao(isLuxuoso: boolean): void {
        if (isLuxuoso) {
            console.log("Quarto de luxo região B");
        } else{
            console.log("Quarto simples região B");
        }
    }
}