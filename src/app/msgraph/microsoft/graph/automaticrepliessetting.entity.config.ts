import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticRepliesSetting } from './automaticrepliessetting.entity';
//#endregion

export const AutomaticRepliesSettingConfig = {
  name: "AutomaticRepliesSetting",
  annotations: [],
  fields: {
    status: {type: 'graph.automaticRepliesStatus'},
    externalAudience: {type: 'graph.externalAudienceScope'},
    scheduledStartDateTime: {type: 'graph.dateTimeTimeZone'},
    scheduledEndDateTime: {type: 'graph.dateTimeTimeZone'},
    internalReplyMessage: {type: 'Edm.String'},
    externalReplyMessage: {type: 'Edm.String'}
  }
} as EntityConfig<AutomaticRepliesSetting>;