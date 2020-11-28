import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TodoTask } from './todotask.entity';
import { TodoTaskModel } from './todotask.model';
import { TodoTaskCollection } from './todotask.collection';
//#endregion

export const TodoTaskConfig = {
  name: "todoTask",
  base: "microsoft.graph.entity",
  model: TodoTaskModel,
  collection: TodoTaskCollection,
  annotations: [],
  fields: {
    body: {type: 'graph.itemBody'},
    bodyLastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    completedDateTime: {type: 'graph.dateTimeTimeZone'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    dueDateTime: {type: 'graph.dateTimeTimeZone'},
    importance: {type: 'graph.importance', nullable: false},
    isReminderOn: {type: 'Edm.Boolean', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    recurrence: {type: 'graph.patternedRecurrence'},
    reminderDateTime: {type: 'graph.dateTimeTimeZone'},
    status: {type: 'graph.taskStatus', nullable: false},
    title: {type: 'Edm.String'},
    extensions: {type: 'graph.extension', collection: true, navigation: true},
    linkedResources: {type: 'graph.linkedResource', collection: true, navigation: true}
  }
} as StructuredTypeConfig<TodoTask>;