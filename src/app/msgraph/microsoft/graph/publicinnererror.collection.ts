import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.entity';
import { PublicInnerError } from './publicinnererror.entity';
import { PublicErrorDetailModel } from './publicerrordetail.model';
import { PublicInnerErrorModel } from './publicinnererror.model';
import { PublicErrorDetailCollection } from './publicerrordetail.collection';
//#endregion

export class PublicInnerErrorCollection<E extends PublicInnerError, M extends PublicInnerErrorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}