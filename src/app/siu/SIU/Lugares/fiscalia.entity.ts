import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Localidad } from './localidad.entity';
import { LocalidadModel } from './localidad.model';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export interface Fiscalia {
  //#region ODataApi Properties
  abreviado?: string;
  nombre?: string;
  localidadId?: number;
  guid: string;
  shortname?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  name?: string;
  longname?: string;
  localidad?: Localidad;
  //#endregion
}