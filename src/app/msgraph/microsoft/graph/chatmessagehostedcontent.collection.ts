import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ChatMessageHostedContent } from './chatmessagehostedcontent.entity';
import { ChatMessageHostedContentModel } from './chatmessagehostedcontent.model';
//#endregion

export class ChatMessageHostedContentCollection<E extends ChatMessageHostedContent, M extends ChatMessageHostedContentModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}