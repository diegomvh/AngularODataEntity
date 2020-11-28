import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppIdentifier } from './mobileappidentifier.entity';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
//#endregion

export class MobileAppIdentifierCollection<E extends MobileAppIdentifier, M extends MobileAppIdentifierModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}