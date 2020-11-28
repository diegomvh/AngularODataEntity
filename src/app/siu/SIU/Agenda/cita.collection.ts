import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { CitaModel } from './cita.model';
import { TemaCitaModel } from './temacita.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { RequirenteCollection } from '../Personas/requirente.collection';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
import { MovimientoCasoCollection } from '../Tramites/movimientocaso.collection';
import { AudienciaCollection } from '../Tramites/audiencia.collection';
import { CitaNotificacionCollection } from './citanotificacion.collection';
import { TemaCitaCollection } from './temacita.collection';
//#endregion

export class CitaCollection<E extends Cita, M extends CitaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getProximas(options?: HttpOptions): Observable<CitaNotificacionCollection<CitaNotificacion, CitaNotificacionModel<CitaNotificacion>>> {
    var res = this._function<null, CitaNotificacion>('SIU.GetProximas');
    res.segment.entitySet('citas');
    return res.call(null, 'collection', options) as Observable<CitaNotificacionCollection<CitaNotificacion, CitaNotificacionModel<CitaNotificacion>>>;
  }
  public citasDelRequirente(requirenteId: number, desde?: Date, hasta?: Date, options?: HttpOptions): Observable<CitaModel<Cita>> {
    var res = this._function<{requirenteId: number, desde?: Date, hasta?: Date}, Cita>('SIU.CitasDelRequirente');
    res.segment.entitySet('citas');
    return res.call({requirenteId, desde, hasta}, 'model', options) as Observable<CitaModel<Cita>>;
  }
  public citasDelCaso(casoId: number, desde: Date, options?: HttpOptions): Observable<CitaModel<Cita>> {
    var res = this._function<{casoId: number, desde: Date}, Cita>('SIU.CitasDelCaso');
    res.segment.entitySet('citas');
    return res.call({casoId, desde}, 'model', options) as Observable<CitaModel<Cita>>;
  }
  //#endregion
}