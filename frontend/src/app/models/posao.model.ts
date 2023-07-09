import { Objekat } from "./objekat.model";
import { User } from "./user.model";

export class Posao{
  klijenat: string;
  agencija: string;
  datumZavrsetka: string;
  statusOfAcceptance: string; //job:0 declined, 1 requested,2 accepted, waiting for money,3 started, moneyCame
  statusOfWork: string; //job: 1 not started,request,2 started,3 finished
  objekat: string;
  novac: string;
}
