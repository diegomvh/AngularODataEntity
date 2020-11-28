import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrlsCollection } from './sourceurls.collection';
import { SiuUrls } from './siuurls.entity';
import { SiuUrlsModel } from './siuurls.model';
//#endregion

export class SiuUrlsCollection<E extends SiuUrls, M extends SiuUrlsModel<E>> extends SourceUrlsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}