import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StoragePlanInformation } from './storageplaninformation.entity';
import { StoragePlanInformationModel } from './storageplaninformation.model';
//#endregion

export class StoragePlanInformationCollection<E extends StoragePlanInformation, M extends StoragePlanInformationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}