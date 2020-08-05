import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface ChatMessageAttachment {
  //#region ODataApi Properties
  id?: string;
  contentType?: string;
  contentUrl?: string;
  content?: string;
  name?: string;
  thumbnailUrl?: string;
  //#endregion
}