import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EditionUpgradeLicenseType } from './editionupgradelicensetype.enum';
//#endregion

export const EditionUpgradeLicenseTypeConfig = {
  name: "EditionUpgradeLicenseType",
  members: EditionUpgradeLicenseType
} as EnumConfig<EditionUpgradeLicenseType>;