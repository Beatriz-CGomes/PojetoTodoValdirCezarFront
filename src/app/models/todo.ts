import { Data } from "@angular/router";

export interface Todo {
  id?: String,
  titulo: String,
  descricao?: String,
  dataParaFinalizar: any,
  finalizado: Boolean
}
