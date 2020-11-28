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
import { Contract } from './contract.entity';
import { ContractModel } from './contract.model';
import { ContractCollection } from './contract.collection';
//#endregion

@Injectable()
export class ContractsService extends ODataEntityService<Contract> {
  constructor(protected client: ODataClient) {
    super(client, 'contracts', 'microsoft.graph.contract');
  }

  //#region ODataApi Model
  contractModel(): ContractModel<Contract> {
    return super.model() as ContractModel<Contract>;
  }
  //#endregion
  //#region ODataApi Collection
  contractCollection(): ContractCollection<Contract, ContractModel<Contract>> {
    return super.collection() as ContractCollection<Contract, ContractModel<Contract>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
