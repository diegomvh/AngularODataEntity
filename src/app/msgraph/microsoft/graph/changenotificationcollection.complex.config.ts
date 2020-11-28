import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChangeNotificationCollection } from './changenotificationcollection.complex';
import { ChangeNotificationCollectionModel } from './changenotificationcollection.model';
import { ChangeNotificationCollectionCollection } from './changenotificationcollection.collection';
//#endregion

export const ChangeNotificationCollectionConfig = {
  name: "changeNotificationCollection",
  model: ChangeNotificationCollectionModel,
  collection: ChangeNotificationCollectionCollection,
  annotations: [],
  fields: {
    validationTokens: {type: 'Edm.String', collection: true},
    value: {type: 'graph.changeNotification', nullable: false, collection: true}
  }
} as StructuredTypeConfig<ChangeNotificationCollection>;