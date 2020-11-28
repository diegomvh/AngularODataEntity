import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Chat } from './chat.entity';
import { ChatModel } from './chat.model';
import { ChatCollection } from './chat.collection';
//#endregion

@Injectable()
export class ChatsService extends ODataEntityService<Chat> {
  constructor(protected client: ODataClient) {
    super(client, 'chats', 'microsoft.graph.chat');
  }

  //#region ODataApi Model
  chatModel(): ChatModel<Chat> {
    return this.entity().asModel() as ChatModel<Chat>;
  }
  //#endregion
  //#region ODataApi Collection
  chatCollection(): ChatCollection<Chat, ChatModel<Chat>> {
    return this.entities().asCollection() as ChatCollection<Chat, ChatModel<Chat>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
