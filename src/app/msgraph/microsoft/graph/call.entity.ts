import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CallDirection } from './calldirection.enum';
import { CallState } from './callstate.enum';
import { Modality } from './modality.enum';
import { CallMediaState } from './callmediastate.entity';
import { ResultInfo } from './resultinfo.entity';
import { CallRoute } from './callroute.entity';
import { ParticipantInfo } from './participantinfo.entity';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { MediaConfig } from './mediaconfig.entity';
import { ChatInfo } from './chatinfo.entity';
import { CallOptions } from './calloptions.entity';
import { MeetingInfo } from './meetinginfo.entity';
import { ToneInfo } from './toneinfo.entity';
import { IncomingContext } from './incomingcontext.entity';
import { Participant } from './participant.entity';
import { CommsOperation } from './commsoperation.entity';
//#endregion

export interface Call extends Entity {
  //#region ODataApi Properties
  state?: CallState;
  mediaState?: CallMediaState;
  resultInfo?: ResultInfo;
  direction?: CallDirection;
  subject?: string;
  callbackUri: string;
  callRoutes?: CallRoute[];
  source?: ParticipantInfo;
  targets?: InvitationParticipantInfo[];
  requestedModalities?: Modality;
  mediaConfig?: MediaConfig;
  chatInfo?: ChatInfo;
  callOptions?: CallOptions;
  meetingInfo?: MeetingInfo;
  tenantId?: string;
  myParticipantId?: string;
  toneInfo?: ToneInfo;
  callChainId?: string;
  incomingContext?: IncomingContext;
  participants?: Participant[];
  operations?: CommsOperation[];
  //#endregion
}