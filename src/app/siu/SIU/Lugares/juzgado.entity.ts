import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Secretaria } from './secretaria.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { SecretariaModel } from './secretaria.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { SecretariaCollection } from './secretaria.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export interface Juzgado {
  //#region ODataApi Properties
  nombresJuez?: string;
  apellidosJuez?: string;
  fuero?: string;
  telefono?: string;
  guid: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  expedientes?: Expediente[];
  secretarias?: Secretaria[];
  //#endregion
}