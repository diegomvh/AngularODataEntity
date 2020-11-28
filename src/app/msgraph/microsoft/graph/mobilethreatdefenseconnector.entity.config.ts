import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileThreatDefenseConnector } from './mobilethreatdefenseconnector.entity';
import { MobileThreatDefenseConnectorModel } from './mobilethreatdefenseconnector.model';
import { MobileThreatDefenseConnectorCollection } from './mobilethreatdefenseconnector.collection';
//#endregion

export const MobileThreatDefenseConnectorConfig = {
  name: "mobileThreatDefenseConnector",
  base: "microsoft.graph.entity",
  model: MobileThreatDefenseConnectorModel,
  collection: MobileThreatDefenseConnectorCollection,
  annotations: [],
  fields: {
    androidDeviceBlockedOnMissingPartnerData: {type: 'Edm.Boolean', nullable: false},
    androidEnabled: {type: 'Edm.Boolean', nullable: false},
    iosDeviceBlockedOnMissingPartnerData: {type: 'Edm.Boolean', nullable: false},
    iosEnabled: {type: 'Edm.Boolean', nullable: false},
    lastHeartbeatDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    partnerState: {type: 'graph.mobileThreatPartnerTenantState', nullable: false},
    partnerUnresponsivenessThresholdInDays: {type: 'Edm.Int32', nullable: false},
    partnerUnsupportedOsVersionBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<MobileThreatDefenseConnector>;