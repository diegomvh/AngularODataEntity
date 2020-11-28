import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PromptModel } from './prompt.model';
import { MediaInfo } from './mediainfo.complex';
import { MediaPrompt } from './mediaprompt.complex';
import { MediaInfoModel } from './mediainfo.model';
import { MediaInfoCollection } from './mediainfo.collection';
import { MediaPromptCollection } from './mediaprompt.collection';
//#endregion

export class MediaPromptModel<E extends MediaPrompt> extends PromptModel<E> {
  //#region ODataApi Properties
  mediaInfo: MediaInfoModel<MediaInfo>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}