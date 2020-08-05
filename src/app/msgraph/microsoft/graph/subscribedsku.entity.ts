import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ServicePlanInfo } from './serviceplaninfo.entity';
import { LicenseUnitsDetail } from './licenseunitsdetail.entity';
//#endregion

export interface SubscribedSku extends Entity {
  //#region ODataApi Properties
  capabilityStatus?: string;
  consumedUnits?: number;
  prepaidUnits?: LicenseUnitsDetail;
  servicePlans: ServicePlanInfo[];
  skuId?: string;
  skuPartNumber?: string;
  appliesTo?: string;
  //#endregion
}