import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10EditionType } from './windows10editiontype.enum';
//#endregion

export const Windows10EditionTypeConfig = {
  name: "windows10EditionType",
  members: Windows10EditionType
} as EnumTypeConfig<Windows10EditionType>;