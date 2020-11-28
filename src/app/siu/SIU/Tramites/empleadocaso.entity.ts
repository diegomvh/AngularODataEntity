import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { MotivoCambioResponsable } from './motivocambioresponsable.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { MotivoCambioResponsableModel } from './motivocambioresponsable.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { MotivoCambioResponsableCollection } from './motivocambioresponsable.collection';
//#endregion

export interface EmpleadoCaso {
  //#region ODataApi Properties
  empleadoId?: number;
  casoId?: number;
  desde: Date;
  key?: string;
  motivoCambioResponsableId?: number;
  observaciones?: string;
  hasta?: Date;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  empleado?: Empleado;
  caso?: Caso;
  motivoCambioResponsable?: MotivoCambioResponsable;
  //#endregion
}