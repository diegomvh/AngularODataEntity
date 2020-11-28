import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Empleado } from '../Personas/empleado.entity';
import { CitacionConParticipante } from './citacionconparticipante.entity';
import { Audiencia } from './audiencia.entity';
import { Citacion } from './citacion.entity';
import { RequirenteCitacion } from './requirentecitacion.entity';
import { EmpleadoModel } from '../Personas/empleado.model';
import { CitacionConParticipanteModel } from './citacionconparticipante.model';
import { AudienciaModel } from './audiencia.model';
import { CitacionModel } from './citacion.model';
import { RequirenteCitacionModel } from './requirentecitacion.model';
import { EmpleadoCollection } from '../Personas/empleado.collection';
import { CitacionConParticipanteCollection } from './citacionconparticipante.collection';
import { AudienciaCollection } from './audiencia.collection';
import { RequirenteCitacionCollection } from './requirentecitacion.collection';
//#endregion

export class CitacionCollection<E extends Citacion, M extends CitacionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  public insertar(citacion: Citacion, destinatarios: RequirenteCitacion[], options?: HttpOptions): Observable<CitacionModel<Citacion>> {
    var res = this._action<{citacion: Citacion, destinatarios: RequirenteCitacion[]}, Citacion>('SIU.Insertar');
    res.segment.entitySet('citaciones');
    return res.call({citacion, destinatarios}, 'model', options) as Observable<CitacionModel<Citacion>>;
  }
  //#endregion
  //#region ODataApi Functions
  public getCitacionesAudiencia(audienciaId: number, options?: HttpOptions): Observable<CitacionConParticipanteCollection<CitacionConParticipante, CitacionConParticipanteModel<CitacionConParticipante>>> {
    var res = this._function<{audienciaId: number}, CitacionConParticipante>('SIU.GetCitacionesAudiencia');
    res.segment.entitySet('citaciones');
    return res.call({audienciaId}, 'collection', options) as Observable<CitacionConParticipanteCollection<CitacionConParticipante, CitacionConParticipanteModel<CitacionConParticipante>>>;
  }
  //#endregion
}