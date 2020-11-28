import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosNetworkUsageRule } from './iosnetworkusagerule.complex';
import { IosNetworkUsageRuleModel } from './iosnetworkusagerule.model';
import { IosNetworkUsageRuleCollection } from './iosnetworkusagerule.collection';
//#endregion

export const IosNetworkUsageRuleConfig = {
  name: "iosNetworkUsageRule",
  model: IosNetworkUsageRuleModel,
  collection: IosNetworkUsageRuleCollection,
  annotations: [],
  fields: {
    cellularDataBlocked: {type: 'Edm.Boolean', nullable: false},
    cellularDataBlockWhenRoaming: {type: 'Edm.Boolean', nullable: false},
    managedApps: {type: 'graph.appListItem', collection: true}
  }
} as StructuredTypeConfig<IosNetworkUsageRule>;