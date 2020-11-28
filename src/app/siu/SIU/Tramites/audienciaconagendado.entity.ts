import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface AudienciaConAgendado {
  //#region ODataApi Properties
  id: number;
  avenimientoId?: number;
  empleadoAltaId: number;
  empleadoAlta?: string;
  empleadoModificacionId: number;
  empleadoModificacion?: string;
  agendados?: string;
  fecha: Date;
  observaciones?: string;
  temaCita?: string;
  estadoAudiencia?: string;
  alta: Date;
  modificacion: Date;
  rev?: ArrayBuffer;
  //#endregion
}