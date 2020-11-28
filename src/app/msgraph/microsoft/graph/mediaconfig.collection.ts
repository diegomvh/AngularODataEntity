import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaConfig } from './mediaconfig.complex';
import { MediaConfigModel } from './mediaconfig.model';
//#endregion

export class MediaConfigCollection<E extends MediaConfig, M extends MediaConfigModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}