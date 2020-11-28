import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrls } from './sourceurls.entity';
import { SourceUrlsCollection } from './sourceurls.collection';
//#endregion

export class SourceUrlsModel<E extends SourceUrls> extends ODataModel<E> {
  //#region ODataApi Properties
  base?: string;
  anonymous?: string;
  open?: string;
  download?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}