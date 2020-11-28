import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedBrowserType } from './managedbrowsertype.enum';
//#endregion

export const ManagedBrowserTypeConfig = {
  name: "managedBrowserType",
  flags: true,
  members: ManagedBrowserType
} as EnumTypeConfig<ManagedBrowserType>;