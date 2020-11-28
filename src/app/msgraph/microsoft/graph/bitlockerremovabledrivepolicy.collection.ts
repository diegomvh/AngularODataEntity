import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { BitLockerEncryptionMethod } from './bitlockerencryptionmethod.enum';
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.entity';
import { BitLockerRemovableDrivePolicyModel } from './bitlockerremovabledrivepolicy.model';
//#endregion

export class BitLockerRemovableDrivePolicyCollection<E extends BitLockerRemovableDrivePolicy, M extends BitLockerRemovableDrivePolicyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}