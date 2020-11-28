import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CommsNotification } from './commsnotification.complex';
import { CommsNotificationModel } from './commsnotification.model';
import { CommsNotificationCollection } from './commsnotification.collection';
//#endregion

export const CommsNotificationConfig = {
  name: "commsNotification",
  open: true,
  model: CommsNotificationModel,
  collection: CommsNotificationCollection,
  annotations: [],
  fields: {
    changeType: {type: 'graph.changeType', nullable: false},
    resourceUrl: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<CommsNotification>;