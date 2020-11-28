import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface CitacionConParticipante {
  //#region ODataApi Properties
  id: number;
  fechaImpresion: Date;
  requirentes?: string;
  involucrados?: string;
  tipo?: string;
  rev?: ArrayBuffer;
  //#endregion
}