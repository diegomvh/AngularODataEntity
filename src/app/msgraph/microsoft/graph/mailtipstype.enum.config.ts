import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailTipsType } from './mailtipstype.enum';
//#endregion

export const MailTipsTypeConfig = {
  name: "MailTipsType",
  flags: true,
  members: MailTipsType
} as EnumConfig<MailTipsType>;