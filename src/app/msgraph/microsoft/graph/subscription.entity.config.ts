import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Subscription } from './subscription.entity';
import { SubscriptionModel } from './subscription.model';
import { SubscriptionCollection } from './subscription.collection';
//#endregion

export const SubscriptionConfig = {
  name: "subscription",
  base: "microsoft.graph.entity",
  model: SubscriptionModel,
  collection: SubscriptionCollection,
  annotations: [],
  fields: {
    applicationId: {type: 'Edm.String'},
    changeType: {type: 'Edm.String', nullable: false},
    clientState: {type: 'Edm.String'},
    creatorId: {type: 'Edm.String'},
    encryptionCertificate: {type: 'Edm.String'},
    encryptionCertificateId: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    includeResourceData: {type: 'Edm.Boolean'},
    latestSupportedTlsVersion: {type: 'Edm.String'},
    lifecycleNotificationUrl: {type: 'Edm.String'},
    notificationUrl: {type: 'Edm.String', nullable: false},
    resource: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<Subscription>;