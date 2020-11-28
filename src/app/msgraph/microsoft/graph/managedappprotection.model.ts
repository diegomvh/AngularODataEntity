import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ManagedAppPolicyModel } from './managedapppolicy.model';
import { ManagedAppClipboardSharingLevel } from './managedappclipboardsharinglevel.enum';
import { ManagedAppDataStorageLocation } from './managedappdatastoragelocation.enum';
import { ManagedAppDataTransferLevel } from './managedappdatatransferlevel.enum';
import { ManagedAppPinCharacterSet } from './managedapppincharacterset.enum';
import { ManagedBrowserType } from './managedbrowsertype.enum';
import { ManagedAppProtection } from './managedappprotection.entity';
import { ManagedMobileApp } from './managedmobileapp.entity';
import { ManagedMobileAppModel } from './managedmobileapp.model';
import { ManagedAppProtectionCollection } from './managedappprotection.collection';
import { ManagedMobileAppCollection } from './managedmobileapp.collection';
//#endregion

export class ManagedAppProtectionModel<E extends ManagedAppProtection> extends ManagedAppPolicyModel<E> {
  //#region ODataApi Properties
  allowedDataStorageLocations: ManagedAppDataStorageLocation;
  allowedInboundDataTransferSources: ManagedAppDataTransferLevel;
  allowedOutboundClipboardSharingLevel: ManagedAppClipboardSharingLevel;
  allowedOutboundDataTransferDestinations: ManagedAppDataTransferLevel;
  contactSyncBlocked: boolean;
  dataBackupBlocked: boolean;
  deviceComplianceRequired: boolean;
  disableAppPinIfDevicePinIsSet: boolean;
  fingerprintBlocked: boolean;
  managedBrowser: ManagedBrowserType;
  managedBrowserToOpenLinksRequired: boolean;
  maximumPinRetries: number;
  minimumPinLength: number;
  minimumRequiredAppVersion?: string;
  minimumRequiredOsVersion?: string;
  minimumWarningAppVersion?: string;
  minimumWarningOsVersion?: string;
  organizationalCredentialsRequired: boolean;
  periodBeforePinReset: Duration;
  periodOfflineBeforeAccessCheck: Duration;
  periodOfflineBeforeWipeIsEnforced: Duration;
  periodOnlineBeforeAccessCheck: Duration;
  pinCharacterSet: ManagedAppPinCharacterSet;
  pinRequired: boolean;
  printBlocked: boolean;
  saveAsBlocked: boolean;
  simplePinBlocked: boolean;
  //#endregion
  //#region ODataApi Actions
  public targetApps(apps: ManagedMobileApp[], options?: HttpOptions): Observable<any> {
    var res = this._action<{apps: ManagedMobileApp[]}, any>('microsoft.graph.targetApps');
    res.segment.entitySet('');
    return res.call({apps}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}