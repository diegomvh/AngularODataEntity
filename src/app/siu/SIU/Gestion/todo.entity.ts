import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
//#endregion

export interface ToDo {
  //#region ODataApi Properties
  empleadoId?: number;
  descripcion: string;
  completado: boolean;
  fecha: Date;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleado?: Empleado;
  //#endregion
}