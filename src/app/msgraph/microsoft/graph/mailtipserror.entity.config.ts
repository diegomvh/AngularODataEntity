import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailTipsError } from './mailtipserror.entity';
import { MailTipsErrorModel } from './mailtipserror.model';
import { MailTipsErrorCollection } from './mailtipserror.collection';
//#endregion

export const MailTipsErrorConfig = {
  name: "mailTipsError",
  model: MailTipsErrorModel,
  collection: MailTipsErrorCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.String'},
    message: {type: 'Edm.String'}
  }
} as EntityConfig<MailTipsError>;