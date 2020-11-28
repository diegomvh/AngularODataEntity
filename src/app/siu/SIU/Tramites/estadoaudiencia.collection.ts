import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Audiencia } from './audiencia.entity';
import { EstadoAudiencia } from './estadoaudiencia.entity';
import { AudienciaModel } from './audiencia.model';
import { EstadoAudienciaModel } from './estadoaudiencia.model';
import { AudienciaCollection } from './audiencia.collection';
//#endregion

export class EstadoAudienciaCollection<E extends EstadoAudiencia, M extends EstadoAudienciaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}