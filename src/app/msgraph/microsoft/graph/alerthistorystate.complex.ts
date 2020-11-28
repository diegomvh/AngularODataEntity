import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AlertFeedback } from './alertfeedback.enum';
import { AlertStatus } from './alertstatus.enum';
//#endregion

export interface AlertHistoryState {
  //#region ODataApi Properties
  appId?: string;
  assignedTo?: string;
  comments?: string[];
  feedback?: AlertFeedback;
  status?: AlertStatus;
  updatedDateTime?: Date;
  user?: string;
  //#endregion
}