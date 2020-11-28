import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { LicenseUnitsDetail } from './licenseunitsdetail.entity';
import { ServicePlanInfo } from './serviceplaninfo.entity';
import { LicenseUnitsDetailModel } from './licenseunitsdetail.model';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
import { EntityModel } from './entity.model';
import { LicenseUnitsDetailCollection } from './licenseunitsdetail.collection';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface SubscribedSku extends Entity {
  //#region ODataApi Properties
  appliesTo?: string;
  capabilityStatus?: string;
  consumedUnits?: number;
  prepaidUnits?: LicenseUnitsDetail;
  servicePlans: ServicePlanInfo[];
  skuId?: string;
  skuPartNumber?: string;
  //#endregion
}