import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Quota } from './quota.complex';
import { StoragePlanInformation } from './storageplaninformation.complex';
import { QuotaModel } from './quota.model';
import { StoragePlanInformationModel } from './storageplaninformation.model';
import { StoragePlanInformationCollection } from './storageplaninformation.collection';
//#endregion

export class QuotaCollection<E extends Quota, M extends QuotaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}