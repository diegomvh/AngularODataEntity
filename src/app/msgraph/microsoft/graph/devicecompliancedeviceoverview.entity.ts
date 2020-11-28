import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceComplianceDeviceOverview extends Entity {
  //#region ODataApi Properties
  configurationVersion: number;
  errorCount: number;
  failedCount: number;
  lastUpdateDateTime: Date;
  notApplicableCount: number;
  pendingCount: number;
  successCount: number;
  //#endregion
}