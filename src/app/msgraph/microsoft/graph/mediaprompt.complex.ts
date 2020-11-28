import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Prompt } from './prompt.complex';
import { MediaInfo } from './mediainfo.complex';
import { MediaInfoModel } from './mediainfo.model';
import { PromptModel } from './prompt.model';
import { MediaInfoCollection } from './mediainfo.collection';
import { PromptCollection } from './prompt.collection';
//#endregion

export interface MediaPrompt extends Prompt {
  //#region ODataApi Properties
  mediaInfo: MediaInfo;
  //#endregion
}