import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NotificationMessageTemplate } from './notificationmessagetemplate.entity';
//#endregion

export const NotificationMessageTemplateConfig = {
  name: "NotificationMessageTemplate",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    displayName: {type: 'Edm.String', nullable: false},
    defaultLocale: {type: 'Edm.String'},
    brandingOptions: {type: 'graph.notificationTemplateBrandingOptions', nullable: false},
    localizedNotificationMessages: {type: 'graph.localizedNotificationMessage', collection: true, navigation: true}
  }
} as EntityConfig<NotificationMessageTemplate>;