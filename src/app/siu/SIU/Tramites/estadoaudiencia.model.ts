import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Audiencia } from './audiencia.entity';
import { EstadoAudiencia } from './estadoaudiencia.entity';
import { AudienciaModel } from './audiencia.model';
import { AudienciaCollection } from './audiencia.collection';
import { EstadoAudienciaCollection } from './estadoaudiencia.collection';
//#endregion

export class EstadoAudienciaModel<E extends EstadoAudiencia> extends ODataModel<E> {
  //#region ODataApi Properties
  nombre: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  audiencias?: AudienciaCollection<Audiencia, AudienciaModel<Audiencia>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}