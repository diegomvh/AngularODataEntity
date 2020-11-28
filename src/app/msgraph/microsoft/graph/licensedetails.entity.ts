import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ServicePlanInfo } from './serviceplaninfo.complex';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
import { EntityModel } from './entity.model';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface LicenseDetails extends Entity {
  //#region ODataApi Properties
  servicePlans: ServicePlanInfo[];
  skuId?: string;
  skuPartNumber?: string;
  //#endregion
}