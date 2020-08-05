import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10EditionType } from './windows10editiontype.enum';
//#endregion

export const Windows10EditionTypeConfig = {
  name: "Windows10EditionType",
  members: Windows10EditionType
} as EnumConfig<Windows10EditionType>;