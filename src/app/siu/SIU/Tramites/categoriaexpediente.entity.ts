import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Expediente } from './expediente.entity';
import { ExpedienteModel } from './expediente.model';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export interface CategoriaExpediente {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  expedientes?: Expediente[];
  //#endregion
}