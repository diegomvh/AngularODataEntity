import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface MovimientoCasoConAgendado {
  //#region ODataApi Properties
  id: number;
  fecha: Date;
  estadoCasoId: number;
  estadoCaso?: string;
  observaciones?: string;
  vencimiento1?: Date;
  vencimiento2?: Date;
  agendados?: string;
  rev?: ArrayBuffer;
  //#endregion
}