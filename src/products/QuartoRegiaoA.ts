import { Quarto } from "./Quarto";

export class QuartoRegiaoA extends Quarto{
    definirDescricao(isLuxuoso: boolean): void {
        if (isLuxuoso) {
            console.log("Quarto de luxo região A");
        } else{
            console.log("Quarto simples região A");
        }
    }
}