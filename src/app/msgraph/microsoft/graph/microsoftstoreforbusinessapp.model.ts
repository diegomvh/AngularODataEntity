import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppModel } from './mobileapp.model';
import { MicrosoftStoreForBusinessLicenseType } from './microsoftstoreforbusinesslicensetype.enum';
import { MicrosoftStoreForBusinessApp } from './microsoftstoreforbusinessapp.entity';
import { MicrosoftStoreForBusinessAppCollection } from './microsoftstoreforbusinessapp.collection';
//#endregion

export class MicrosoftStoreForBusinessAppModel<E extends MicrosoftStoreForBusinessApp> extends MobileAppModel<E> {
  //#region ODataApi Properties
  licenseType: MicrosoftStoreForBusinessLicenseType;
  packageIdentityName?: string;
  productKey?: string;
  totalLicenseCount: number;
  usedLicenseCount: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}