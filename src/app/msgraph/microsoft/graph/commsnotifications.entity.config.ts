import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CommsNotifications } from './commsnotifications.entity';
//#endregion

export const CommsNotificationsConfig = {
  name: "commsNotifications",
  annotations: [],
  fields: {
    value: {type: 'graph.commsNotification', collection: true}
  }
} as EntityConfig<CommsNotifications>;