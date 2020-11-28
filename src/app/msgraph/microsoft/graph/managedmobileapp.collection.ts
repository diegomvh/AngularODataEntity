import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { MobileAppIdentifier } from './mobileappidentifier.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { MobileAppIdentifierModel } from './mobileappidentifier.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { MobileAppIdentifierCollection } from './mobileappidentifier.collection';
//#endregion

export class ManagedMobileAppCollection<E extends ManagedMobileApp, M extends ManagedMobileAppModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}