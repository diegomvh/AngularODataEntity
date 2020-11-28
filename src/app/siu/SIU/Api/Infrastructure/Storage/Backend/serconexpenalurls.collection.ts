import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrlsCollection } from './sourceurls.collection';
import { SerconexPenalUrls } from './serconexpenalurls.entity';
import { SerconexPenalUrlsModel } from './serconexpenalurls.model';
//#endregion

export class SerconexPenalUrlsCollection<E extends SerconexPenalUrls, M extends SerconexPenalUrlsModel<E>> extends SourceUrlsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}