import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { LicenseUnitsDetail } from './licenseunitsdetail.complex';
import { ServicePlanInfo } from './serviceplaninfo.complex';
import { SubscribedSku } from './subscribedsku.entity';
import { LicenseUnitsDetailModel } from './licenseunitsdetail.model';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
import { SubscribedSkuModel } from './subscribedsku.model';
import { LicenseUnitsDetailCollection } from './licenseunitsdetail.collection';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
//#endregion

export class SubscribedSkuCollection<E extends SubscribedSku, M extends SubscribedSkuModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}