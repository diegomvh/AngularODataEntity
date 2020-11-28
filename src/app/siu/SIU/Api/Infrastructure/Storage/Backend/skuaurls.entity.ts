import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SourceUrls } from './sourceurls.entity';
import { SourceUrlsModel } from './sourceurls.model';
import { SourceUrlsCollection } from './sourceurls.collection';
//#endregion

export interface SkuaUrls extends SourceUrls {
  //#region ODataApi Properties
  embedded?: string;
  share?: string;
  proxyPdf?: string;
  proxyHtml?: string;
  pdf?: string;
  html?: string;
  //#endregion
}