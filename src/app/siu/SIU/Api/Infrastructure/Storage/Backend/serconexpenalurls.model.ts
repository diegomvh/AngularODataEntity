import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrlsModel } from './sourceurls.model';
import { SerconexPenalUrls } from './serconexpenalurls.entity';
import { SerconexPenalUrlsCollection } from './serconexpenalurls.collection';
//#endregion

export class SerconexPenalUrlsModel<E extends SerconexPenalUrls> extends SourceUrlsModel<E> {
  //#region ODataApi Properties
  embedded?: string;
  share?: string;
  pdf?: string;
  html?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}