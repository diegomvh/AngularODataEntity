import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeNotification } from './changenotification.complex';
import { ChangeNotificationModel } from './changenotification.model';
import { ChangeNotificationCollection } from './changenotification.collection';
//#endregion

export const ChangeNotificationConfig = {
  name: "changeNotification",
  model: ChangeNotificationModel,
  collection: ChangeNotificationCollection,
  annotations: [],
  fields: {
    changeType: {type: 'graph.changeType', nullable: false},
    clientState: {type: 'Edm.String'},
    encryptedContent: {type: 'graph.changeNotificationEncryptedContent'},
    id: {type: 'Edm.String'},
    lifecycleEvent: {type: 'graph.lifecycleEventType'},
    resource: {type: 'Edm.String', nullable: false},
    resourceData: {type: 'graph.resourceData'},
    subscriptionExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    subscriptionId: {type: 'Edm.Guid', nullable: false},
    tenantId: {type: 'Edm.Guid', nullable: false}
  }
} as StructuredTypeConfig<ChangeNotification>;