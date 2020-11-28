import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { IosMobileAppIdentifier } from './iosmobileappidentifier.entity';
import { IosMobileAppIdentifierCollection } from './iosmobileappidentifier.collection';
//#endregion

export class IosMobileAppIdentifierModel<E extends IosMobileAppIdentifier> extends MobileAppIdentifierModel<E> {
  //#region ODataApi Properties
  bundleId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}