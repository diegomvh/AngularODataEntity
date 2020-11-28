import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { MobileAppIdentifier } from './mobileappidentifier.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
//#endregion

export class ManagedMobileAppModel<E extends ManagedMobileApp> extends EntityModel<E> {
  //#region ODataApi Properties
  mobileAppIdentifier?: MobileAppIdentifierModel<MobileAppIdentifier>;
  version?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}