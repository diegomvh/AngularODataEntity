import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.entity';
//#endregion

export const AutomaticRepliesMailTipsConfig = {
  name: "automaticRepliesMailTips",
  annotations: [],
  fields: {
    message: {type: 'Edm.String'},
    messageLanguage: {type: 'graph.localeInfo'},
    scheduledStartTime: {type: 'graph.dateTimeTimeZone'},
    scheduledEndTime: {type: 'graph.dateTimeTimeZone'}
  }
} as EntityConfig<AutomaticRepliesMailTips>;