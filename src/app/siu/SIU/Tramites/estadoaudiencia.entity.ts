import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Audiencia } from './audiencia.entity';
import { AudienciaModel } from './audiencia.model';
import { AudienciaCollection } from './audiencia.collection';
//#endregion

export interface EstadoAudiencia {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  audiencias?: Audiencia[];
  //#endregion
}