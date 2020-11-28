import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { LifecycleEventType } from './lifecycleeventtype.enum';
//#endregion

export const LifecycleEventTypeConfig = {
  name: "lifecycleEventType",
  members: LifecycleEventType
} as EnumTypeConfig<LifecycleEventType>;