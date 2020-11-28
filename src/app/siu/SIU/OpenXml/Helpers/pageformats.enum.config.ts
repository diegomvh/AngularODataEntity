import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PageFormats } from './pageformats.enum';
//#endregion

export const PageFormatsConfig = {
  name: "PageFormats",
  members: PageFormats
} as EnumConfig<PageFormats>;