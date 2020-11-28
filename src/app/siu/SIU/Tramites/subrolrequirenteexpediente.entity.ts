import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RequirenteExpediente } from './requirenteexpediente.entity';
import { RequirenteExpedienteModel } from './requirenteexpediente.model';
import { RequirenteExpedienteCollection } from './requirenteexpediente.collection';
//#endregion

export interface SubRolRequirenteExpediente {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  rolesRequirentesEmpleadosExpedientes?: RequirenteExpediente[];
  //#endregion
}