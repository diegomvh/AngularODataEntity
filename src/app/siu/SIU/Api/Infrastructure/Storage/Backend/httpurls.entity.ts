import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SourceUrls } from './sourceurls.entity';
import { SourceUrlsModel } from './sourceurls.model';
import { SourceUrlsCollection } from './sourceurls.collection';
//#endregion

export interface HttpUrls extends SourceUrls {
  //#region ODataApi Properties
  embedded?: string;
  share?: string;
  pdf?: string;
  html?: string;
  //#endregion
}