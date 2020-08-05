import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeNotificationCollection } from './changenotificationcollection.entity';
//#endregion

export const ChangeNotificationCollectionConfig = {
  name: "changeNotificationCollection",
  annotations: [],
  fields: {
    value: {type: 'graph.changeNotification', nullable: false, collection: true}
  }
} as EntityConfig<ChangeNotificationCollection>;