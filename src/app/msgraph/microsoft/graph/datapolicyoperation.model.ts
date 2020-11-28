import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
import { DataPolicyOperation } from './datapolicyoperation.entity';
import { DataPolicyOperationCollection } from './datapolicyoperation.collection';
//#endregion

export class DataPolicyOperationModel<E extends DataPolicyOperation> extends EntityModel<E> {
  //#region ODataApi Properties
  completedDateTime?: Date;
  progress: number;
  status?: DataPolicyOperationStatus;
  storageLocation?: string;
  submittedDateTime: Date;
  userId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}