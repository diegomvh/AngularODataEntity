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
import { LicenseUnitsDetail } from './licenseunitsdetail.entity';
import { ServicePlanInfo } from './serviceplaninfo.entity';
import { SubscribedSku } from './subscribedsku.entity';
import { LicenseUnitsDetailModel } from './licenseunitsdetail.model';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
import { SubscribedSkuModel } from './subscribedsku.model';
import { LicenseUnitsDetailCollection } from './licenseunitsdetail.collection';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
import { SubscribedSkuCollection } from './subscribedsku.collection';
//#endregion

@Injectable()
export class SubscribedSkusService extends ODataEntityService<SubscribedSku> {
  constructor(protected client: ODataClient) {
    super(client, 'subscribedSkus', 'microsoft.graph.subscribedSku');
  }

  //#region ODataApi Model
  subscribedSkuModel(): SubscribedSkuModel<SubscribedSku> {
    return super.model() as SubscribedSkuModel<SubscribedSku>;
  }
  //#endregion
  //#region ODataApi Collection
  subscribedSkuCollection(): SubscribedSkuCollection<SubscribedSku, SubscribedSkuModel<SubscribedSku>> {
    return super.collection() as SubscribedSkuCollection<SubscribedSku, SubscribedSkuModel<SubscribedSku>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
