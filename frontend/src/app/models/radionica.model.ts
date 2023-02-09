import { Poruka } from "./komentari.model";

export class Radionica{
  naziv: string;
  datum: string;
  mesto: string;
  opis: string;
  detaljnije: string;
  preostaloMesta:number;
  profilnaSlika: string;
  galerijaSlika: Array<string>;
  komentari: Array<Poruka>;
  lajkovi: number;
}
