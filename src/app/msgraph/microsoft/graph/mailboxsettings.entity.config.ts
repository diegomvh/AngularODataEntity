import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailboxSettings } from './mailboxsettings.entity';
//#endregion

export const MailboxSettingsConfig = {
  name: "MailboxSettings",
  annotations: [],
  fields: {
    automaticRepliesSetting: {type: 'graph.automaticRepliesSetting'},
    archiveFolder: {type: 'Edm.String'},
    timeZone: {type: 'Edm.String'},
    language: {type: 'graph.localeInfo'},
    delegateMeetingMessageDeliveryOptions: {type: 'graph.delegateMeetingMessageDeliveryOptions'},
    workingHours: {type: 'graph.workingHours'},
    dateFormat: {type: 'Edm.String'},
    timeFormat: {type: 'Edm.String'}
  }
} as EntityConfig<MailboxSettings>;