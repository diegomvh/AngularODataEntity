import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { RequirenteModel } from './requirente.model';
import { RequirenteCollection } from './requirente.collection';
//#endregion

export interface Nacionalidad {
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
  requirentes?: Requirente[];
  //#endregion
}