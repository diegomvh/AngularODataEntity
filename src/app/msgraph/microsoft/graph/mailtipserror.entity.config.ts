﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailTipsError } from './mailtipserror.entity';
//#endregion

export const MailTipsErrorConfig = {
  name: "mailTipsError",
  annotations: [],
  fields: {
    message: {type: 'Edm.String'},
    code: {type: 'Edm.String'}
  }
} as EntityConfig<MailTipsError>;