import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Phone } from './phone.complex';
import { PhoneModel } from './phone.model';
import { PhoneCollection } from './phone.collection';
//#endregion

export interface OnlineMeetingInfo {
  //#region ODataApi Properties
  conferenceId?: string;
  joinUrl?: string;
  phones?: Phone[];
  quickDial?: string;
  tollFreeNumbers?: string[];
  tollNumber?: string;
  //#endregion
}