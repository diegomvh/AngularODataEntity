import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Audiencia } from '../Tramites/audiencia.entity';
import { Cita } from './cita.entity';
import { TemaCita } from './temacita.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { AudienciaModel } from '../Tramites/audiencia.model';
import { CitaModel } from './cita.model';
import { TemaCitaModel } from './temacita.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { AudienciaCollection } from '../Tramites/audiencia.collection';
import { CitaCollection } from './cita.collection';
//#endregion

export class TemaCitaCollection<E extends TemaCita, M extends TemaCitaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public comunesEntreOficinas(ids: number[], options?: HttpOptions): Observable<TemaCitaModel<TemaCita>> {
    var res = this._function<{ids: number[]}, TemaCita>('SIU.ComunesEntreOficinas');
    res.segment.entitySet('temasCita');
    return res.call({ids}, 'model', options) as Observable<TemaCitaModel<TemaCita>>;
  }
  public comunesEntreEmpleados(ids: number[], options?: HttpOptions): Observable<TemaCitaModel<TemaCita>> {
    var res = this._function<{ids: number[]}, TemaCita>('SIU.ComunesEntreEmpleados');
    res.segment.entitySet('temasCita');
    return res.call({ids}, 'model', options) as Observable<TemaCitaModel<TemaCita>>;
  }
  //#endregion
}