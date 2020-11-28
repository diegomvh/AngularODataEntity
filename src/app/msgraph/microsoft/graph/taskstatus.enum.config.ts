import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TaskStatus } from './taskstatus.enum';
//#endregion

export const TaskStatusConfig = {
  name: "taskStatus",
  members: TaskStatus
} as EnumTypeConfig<TaskStatus>;