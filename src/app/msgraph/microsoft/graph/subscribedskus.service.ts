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
import { ServicePlanInfo } from './serviceplaninfo.entity';
import { LicenseUnitsDetail } from './licenseunitsdetail.entity';
import { SubscribedSku } from './subscribedsku.entity';
//#endregion

@Injectable()
export class SubscribedSkusService extends ODataEntityService<SubscribedSku> {
  constructor(protected client: ODataClient) {
    super(client, 'subscribedSkus', 'microsoft.graph.subscribedSku');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
