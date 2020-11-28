import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Expediente } from './expediente.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { ExpedienteModel } from './expediente.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { ExpedienteCollection } from './expediente.collection';
//#endregion

export interface MovimientoExpediente {
  //#region ODataApi Properties
  expedienteId?: number;
  fecha: Date;
  descripcion: string;
  empleadoId?: number;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  expediente?: Expediente;
  empleado?: Empleado;
  //#endregion
}