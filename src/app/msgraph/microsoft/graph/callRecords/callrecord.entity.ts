import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from '../entity.entity';
import { CallType } from './calltype.enum';
import { Modality } from './modality.enum';
import { IdentitySet } from '../identityset.entity';
import { Session } from './session.entity';
//#endregion

export interface CallRecord extends Entity {
  //#region ODataApi Properties
  version: number;
  type: CallType;
  modalities: Modality;
  lastModifiedDateTime: Date;
  startDateTime: Date;
  endDateTime: Date;
  organizer?: IdentitySet;
  participants?: IdentitySet[];
  joinWebUrl?: string;
  sessions?: Session[];
  //#endregion
}