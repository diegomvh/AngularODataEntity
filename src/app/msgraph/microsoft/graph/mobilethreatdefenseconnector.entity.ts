import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { MobileThreatPartnerTenantState } from './mobilethreatpartnertenantstate.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface MobileThreatDefenseConnector extends Entity {
  //#region ODataApi Properties
  androidDeviceBlockedOnMissingPartnerData: boolean;
  androidEnabled: boolean;
  iosDeviceBlockedOnMissingPartnerData: boolean;
  iosEnabled: boolean;
  lastHeartbeatDateTime: Date;
  partnerState: MobileThreatPartnerTenantState;
  partnerUnresponsivenessThresholdInDays: number;
  partnerUnsupportedOsVersionBlocked: boolean;
  //#endregion
}