import { GruppiMuscolari } from './gruppi-muscolari';

export interface Esercizio {
  id: number;
  nome: string;
  descrizione: string;
  muscolo: GruppiMuscolari;

  serie: number;
  ripetizioni: number;

  scheda_id: number;
}
