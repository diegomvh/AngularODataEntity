import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecordingStatus } from './recordingstatus.enum';
//#endregion

export const RecordingStatusConfig = {
  name: "recordingStatus",
  members: RecordingStatus
} as EnumTypeConfig<RecordingStatus>;