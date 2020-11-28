import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BitLockerEncryptionMethod } from './bitlockerencryptionmethod.enum';
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.entity';
import { BitLockerRemovableDrivePolicyCollection } from './bitlockerremovabledrivepolicy.collection';
//#endregion

export class BitLockerRemovableDrivePolicyModel<E extends BitLockerRemovableDrivePolicy> extends ODataModel<E> {
  //#region ODataApi Properties
  blockCrossOrganizationWriteAccess: boolean;
  encryptionMethod?: BitLockerEncryptionMethod;
  requireEncryptionForWriteAccess: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}