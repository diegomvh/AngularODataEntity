import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Quota } from './quota.entity';
import { StoragePlanInformation } from './storageplaninformation.entity';
import { StoragePlanInformationModel } from './storageplaninformation.model';
import { QuotaCollection } from './quota.collection';
import { StoragePlanInformationCollection } from './storageplaninformation.collection';
//#endregion

export class QuotaModel<E extends Quota> extends ODataModel<E> {
  //#region ODataApi Properties
  deleted?: number;
  remaining?: number;
  state?: string;
  storagePlanInformation?: StoragePlanInformationModel<StoragePlanInformation>;
  total?: number;
  used?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}