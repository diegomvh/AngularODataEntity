import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
import { AndroidMobileAppIdentifier } from './androidmobileappidentifier.complex';
import { AndroidMobileAppIdentifierModel } from './androidmobileappidentifier.model';
//#endregion

export class AndroidMobileAppIdentifierCollection<E extends AndroidMobileAppIdentifier, M extends AndroidMobileAppIdentifierModel<E>> extends MobileAppIdentifierCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}