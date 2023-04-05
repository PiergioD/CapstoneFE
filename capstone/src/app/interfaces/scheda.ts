import { Esercizio } from './esercizio';

export interface Scheda {
  schedaId: Number;
  nome: string;
  dataCreazione: string;
  listaEse: Esercizio[];
}
