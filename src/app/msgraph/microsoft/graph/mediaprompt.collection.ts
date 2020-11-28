import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PromptCollection } from './prompt.collection';
import { MediaInfo } from './mediainfo.complex';
import { MediaPrompt } from './mediaprompt.complex';
import { MediaInfoModel } from './mediainfo.model';
import { MediaPromptModel } from './mediaprompt.model';
import { MediaInfoCollection } from './mediainfo.collection';
//#endregion

export class MediaPromptCollection<E extends MediaPrompt, M extends MediaPromptModel<E>> extends PromptCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}