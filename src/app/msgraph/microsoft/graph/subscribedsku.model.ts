import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { LicenseUnitsDetail } from './licenseunitsdetail.complex';
import { ServicePlanInfo } from './serviceplaninfo.complex';
import { SubscribedSku } from './subscribedsku.entity';
import { LicenseUnitsDetailModel } from './licenseunitsdetail.model';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
import { LicenseUnitsDetailCollection } from './licenseunitsdetail.collection';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
import { SubscribedSkuCollection } from './subscribedsku.collection';
//#endregion

export class SubscribedSkuModel<E extends SubscribedSku> extends EntityModel<E> {
  //#region ODataApi Properties
  appliesTo?: string;
  capabilityStatus?: string;
  consumedUnits?: number;
  prepaidUnits?: LicenseUnitsDetailModel<LicenseUnitsDetail>;
  servicePlans: ServicePlanInfoCollection<ServicePlanInfo, ServicePlanInfoModel<ServicePlanInfo>>;
  skuId?: string;
  skuPartNumber?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}