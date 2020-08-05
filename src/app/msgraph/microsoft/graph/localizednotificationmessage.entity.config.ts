import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocalizedNotificationMessage } from './localizednotificationmessage.entity';
//#endregion

export const LocalizedNotificationMessageConfig = {
  name: "localizedNotificationMessage",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    locale: {type: 'Edm.String', nullable: false},
    subject: {type: 'Edm.String', nullable: false},
    messageTemplate: {type: 'Edm.String', nullable: false},
    isDefault: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<LocalizedNotificationMessage>;