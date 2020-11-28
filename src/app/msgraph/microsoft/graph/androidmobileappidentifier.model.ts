import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { AndroidMobileAppIdentifier } from './androidmobileappidentifier.complex';
import { AndroidMobileAppIdentifierCollection } from './androidmobileappidentifier.collection';
//#endregion

export class AndroidMobileAppIdentifierModel<E extends AndroidMobileAppIdentifier> extends MobileAppIdentifierModel<E> {
  //#region ODataApi Properties
  packageId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}