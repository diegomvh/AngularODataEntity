import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Expediente } from '../Tramites/expediente.entity';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export interface Asesor {
  //#region ODataApi Properties
  nombres: string;
  apellidos: string;
  telefono?: string;
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