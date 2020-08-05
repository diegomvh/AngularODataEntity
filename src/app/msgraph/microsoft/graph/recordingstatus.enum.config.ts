import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecordingStatus } from './recordingstatus.enum';
//#endregion

export const RecordingStatusConfig = {
  name: "RecordingStatus",
  members: RecordingStatus
} as EnumConfig<RecordingStatus>;