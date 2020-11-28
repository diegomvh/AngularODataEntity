import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CitaDestinatarios } from './citadestinatarios.entity';
import { CitaDestinatariosModel } from './citadestinatarios.model';
import { CitaDestinatariosCollection } from './citadestinatarios.collection';
//#endregion

export interface VencimientoDestinatario extends CitaDestinatarios {
  //#region ODataApi Properties
  descripcion?: string;
  //#endregion
}