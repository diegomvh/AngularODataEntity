import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Expediente } from './expediente.entity';
import { RolRequirenteExpediente } from './rolrequirenteexpediente.entity';
import { SubRolRequirenteExpediente } from './subrolrequirenteexpediente.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { ExpedienteModel } from './expediente.model';
import { RolRequirenteExpedienteModel } from './rolrequirenteexpediente.model';
import { SubRolRequirenteExpedienteModel } from './subrolrequirenteexpediente.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { ExpedienteCollection } from './expediente.collection';
import { RolRequirenteExpedienteCollection } from './rolrequirenteexpediente.collection';
import { SubRolRequirenteExpedienteCollection } from './subrolrequirenteexpediente.collection';
//#endregion

export interface RequirenteExpediente {
  //#region ODataApi Properties
  expedienteId?: number;
  requirenteId?: number;
  oficinaId?: number;
  key?: string;
  empleadoId?: number;
  rolRequirenteId: number;
  subRolRequirenteId: number;
  ausente?: boolean;
  abogadoParticular?: boolean;
  empleadoRegId?: number;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  expediente?: Expediente;
  requirente?: Requirente;
  oficina?: Oficina;
  empleado?: Empleado;
  empleadoReg?: Empleado;
  rolRequirente?: RolRequirenteExpediente;
  subRolRequirente?: SubRolRequirenteExpediente;
  //#endregion
}