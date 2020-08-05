import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EditionUpgradeLicenseType } from './editionupgradelicensetype.enum';
//#endregion

export const EditionUpgradeLicenseTypeConfig = {
  name: "editionUpgradeLicenseType",
  members: EditionUpgradeLicenseType
} as EnumConfig<EditionUpgradeLicenseType>;