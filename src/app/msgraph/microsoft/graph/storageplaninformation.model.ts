import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StoragePlanInformation } from './storageplaninformation.entity';
import { StoragePlanInformationCollection } from './storageplaninformation.collection';
//#endregion

export class StoragePlanInformationModel<E extends StoragePlanInformation> extends ODataModel<E> {
  //#region ODataApi Properties
  upgradeAvailable?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}