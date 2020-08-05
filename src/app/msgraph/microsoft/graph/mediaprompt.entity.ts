import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Prompt } from './prompt.entity';
import { MediaInfo } from './mediainfo.entity';
//#endregion

export interface MediaPrompt extends Prompt {
  //#region ODataApi Properties
  mediaInfo: MediaInfo;
  //#endregion
}