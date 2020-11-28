import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticRepliesSetting } from './automaticrepliessetting.complex';
import { AutomaticRepliesSettingModel } from './automaticrepliessetting.model';
import { AutomaticRepliesSettingCollection } from './automaticrepliessetting.collection';
//#endregion

export const AutomaticRepliesSettingConfig = {
  name: "automaticRepliesSetting",
  model: AutomaticRepliesSettingModel,
  collection: AutomaticRepliesSettingCollection,
  annotations: [],
  fields: {
    externalAudience: {type: 'graph.externalAudienceScope'},
    externalReplyMessage: {type: 'Edm.String'},
    internalReplyMessage: {type: 'Edm.String'},
    scheduledEndDateTime: {type: 'graph.dateTimeTimeZone'},
    scheduledStartDateTime: {type: 'graph.dateTimeTimeZone'},
    status: {type: 'graph.automaticRepliesStatus'}
  }
} as StructuredTypeConfig<AutomaticRepliesSetting>;