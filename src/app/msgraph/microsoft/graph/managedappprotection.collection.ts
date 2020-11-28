import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppPolicyCollection } from './managedapppolicy.collection';
import { ManagedAppClipboardSharingLevel } from './managedappclipboardsharinglevel.enum';
import { ManagedAppDataStorageLocation } from './managedappdatastoragelocation.enum';
import { ManagedAppDataTransferLevel } from './managedappdatatransferlevel.enum';
import { ManagedAppPinCharacterSet } from './managedapppincharacterset.enum';
import { ManagedBrowserType } from './managedbrowsertype.enum';
import { ManagedAppProtection } from './managedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedAppProtectionModel } from './managedappprotection.model';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
//#endregion

export class ManagedAppProtectionCollection<E extends ManagedAppProtection, M extends ManagedAppProtectionModel<E>> extends ManagedAppPolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}