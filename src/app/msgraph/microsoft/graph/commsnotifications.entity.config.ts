import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CommsNotifications } from './commsnotifications.entity';
import { CommsNotificationsModel } from './commsnotifications.model';
import { CommsNotificationsCollection } from './commsnotifications.collection';
//#endregion

export const CommsNotificationsConfig = {
  name: "commsNotifications",
  model: CommsNotificationsModel,
  collection: CommsNotificationsCollection,
  annotations: [],
  fields: {
    value: {type: 'graph.commsNotification', collection: true}
  }
} as EntityConfig<CommsNotifications>;