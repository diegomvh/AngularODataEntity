import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PageType } from './pagetype.enum';
//#endregion

export const PageTypeConfig = {
  name: "PageType",
  members: PageType
} as EnumTypeConfig<PageType>;