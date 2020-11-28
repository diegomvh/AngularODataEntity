import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from '../entity.entity';
import { CallType } from './calltype.enum';
import { Modality } from './modality.enum';
import { IdentitySet } from '../identityset.complex';
import { Session } from './session.entity';
import { IdentitySetModel } from '../identityset.model';
import { EntityModel } from '../entity.model';
import { SessionModel } from './session.model';
import { IdentitySetCollection } from '../identityset.collection';
import { EntityCollection } from '../entity.collection';
import { SessionCollection } from './session.collection';
//#endregion

export interface CallRecord extends Entity {
  //#region ODataApi Properties
  endDateTime: Date;
  joinWebUrl?: string;
  lastModifiedDateTime: Date;
  modalities: Modality;
  organizer?: IdentitySet;
  participants?: IdentitySet[];
  startDateTime: Date;
  type: CallType;
  version: number;
  sessions?: Session[];
  //#endregion
}