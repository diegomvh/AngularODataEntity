import { SchemaConfig } from 'angular-odata';

//#region ODataApi Imports
import { ToDoConfig } from './todo.entity.config';
//#endregion

export const GestionSchema = {
  namespace: "SIU.Gestion",
  enums: [],
  entities: [ToDoConfig],
  callables: [],
  containers: []
} as SchemaConfig;