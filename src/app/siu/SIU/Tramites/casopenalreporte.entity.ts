import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface CasoPenalReporte {
  //#region ODataApi Properties
  id: number;
  nuf?: string;
  nic?: string;
  nej?: string;
  fiscalia?: string;
  hecho?: Date;
  desde: Date;
  caratula?: string;
  subMateria?: string;
  observaciones?: string;
  principal?: string;
  alternativo?: string;
  participantes?: string;
  //#endregion
}