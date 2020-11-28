import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { DeclaracionJurada } from './declaracionjurada.entity';
import { RequirenteNotaAvenimiento } from '../Tramites/requirentenotaavenimiento.entity';
import { RequirenteModel } from './requirente.model';
import { DeclaracionJuradaModel } from './declaracionjurada.model';
import { RequirenteNotaAvenimientoModel } from '../Tramites/requirentenotaavenimiento.model';
import { RequirenteCollection } from './requirente.collection';
import { DeclaracionJuradaCollection } from './declaracionjurada.collection';
import { RequirenteNotaAvenimientoCollection } from '../Tramites/requirentenotaavenimiento.collection';
//#endregion

export interface EstadoCivil {
  //#region ODataApi Properties
  descripcion: string;
  oculto: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  declaracionesJuradas?: DeclaracionJurada[];
  requirentesNotasAvenimientos?: RequirenteNotaAvenimiento[];
  requirentes?: Requirente[];
  //#endregion
}