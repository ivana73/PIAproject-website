import { Radionica } from "./radionica.model";

export class User{
  ime: string;
  prezime: string;
  username: string;
  password: string;
  telefon: string;
  mejl: string;
  tip: string;
  nazivOrganizacije: string;
  adresaSedistaOrg: string;
  matBrOrg: number;
  dobren: number;
  slika: string;
  istorijaRadionica: Array<Radionica>;
  prijavljeneRadionice: Array<string>;
}
