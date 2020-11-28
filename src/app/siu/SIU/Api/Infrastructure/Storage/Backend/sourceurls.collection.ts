import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrls } from './sourceurls.entity';
import { SourceUrlsModel } from './sourceurls.model';
//#endregion

export class SourceUrlsCollection<E extends SourceUrls, M extends SourceUrlsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}