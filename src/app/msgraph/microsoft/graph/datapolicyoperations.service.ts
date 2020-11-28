import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { DataPolicyOperationStatus } from './datapolicyoperationstatus.enum';
import { DataPolicyOperation } from './datapolicyoperation.entity';
import { DataPolicyOperationModel } from './datapolicyoperation.model';
import { DataPolicyOperationCollection } from './datapolicyoperation.collection';
//#endregion

@Injectable()
export class DataPolicyOperationsService extends ODataEntityService<DataPolicyOperation> {
  constructor(protected client: ODataClient) {
    super(client, 'dataPolicyOperations', 'microsoft.graph.dataPolicyOperation');
  }

  //#region ODataApi Model
  dataPolicyOperationModel(): DataPolicyOperationModel<DataPolicyOperation> {
    return super.model() as DataPolicyOperationModel<DataPolicyOperation>;
  }
  //#endregion
  //#region ODataApi Collection
  dataPolicyOperationCollection(): DataPolicyOperationCollection<DataPolicyOperation, DataPolicyOperationModel<DataPolicyOperation>> {
    return super.collection() as DataPolicyOperationCollection<DataPolicyOperation, DataPolicyOperationModel<DataPolicyOperation>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
