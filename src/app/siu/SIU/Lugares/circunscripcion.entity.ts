import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Localidad } from './localidad.entity';
import { LocalidadModel } from './localidad.model';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export interface Circunscripcion {
  //#region ODataApi Properties
  nombre?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  localidades?: Localidad[];
  //#endregion
}