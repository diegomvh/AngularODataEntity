import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { NotificationMessageTemplate } from './notificationmessagetemplate.entity';
import { NotificationMessageTemplateModel } from './notificationmessagetemplate.model';
import { NotificationMessageTemplateCollection } from './notificationmessagetemplate.collection';
//#endregion

export const NotificationMessageTemplateConfig = {
  name: "notificationMessageTemplate",
  base: "microsoft.graph.entity",
  model: NotificationMessageTemplateModel,
  collection: NotificationMessageTemplateCollection,
  annotations: [],
  fields: {
    brandingOptions: {type: 'graph.notificationTemplateBrandingOptions', nullable: false},
    defaultLocale: {type: 'Edm.String'},
    displayName: {type: 'Edm.String', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    localizedNotificationMessages: {type: 'graph.localizedNotificationMessage', collection: true, navigation: true}
  }
} as StructuredTypeConfig<NotificationMessageTemplate>;