import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Empleado } from './empleado.entity';
import { EmpleadoModel } from './empleado.model';
import { EmpleadoCollection } from './empleado.collection';
//#endregion

export interface CategoriaEmpleado {
  //#region ODataApi Properties
  nombre: string;
  oculto: boolean;
  esResponsable?: boolean;
  esSubResponsable?: boolean;
  esDefensorPenal: boolean;
  esAbogado?: boolean;
  esProfesional?: boolean;
  esReferente?: boolean;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleados?: Empleado[];
  //#endregion
}