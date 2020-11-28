import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Requirente } from '../Personas/requirente.entity';
import { Empleado } from '../Personas/empleado.entity';
import { Caso } from '../Tramites/caso.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { MovimientoCaso } from '../Tramites/movimientocaso.entity';
import { Audiencia } from '../Tramites/audiencia.entity';
import { CitaNotificacion } from './citanotificacion.entity';
import { Cita } from './cita.entity';
import { TemaCita } from './temacita.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { RequirenteModel } from '../Personas/requirente.model';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CasoModel } from '../Tramites/caso.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { MovimientoCasoModel } from '../Tramites/movimientocaso.model';
import { AudienciaModel } from '../Tramites/audiencia.model';
import { CitaNotificacionModel } from './citanotificacion.model';
import { TemaCitaModel } from './temacita.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
import { MovimientoCasoCollection } from '../Tramites/movimientocaso.collection';
import { AudienciaCollection } from '../Tramites/audiencia.collection';
import { CitaNotificacionCollection } from './citanotificacion.collection';
import { CitaCollection } from './cita.collection';
import { TemaCitaCollection } from './temacita.collection';
//#endregion

export class CitaModel<E extends Cita> extends ODataModel<E> {
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
  audiencia?: AudienciaModel<Audiencia>;
  movimiento?: MovimientoCasoModel<MovimientoCaso>;
  caso?: CasoModel<Caso>;
  empleado?: EmpleadoModel<Empleado>;
  expediente?: ExpedienteModel<Expediente>;
  oficina?: OficinaModel<Oficina>;
  requirente?: RequirenteModel<Requirente>;
  temaCita?: TemaCitaModel<TemaCita>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}