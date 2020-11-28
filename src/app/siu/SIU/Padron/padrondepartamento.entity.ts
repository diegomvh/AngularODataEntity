import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronLocalidadModel } from './padronlocalidad.model';
import { PadronLocalidadCollection } from './padronlocalidad.collection';
//#endregion

export interface PadronDepartamento {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  localidades?: PadronLocalidad[];
  //#endregion
}