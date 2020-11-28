import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from './caso.entity';
import { EstadoAudiencia } from './estadoaudiencia.entity';
import { Avenimiento } from './avenimiento.entity';
import { Citacion } from './citacion.entity';
import { Cita } from '../Agenda/cita.entity';
import { TemaCita } from '../Agenda/temacita.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from './caso.model';
import { EstadoAudienciaModel } from './estadoaudiencia.model';
import { AvenimientoModel } from './avenimiento.model';
import { CitacionModel } from './citacion.model';
import { CitaModel } from '../Agenda/cita.model';
import { TemaCitaModel } from '../Agenda/temacita.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from './caso.collection';
import { EstadoAudienciaCollection } from './estadoaudiencia.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { CitacionCollection } from './citacion.collection';
import { CitaCollection } from '../Agenda/cita.collection';
import { TemaCitaCollection } from '../Agenda/temacita.collection';
//#endregion

export interface Audiencia {
  //#region ODataApi Properties
  casoId?: number;
  avenimientoId?: number;
  estadoId: number;
  temaCitaId?: number;
  fecha: Date;
  alta: Date;
  modificacion: Date;
  observaciones?: string;
  empleadoAltaId: number;
  empleadoModificacionId: number;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  avenimiento?: Avenimiento;
  caso?: Caso;
  empleadoAlta?: Empleado;
  empleadoModificacion?: Empleado;
  estado?: EstadoAudiencia;
  temaCita?: TemaCita;
  citas?: Cita[];
  citaciones?: Citacion[];
  //#endregion
}