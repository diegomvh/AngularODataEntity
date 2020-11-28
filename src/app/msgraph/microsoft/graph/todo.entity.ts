import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TodoTaskList } from './todotasklist.entity';
import { EntityModel } from './entity.model';
import { TodoTaskListModel } from './todotasklist.model';
import { EntityCollection } from './entity.collection';
import { TodoTaskListCollection } from './todotasklist.collection';
//#endregion

export interface Todo extends Entity {
  //#region ODataApi Properties
  lists?: TodoTaskList[];
  //#endregion
}