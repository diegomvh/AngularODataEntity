import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
import { LocalizedNotificationMessageModel } from './localizednotificationmessage.model';
import { LocalizedNotificationMessageCollection } from './localizednotificationmessage.collection';
//#endregion

export const LocalizedNotificationMessageConfig = {
  name: "localizedNotificationMessage",
  base: "microsoft.graph.entity",
  model: LocalizedNotificationMessageModel,
  collection: LocalizedNotificationMessageCollection,
  annotations: [],
  fields: {
    isDefault: {type: 'Edm.Boolean', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    locale: {type: 'Edm.String', nullable: false},
    messageTemplate: {type: 'Edm.String', nullable: false},
    subject: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<LocalizedNotificationMessage>;