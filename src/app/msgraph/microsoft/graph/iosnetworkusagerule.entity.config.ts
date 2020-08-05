import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosNetworkUsageRule } from './iosnetworkusagerule.entity';
//#endregion

export const IosNetworkUsageRuleConfig = {
  name: "iosNetworkUsageRule",
  annotations: [],
  fields: {
    managedApps: {type: 'graph.appListItem', collection: true},
    cellularDataBlockWhenRoaming: {type: 'Edm.Boolean', nullable: false},
    cellularDataBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<IosNetworkUsageRule>;