import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { AlternativeSecurityId } from './alternativesecurityid.complex';
import { DirectoryObject } from './directoryobject.entity';
import { Extension } from './extension.entity';
import { Device } from './device.entity';
import { AlternativeSecurityIdModel } from './alternativesecurityid.model';
import { ExtensionModel } from './extension.model';
import { AlternativeSecurityIdCollection } from './alternativesecurityid.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ExtensionCollection } from './extension.collection';
import { DeviceCollection } from './device.collection';
//#endregion

export class DeviceModel<E extends Device> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  accountEnabled?: boolean;
  alternativeSecurityIds: AlternativeSecurityIdCollection<AlternativeSecurityId, AlternativeSecurityIdModel<AlternativeSecurityId>>;
  approximateLastSignInDateTime?: Date;
  complianceExpirationDateTime?: Date;
  deviceId?: string;
  deviceMetadata?: string;
  deviceVersion?: number;
  displayName?: string;
  isCompliant?: boolean;
  isManaged?: boolean;
  mdmAppId?: string;
  onPremisesLastSyncDateTime?: Date;
  onPremisesSyncEnabled?: boolean;
  operatingSystem?: string;
  operatingSystemVersion?: string;
  physicalIds: string[];
  profileType?: string;
  systemLabels: string[];
  trustType?: string;
  memberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  registeredOwners?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  registeredUsers?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  transitiveMemberOf?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}