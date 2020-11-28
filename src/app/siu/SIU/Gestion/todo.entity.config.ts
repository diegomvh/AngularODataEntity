import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ToDo } from './todo.entity';
import { ToDoModel } from './todo.model';
import { ToDoCollection } from './todo.collection';
//#endregion

export const ToDoConfig = {
  name: "ToDo",
  model: ToDoModel,
  collection: ToDoCollection,
  annotations: [],
  fields: {
    empleadoId: {type: 'Edm.Int32'},
    descripcion: {type: 'Edm.String', nullable: false, maxLength: 300},
    completado: {type: 'Edm.Boolean', nullable: false},
    fecha: {type: 'Edm.DateTimeOffset', nullable: false},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    empleado: {type: 'SIU.Personas.Empleado', navigation: true, field: 'empleadoId', ref: 'id'}
  }
} as EntityConfig<ToDo>;