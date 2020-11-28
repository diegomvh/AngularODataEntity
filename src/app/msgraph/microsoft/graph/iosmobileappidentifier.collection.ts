import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
import { IosMobileAppIdentifier } from './iosmobileappidentifier.complex';
import { IosMobileAppIdentifierModel } from './iosmobileappidentifier.model';
//#endregion

export class IosMobileAppIdentifierCollection<E extends IosMobileAppIdentifier, M extends IosMobileAppIdentifierModel<E>> extends MobileAppIdentifierCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}