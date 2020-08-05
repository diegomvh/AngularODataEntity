import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileThreatPartnerTenantState } from './mobilethreatpartnertenantstate.enum';
//#endregion

export interface MobileThreatDefenseConnector extends Entity {
  //#region ODataApi Properties
  lastHeartbeatDateTime: Date;
  partnerState: MobileThreatPartnerTenantState;
  androidEnabled: boolean;
  iosEnabled: boolean;
  androidDeviceBlockedOnMissingPartnerData: boolean;
  iosDeviceBlockedOnMissingPartnerData: boolean;
  partnerUnsupportedOsVersionBlocked: boolean;
  partnerUnresponsivenessThresholdInDays: number;
  //#endregion
}