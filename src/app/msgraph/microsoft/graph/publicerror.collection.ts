import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicError } from './publicerror.entity';
import { PublicErrorDetail } from './publicerrordetail.entity';
import { PublicInnerError } from './publicinnererror.entity';
import { PublicErrorModel } from './publicerror.model';
import { PublicErrorDetailModel } from './publicerrordetail.model';
import { PublicInnerErrorModel } from './publicinnererror.model';
import { PublicErrorDetailCollection } from './publicerrordetail.collection';
import { PublicInnerErrorCollection } from './publicinnererror.collection';
//#endregion

export class PublicErrorCollection<E extends PublicError, M extends PublicErrorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}