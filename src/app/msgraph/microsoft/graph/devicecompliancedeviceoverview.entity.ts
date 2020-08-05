import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface DeviceComplianceDeviceOverview extends Entity {
  //#region ODataApi Properties
  pendingCount: number;
  notApplicableCount: number;
  successCount: number;
  errorCount: number;
  failedCount: number;
  lastUpdateDateTime: Date;
  configurationVersion: number;
  //#endregion
}