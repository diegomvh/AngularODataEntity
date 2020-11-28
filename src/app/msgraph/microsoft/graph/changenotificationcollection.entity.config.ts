import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeNotificationCollection } from './changenotificationcollection.entity';
import { ChangeNotificationCollectionModel } from './changenotificationcollection.model';
import { ChangeNotificationCollectionCollection } from './changenotificationcollection.collection';
//#endregion

export const ChangeNotificationCollectionConfig = {
  name: "changeNotificationCollection",
  model: ChangeNotificationCollectionModel,
  collection: ChangeNotificationCollectionCollection,
  annotations: [],
  fields: {
    value: {type: 'graph.changeNotification', nullable: false, collection: true}
  }
} as EntityConfig<ChangeNotificationCollection>;