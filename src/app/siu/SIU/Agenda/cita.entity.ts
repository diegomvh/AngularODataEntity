import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from '../Tramites/caso.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { MovimientoCaso } from '../Tramites/movimientocaso.entity';
import { Audiencia } from '../Tramites/audiencia.entity';
import { TemaCita } from './temacita.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from '../Tramites/caso.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { MovimientoCasoModel } from '../Tramites/movimientocaso.model';
import { AudienciaModel } from '../Tramites/audiencia.model';
import { TemaCitaModel } from './temacita.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
import { MovimientoCasoCollection } from '../Tramites/movimientocaso.collection';
import { AudienciaCollection } from '../Tramites/audiencia.collection';
import { TemaCitaCollection } from './temacita.collection';
//#endregion

export interface Cita {
  //#region ODataApi Properties
  empleadoId?: number;
  oficinaId?: number;
  temaCitaId?: number;
  expedienteId?: number;
  casoId?: number;
  requirenteId?: number;
  audienciaId?: number;
  movimientoId?: number;
  desde: Date;
  hasta: Date;
  contenido: string;
  privado: boolean;
  empleadoModificacionId?: number;
  fechaModificacion?: Date;
  numeroNotificacion?: number;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  audiencia?: Audiencia;
  movimiento?: MovimientoCaso;
  caso?: Caso;
  empleado?: Empleado;
  expediente?: Expediente;
  oficina?: Oficina;
  requirente?: Requirente;
  temaCita?: TemaCita;
  //#endregion
}