import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Subscription } from './subscription.entity';
//#endregion

export const SubscriptionConfig = {
  name: "subscription",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    resource: {type: 'Edm.String', nullable: false},
    changeType: {type: 'Edm.String', nullable: false},
    clientState: {type: 'Edm.String'},
    notificationUrl: {type: 'Edm.String', nullable: false},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    applicationId: {type: 'Edm.String'},
    creatorId: {type: 'Edm.String'},
    latestSupportedTlsVersion: {type: 'Edm.String'}
  }
} as EntityConfig<Subscription>;