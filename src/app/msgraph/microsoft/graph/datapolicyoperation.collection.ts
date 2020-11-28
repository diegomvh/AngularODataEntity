import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
import { DataPolicyOperation } from './datapolicyoperation.entity';
import { DataPolicyOperationModel } from './datapolicyoperation.model';
//#endregion

export class DataPolicyOperationCollection<E extends DataPolicyOperation, M extends DataPolicyOperationModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}