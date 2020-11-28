import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ContentTypeInfo } from './contenttypeinfo.complex';
import { ContentTypeInfoModel } from './contenttypeinfo.model';
//#endregion

export class ContentTypeInfoCollection<E extends ContentTypeInfo, M extends ContentTypeInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}