import { Poruka } from "./komentari.model";
import { Radionica } from "./radionica.model";

export class RadionicaAkcije{
  username: string;
  prijavljen: boolean;
  radionica: Radionica;
  lajkovi: boolean;
  attended: boolean;
  chat: Array<Poruka>;
}
