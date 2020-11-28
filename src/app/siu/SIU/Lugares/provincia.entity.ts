import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Localidad } from './localidad.entity';
import { LocalidadModel } from './localidad.model';
import { LocalidadCollection } from './localidad.collection';
//#endregion

export interface Provincia {
  //#region ODataApi Properties
  nombre: string;
  oculto: boolean;
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