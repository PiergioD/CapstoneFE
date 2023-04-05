import { GruppiMuscolari } from './gruppi-muscolari';

export interface Esercizio {
  esercizio_id: string;
  nomeEse: string;
  descrizione: string;
  muscolo: GruppiMuscolari;

  serie: number;
  ripetizioni: number;
}
