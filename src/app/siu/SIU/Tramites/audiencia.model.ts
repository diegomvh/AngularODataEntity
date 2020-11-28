import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { AudienciaConAgendado } from './audienciaconagendado.entity';
import { CitaDestinatarios } from './citadestinatarios.entity';
import { Caso } from './caso.entity';
import { Audiencia } from './audiencia.entity';
import { EstadoAudiencia } from './estadoaudiencia.entity';
import { Avenimiento } from './avenimiento.entity';
import { Citacion } from './citacion.entity';
import { Cita } from '../Agenda/cita.entity';
import { TemaCita } from '../Agenda/temacita.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { AudienciaConAgendadoModel } from './audienciaconagendado.model';
import { CitaDestinatariosModel } from './citadestinatarios.model';
import { CasoModel } from './caso.model';
import { EstadoAudienciaModel } from './estadoaudiencia.model';
import { AvenimientoModel } from './avenimiento.model';
import { CitacionModel } from './citacion.model';
import { CitaModel } from '../Agenda/cita.model';
import { TemaCitaModel } from '../Agenda/temacita.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { AudienciaConAgendadoCollection } from './audienciaconagendado.collection';
import { CitaDestinatariosCollection } from './citadestinatarios.collection';
import { CasoCollection } from './caso.collection';
import { AudienciaCollection } from './audiencia.collection';
import { EstadoAudienciaCollection } from './estadoaudiencia.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { CitacionCollection } from './citacion.collection';
import { CitaCollection } from '../Agenda/cita.collection';
import { TemaCitaCollection } from '../Agenda/temacita.collection';
//#endregion

export class AudienciaModel<E extends Audiencia> extends ODataModel<E> {
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
  avenimiento?: AvenimientoModel<Avenimiento>;
  caso?: CasoModel<Caso>;
  empleadoAlta?: EmpleadoModel<Empleado>;
  empleadoModificacion?: EmpleadoModel<Empleado>;
  estado?: EstadoAudienciaModel<EstadoAudiencia>;
  temaCita?: TemaCitaModel<TemaCita>;
  citas?: CitaCollection<Cita, CitaModel<Cita>>;
  citaciones?: CitacionCollection<Citacion, CitacionModel<Citacion>>;
  //#endregion
  //#region ODataApi Actions
  public actualizar(audiencia: Audiencia, citaDestinatarios: CitaDestinatarios, options?: HttpOptions): Observable<AudienciaModel<Audiencia>> {
    var res = this._action<{audiencia: Audiencia, citaDestinatarios: CitaDestinatarios}, Audiencia>('SIU.Actualizar');
    res.segment.entitySet('audiencias');
    return res.call({audiencia, citaDestinatarios}, 'model', options) as Observable<AudienciaModel<Audiencia>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}