import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { AudienciaModel } from './audiencia.model';
import { EstadoAudienciaModel } from './estadoaudiencia.model';
import { AvenimientoModel } from './avenimiento.model';
import { CitacionModel } from './citacion.model';
import { CitaModel } from '../Agenda/cita.model';
import { TemaCitaModel } from '../Agenda/temacita.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { AudienciaConAgendadoCollection } from './audienciaconagendado.collection';
import { CitaDestinatariosCollection } from './citadestinatarios.collection';
import { CasoCollection } from './caso.collection';
import { EstadoAudienciaCollection } from './estadoaudiencia.collection';
import { AvenimientoCollection } from './avenimiento.collection';
import { CitacionCollection } from './citacion.collection';
import { CitaCollection } from '../Agenda/cita.collection';
import { TemaCitaCollection } from '../Agenda/temacita.collection';
//#endregion

export class AudienciaCollection<E extends Audiencia, M extends AudienciaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  public insertar(audiencia: Audiencia, citaDestinatarios: CitaDestinatarios, options?: HttpOptions): Observable<AudienciaModel<Audiencia>> {
    var res = this._action<{audiencia: Audiencia, citaDestinatarios: CitaDestinatarios}, Audiencia>('SIU.Insertar');
    res.segment.entitySet('audiencias');
    return res.call({audiencia, citaDestinatarios}, 'model', options) as Observable<AudienciaModel<Audiencia>>;
  }
  //#endregion
  //#region ODataApi Functions
  public getAudienciasCaso(casoId: number, options?: HttpOptions): Observable<AudienciaConAgendadoCollection<AudienciaConAgendado, AudienciaConAgendadoModel<AudienciaConAgendado>>> {
    var res = this._function<{casoId: number}, AudienciaConAgendado>('SIU.GetAudienciasCaso');
    res.segment.entitySet('audiencias');
    return res.call({casoId}, 'collection', options) as Observable<AudienciaConAgendadoCollection<AudienciaConAgendado, AudienciaConAgendadoModel<AudienciaConAgendado>>>;
  }
  public getAudienciasAvenimiento(avenimientoId: number, options?: HttpOptions): Observable<AudienciaConAgendadoCollection<AudienciaConAgendado, AudienciaConAgendadoModel<AudienciaConAgendado>>> {
    var res = this._function<{avenimientoId: number}, AudienciaConAgendado>('SIU.GetAudienciasAvenimiento');
    res.segment.entitySet('audiencias');
    return res.call({avenimientoId}, 'collection', options) as Observable<AudienciaConAgendadoCollection<AudienciaConAgendado, AudienciaConAgendadoModel<AudienciaConAgendado>>>;
  }
  public audienciasDelRequirentePorEmpleado(requirenteId: number, desde: Date, hasta: Date, options?: HttpOptions): Observable<AudienciaModel<Audiencia>> {
    var res = this._function<{requirenteId: number, desde: Date, hasta: Date}, Audiencia>('SIU.AudienciasDelRequirentePorEmpleado');
    res.segment.entitySet('audiencias');
    return res.call({requirenteId, desde, hasta}, 'model', options) as Observable<AudienciaModel<Audiencia>>;
  }
  //#endregion
}