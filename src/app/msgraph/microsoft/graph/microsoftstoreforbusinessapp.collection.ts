import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppCollection } from './mobileapp.collection';
import { MicrosoftStoreForBusinessLicenseType } from './microsoftstoreforbusinesslicensetype.enum';
import { MicrosoftStoreForBusinessApp } from './microsoftstoreforbusinessapp.entity';
import { MicrosoftStoreForBusinessAppModel } from './microsoftstoreforbusinessapp.model';
//#endregion

export class MicrosoftStoreForBusinessAppCollection<E extends MicrosoftStoreForBusinessApp, M extends MicrosoftStoreForBusinessAppModel<E>> extends MobileAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}