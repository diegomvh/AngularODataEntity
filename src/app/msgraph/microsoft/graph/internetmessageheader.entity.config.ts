import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InternetMessageHeader } from './internetmessageheader.entity';
import { InternetMessageHeaderModel } from './internetmessageheader.model';
import { InternetMessageHeaderCollection } from './internetmessageheader.collection';
//#endregion

export const InternetMessageHeaderConfig = {
  name: "internetMessageHeader",
  model: InternetMessageHeaderModel,
  collection: InternetMessageHeaderCollection,
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<InternetMessageHeader>;