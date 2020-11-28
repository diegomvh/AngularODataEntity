import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailboxSettings } from './mailboxsettings.complex';
import { MailboxSettingsModel } from './mailboxsettings.model';
import { MailboxSettingsCollection } from './mailboxsettings.collection';
//#endregion

export const MailboxSettingsConfig = {
  name: "mailboxSettings",
  model: MailboxSettingsModel,
  collection: MailboxSettingsCollection,
  annotations: [],
  fields: {
    archiveFolder: {type: 'Edm.String'},
    automaticRepliesSetting: {type: 'graph.automaticRepliesSetting'},
    dateFormat: {type: 'Edm.String'},
    delegateMeetingMessageDeliveryOptions: {type: 'graph.delegateMeetingMessageDeliveryOptions'},
    language: {type: 'graph.localeInfo'},
    timeFormat: {type: 'Edm.String'},
    timeZone: {type: 'Edm.String'},
    workingHours: {type: 'graph.workingHours'}
  }
} as StructuredTypeConfig<MailboxSettings>;