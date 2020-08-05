import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Phone } from './phone.entity';
//#endregion

export interface OnlineMeetingInfo {
  //#region ODataApi Properties
  joinUrl?: string;
  conferenceId?: string;
  tollNumber?: string;
  tollFreeNumbers?: string[];
  quickDial?: string;
  phones?: Phone[];
  //#endregion
}