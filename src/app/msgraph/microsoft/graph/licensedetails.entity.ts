import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ServicePlanInfo } from './serviceplaninfo.entity';
//#endregion

export interface LicenseDetails extends Entity {
  //#region ODataApi Properties
  servicePlans: ServicePlanInfo[];
  skuId?: string;
  skuPartNumber?: string;
  //#endregion
}