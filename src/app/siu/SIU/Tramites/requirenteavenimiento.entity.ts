import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Avenimiento } from './avenimiento.entity';
import { RolRequirente } from './rolrequirente.entity';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { AvenimientoModel } from './avenimiento.model';
import { RolRequirenteModel } from './rolrequirente.model';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { RolRequirenteCollection } from './rolrequirente.collection';
//#endregion

export interface RequirenteAvenimiento {
  //#region ODataApi Properties
  requirenteId?: number;
  avenimientoId?: number;
  key?: string;
  rolRequirenteId?: number;
  domicilio?: string;
  patrocinanteParticular?: string;
  patrocinanteId?: number;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  requirente?: Requirente;
  avenimiento?: Avenimiento;
  patrocinante?: Empleado;
  rolRequirente?: RolRequirente;
  //#endregion
}