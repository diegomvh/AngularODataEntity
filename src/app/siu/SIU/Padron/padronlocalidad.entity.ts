import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Padron } from './padron.entity';
import { PadronDepartamento } from './padrondepartamento.entity';
import { PadronModel } from './padron.model';
import { PadronDepartamentoModel } from './padrondepartamento.model';
import { PadronCollection } from './padron.collection';
import { PadronDepartamentoCollection } from './padrondepartamento.collection';
//#endregion

export interface PadronLocalidad {
  //#region ODataApi Properties
  departamentoId: number;
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  padrones?: Padron[];
  departamento?: PadronDepartamento;
  //#endregion
}