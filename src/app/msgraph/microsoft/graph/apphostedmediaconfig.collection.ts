import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaConfigCollection } from './mediaconfig.collection';
import { AppHostedMediaConfig } from './apphostedmediaconfig.complex';
import { AppHostedMediaConfigModel } from './apphostedmediaconfig.model';
//#endregion

export class AppHostedMediaConfigCollection<E extends AppHostedMediaConfig, M extends AppHostedMediaConfigModel<E>> extends MediaConfigCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}