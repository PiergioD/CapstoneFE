import { Esercizio } from './esercizio';

export interface Scheda {
  id: number;
  nome: string;
  data: string;
  esercizi: Esercizio[];
}
