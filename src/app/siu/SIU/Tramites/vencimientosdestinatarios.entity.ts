import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { VencimientoDestinatario } from './vencimientodestinatario.entity';
import { VencimientoDestinatarioModel } from './vencimientodestinatario.model';
import { VencimientoDestinatarioCollection } from './vencimientodestinatario.collection';
//#endregion

export interface VencimientosDestinatarios {
  //#region ODataApi Properties
  vencimientos?: VencimientoDestinatario[];
  //#endregion
}