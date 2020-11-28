import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { CallDirection } from './calldirection.enum';
import { CallState } from './callstate.enum';
import { Modality } from './modality.enum';
import { MediaConfig } from './mediaconfig.entity';
import { CallMediaState } from './callmediastate.entity';
import { CallOptions } from './calloptions.entity';
import { CallRoute } from './callroute.entity';
import { CallTranscriptionInfo } from './calltranscriptioninfo.entity';
import { ChatInfo } from './chatinfo.entity';
import { IncomingContext } from './incomingcontext.entity';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { MeetingInfo } from './meetinginfo.entity';
import { ParticipantInfo } from './participantinfo.entity';
import { ResultInfo } from './resultinfo.entity';
import { ToneInfo } from './toneinfo.entity';
import { CommsOperation } from './commsoperation.entity';
import { Participant } from './participant.entity';
import { MediaConfigModel } from './mediaconfig.model';
import { CallMediaStateModel } from './callmediastate.model';
import { CallOptionsModel } from './calloptions.model';
import { CallRouteModel } from './callroute.model';
import { CallTranscriptionInfoModel } from './calltranscriptioninfo.model';
import { ChatInfoModel } from './chatinfo.model';
import { IncomingContextModel } from './incomingcontext.model';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { MeetingInfoModel } from './meetinginfo.model';
import { ParticipantInfoModel } from './participantinfo.model';
import { ResultInfoModel } from './resultinfo.model';
import { ToneInfoModel } from './toneinfo.model';
import { EntityModel } from './entity.model';
import { CommsOperationModel } from './commsoperation.model';
import { ParticipantModel } from './participant.model';
import { MediaConfigCollection } from './mediaconfig.collection';
import { CallMediaStateCollection } from './callmediastate.collection';
import { CallOptionsCollection } from './calloptions.collection';
import { CallRouteCollection } from './callroute.collection';
import { CallTranscriptionInfoCollection } from './calltranscriptioninfo.collection';
import { ChatInfoCollection } from './chatinfo.collection';
import { IncomingContextCollection } from './incomingcontext.collection';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
import { MeetingInfoCollection } from './meetinginfo.collection';
import { ParticipantInfoCollection } from './participantinfo.collection';
import { ResultInfoCollection } from './resultinfo.collection';
import { ToneInfoCollection } from './toneinfo.collection';
import { EntityCollection } from './entity.collection';
import { CommsOperationCollection } from './commsoperation.collection';
import { ParticipantCollection } from './participant.collection';
//#endregion

export interface Call extends Entity {
  //#region ODataApi Properties
  callbackUri: string;
  callChainId?: string;
  callOptions?: CallOptions;
  callRoutes?: CallRoute[];
  chatInfo?: ChatInfo;
  direction?: CallDirection;
  incomingContext?: IncomingContext;
  mediaConfig?: MediaConfig;
  mediaState?: CallMediaState;
  meetingInfo?: MeetingInfo;
  myParticipantId?: string;
  requestedModalities?: Modality;
  resultInfo?: ResultInfo;
  source?: ParticipantInfo;
  state?: CallState;
  subject?: string;
  targets?: InvitationParticipantInfo[];
  tenantId?: string;
  toneInfo?: ToneInfo;
  transcription?: CallTranscriptionInfo;
  operations?: CommsOperation[];
  participants?: Participant[];
  //#endregion
}