import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Expediente } from '../Tramites/expediente.entity';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export interface Fiscal {
  //#region ODataApi Properties
  nro: number;
  nombres: string;
  apellidos: string;
  habilitado: boolean;
  guid: string;
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