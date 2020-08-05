import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecipientScopeType } from './recipientscopetype.enum';
//#endregion

export const RecipientScopeTypeConfig = {
  name: "recipientScopeType",
  flags: true,
  members: RecipientScopeType
} as EnumConfig<RecipientScopeType>;