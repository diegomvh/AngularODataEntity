import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WellknownListName } from './wellknownlistname.enum';
import { Extension } from './extension.entity';
import { TodoTask } from './todotask.entity';
import { EntityModel } from './entity.model';
import { ExtensionModel } from './extension.model';
import { TodoTaskModel } from './todotask.model';
import { EntityCollection } from './entity.collection';
import { ExtensionCollection } from './extension.collection';
import { TodoTaskCollection } from './todotask.collection';
//#endregion

export interface TodoTaskList extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  isOwner: boolean;
  isShared: boolean;
  wellknownListName: WellknownListName;
  extensions?: Extension[];
  tasks?: TodoTask[];
  //#endregion
}