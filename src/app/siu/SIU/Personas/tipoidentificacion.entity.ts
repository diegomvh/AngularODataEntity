import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Requirente } from './requirente.entity';
import { Empleado } from './empleado.entity';
import { RequirenteModel } from './requirente.model';
import { EmpleadoModel } from './empleado.model';
import { RequirenteCollection } from './requirente.collection';
import { EmpleadoCollection } from './empleado.collection';
//#endregion

export interface TipoIdentificacion {
  //#region ODataApi Properties
  nombre: string;
  descripcion: string;
  oculto: boolean;
  longname?: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  empleados?: Empleado[];
  requirentes?: Requirente[];
  //#endregion
}