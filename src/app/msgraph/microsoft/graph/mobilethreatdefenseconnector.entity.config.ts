import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileThreatDefenseConnector } from './mobilethreatdefenseconnector.entity';
//#endregion

export const MobileThreatDefenseConnectorConfig = {
  name: "mobileThreatDefenseConnector",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastHeartbeatDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    partnerState: {type: 'graph.mobileThreatPartnerTenantState', nullable: false},
    androidEnabled: {type: 'Edm.Boolean', nullable: false},
    iosEnabled: {type: 'Edm.Boolean', nullable: false},
    androidDeviceBlockedOnMissingPartnerData: {type: 'Edm.Boolean', nullable: false},
    iosDeviceBlockedOnMissingPartnerData: {type: 'Edm.Boolean', nullable: false},
    partnerUnsupportedOsVersionBlocked: {type: 'Edm.Boolean', nullable: false},
    partnerUnresponsivenessThresholdInDays: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<MobileThreatDefenseConnector>;