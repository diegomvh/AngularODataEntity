﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { InternetMessageHeader } from './internetmessageheader.entity';
//#endregion

export const InternetMessageHeaderConfig = {
  name: "internetMessageHeader",
  annotations: [],
  fields: {
    name: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as EntityConfig<InternetMessageHeader>;