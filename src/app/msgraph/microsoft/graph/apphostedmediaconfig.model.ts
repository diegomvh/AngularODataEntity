import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaConfigModel } from './mediaconfig.model';
import { AppHostedMediaConfig } from './apphostedmediaconfig.entity';
import { AppHostedMediaConfigCollection } from './apphostedmediaconfig.collection';
//#endregion

export class AppHostedMediaConfigModel<E extends AppHostedMediaConfig> extends MediaConfigModel<E> {
  //#region ODataApi Properties
  blob?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}