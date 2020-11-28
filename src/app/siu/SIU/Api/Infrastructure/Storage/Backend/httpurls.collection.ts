import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrlsCollection } from './sourceurls.collection';
import { HttpUrls } from './httpurls.entity';
import { HttpUrlsModel } from './httpurls.model';
//#endregion

export class HttpUrlsCollection<E extends HttpUrls, M extends HttpUrlsModel<E>> extends SourceUrlsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}