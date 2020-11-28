import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface CitaNotificacion {
  //#region ODataApi Properties
  desde: Date;
  hasta: Date;
  contenido?: string;
  temaCitaId: number;
  temaCita?: string;
  nic?: string;
  nuf?: string;
  fiscalia?: string;
  oficinaId?: number;
  //#endregion
}