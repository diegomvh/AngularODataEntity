import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PadronLocalidad } from './padronlocalidad.entity';
import { PadronLocalidadModel } from './padronlocalidad.model';
import { PadronLocalidadCollection } from './padronlocalidad.collection';
//#endregion

export interface Padron {
  //#region ODataApi Properties
  localidadPadronId: number;
  documento?: string;
  clase?: number;
  nombre?: string;
  ocupacion?: string;
  direccion?: string;
  tipoDoc?: string;
  sexo?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  localidad?: PadronLocalidad;
  //#endregion
}