import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
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
//#endregion

@Injectable()
export class DataPolicyOperationsService extends ODataService<DataPolicyOperation> {
  constructor(protected client: ODataClient) {
    super(client, 'dataPolicyOperations', 'microsoft.graph.dataPolicyOperation');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
