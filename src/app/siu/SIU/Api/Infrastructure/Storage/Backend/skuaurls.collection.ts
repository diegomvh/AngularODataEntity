import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SourceUrlsCollection } from './sourceurls.collection';
import { SkuaUrls } from './skuaurls.entity';
import { SkuaUrlsModel } from './skuaurls.model';
//#endregion

export class SkuaUrlsCollection<E extends SkuaUrls, M extends SkuaUrlsModel<E>> extends SourceUrlsCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}