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
import { ToDo } from '../SIU/Gestion/todo.entity';
import { ToDoModel } from '../SIU/Gestion/todo.model';
import { ToDoCollection } from '../SIU/Gestion/todo.collection';
//#endregion

@Injectable()
export class TodosService extends ODataEntityService<ToDo> {
  constructor(protected client: ODataClient) {
    super(client, 'todos', 'SIU.Gestion.ToDo');
  }

  //#region ODataApi Model
  toDoModel(): ToDoModel<ToDo> {
    return this.entity().asModel() as ToDoModel<ToDo>;
  }
  //#endregion
  //#region ODataApi Collection
  toDoCollection(): ToDoCollection<ToDo, ToDoModel<ToDo>> {
    return this.entities().asCollection() as ToDoCollection<ToDo, ToDoModel<ToDo>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
