import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Juzgado } from './juzgado.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { JuzgadoModel } from './juzgado.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { JuzgadoCollection } from './juzgado.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export interface Secretaria {
  //#region ODataApi Properties
  juzgadoId?: number;
  nombre: string;
  nombresSecretario: string;
  apellidosSecretario: string;
  telefono: string;
  secreatariaSigdoId?: number;
  guid: string;
  name?: string;
  longname?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  expedientes?: Expediente[];
  juzgado?: Juzgado;
  //#endregion
}