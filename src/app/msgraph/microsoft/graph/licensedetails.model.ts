import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ServicePlanInfo } from './serviceplaninfo.entity';
import { LicenseDetails } from './licensedetails.entity';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
import { LicenseDetailsCollection } from './licensedetails.collection';
//#endregion

export class LicenseDetailsModel<E extends LicenseDetails> extends EntityModel<E> {
  //#region ODataApi Properties
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