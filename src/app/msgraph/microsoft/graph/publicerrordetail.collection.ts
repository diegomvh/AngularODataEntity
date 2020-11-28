import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.complex';
import { PublicErrorDetailModel } from './publicerrordetail.model';
//#endregion

export class PublicErrorDetailCollection<E extends PublicErrorDetail, M extends PublicErrorDetailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}