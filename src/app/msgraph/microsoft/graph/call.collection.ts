import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { CallDirection } from './calldirection.enum';
import { CallState } from './callstate.enum';
import { Modality } from './modality.enum';
import { RecordingStatus } from './recordingstatus.enum';
import { RejectReason } from './rejectreason.enum';
import { ScreenSharingRole } from './screensharingrole.enum';
import { MediaConfig } from './mediaconfig.complex';
import { CallMediaState } from './callmediastate.complex';
import { CallOptions } from './calloptions.complex';
import { CallRoute } from './callroute.complex';
import { CallTranscriptionInfo } from './calltranscriptioninfo.complex';
import { ChatInfo } from './chatinfo.complex';
import { IncomingContext } from './incomingcontext.complex';
import { InvitationParticipantInfo } from './invitationparticipantinfo.complex';
import { Prompt } from './prompt.complex';
import { MeetingInfo } from './meetinginfo.complex';
import { ParticipantInfo } from './participantinfo.complex';
import { ResultInfo } from './resultinfo.complex';
import { TeleconferenceDeviceQuality } from './teleconferencedevicequality.complex';
import { ToneInfo } from './toneinfo.complex';
import { Call } from './call.entity';
import { CommsOperation } from './commsoperation.entity';
import { Participant } from './participant.entity';
import { CancelMediaProcessingOperation } from './cancelmediaprocessingoperation.entity';
import { MuteParticipantOperation } from './muteparticipantoperation.entity';
import { PlayPromptOperation } from './playpromptoperation.entity';
import { RecordOperation } from './recordoperation.entity';
import { SubscribeToToneOperation } from './subscribetotoneoperation.entity';
import { UnmuteParticipantOperation } from './unmuteparticipantoperation.entity';
import { UpdateRecordingStatusOperation } from './updaterecordingstatusoperation.entity';
import { MediaConfigModel } from './mediaconfig.model';
import { CallMediaStateModel } from './callmediastate.model';
import { CallOptionsModel } from './calloptions.model';
import { CallRouteModel } from './callroute.model';
import { CallTranscriptionInfoModel } from './calltranscriptioninfo.model';
import { ChatInfoModel } from './chatinfo.model';
import { IncomingContextModel } from './incomingcontext.model';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { PromptModel } from './prompt.model';
import { MeetingInfoModel } from './meetinginfo.model';
import { ParticipantInfoModel } from './participantinfo.model';
import { ResultInfoModel } from './resultinfo.model';
import { TeleconferenceDeviceQualityModel } from './teleconferencedevicequality.model';
import { ToneInfoModel } from './toneinfo.model';
import { CallModel } from './call.model';
import { CommsOperationModel } from './commsoperation.model';
import { ParticipantModel } from './participant.model';
import { CancelMediaProcessingOperationModel } from './cancelmediaprocessingoperation.model';
import { MuteParticipantOperationModel } from './muteparticipantoperation.model';
import { PlayPromptOperationModel } from './playpromptoperation.model';
import { RecordOperationModel } from './recordoperation.model';
import { SubscribeToToneOperationModel } from './subscribetotoneoperation.model';
import { UnmuteParticipantOperationModel } from './unmuteparticipantoperation.model';
import { UpdateRecordingStatusOperationModel } from './updaterecordingstatusoperation.model';
import { MediaConfigCollection } from './mediaconfig.collection';
import { CallMediaStateCollection } from './callmediastate.collection';
import { CallOptionsCollection } from './calloptions.collection';
import { CallRouteCollection } from './callroute.collection';
import { CallTranscriptionInfoCollection } from './calltranscriptioninfo.collection';
import { ChatInfoCollection } from './chatinfo.collection';
import { IncomingContextCollection } from './incomingcontext.collection';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
import { PromptCollection } from './prompt.collection';
import { MeetingInfoCollection } from './meetinginfo.collection';
import { ParticipantInfoCollection } from './participantinfo.collection';
import { ResultInfoCollection } from './resultinfo.collection';
import { TeleconferenceDeviceQualityCollection } from './teleconferencedevicequality.collection';
import { ToneInfoCollection } from './toneinfo.collection';
import { CommsOperationCollection } from './commsoperation.collection';
import { ParticipantCollection } from './participant.collection';
import { CancelMediaProcessingOperationCollection } from './cancelmediaprocessingoperation.collection';
import { MuteParticipantOperationCollection } from './muteparticipantoperation.collection';
import { PlayPromptOperationCollection } from './playpromptoperation.collection';
import { RecordOperationCollection } from './recordoperation.collection';
import { SubscribeToToneOperationCollection } from './subscribetotoneoperation.collection';
import { UnmuteParticipantOperationCollection } from './unmuteparticipantoperation.collection';
import { UpdateRecordingStatusOperationCollection } from './updaterecordingstatusoperation.collection';
//#endregion

export class CallCollection<E extends Call, M extends CallModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  public logTeleconferenceDeviceQuality(quality: TeleconferenceDeviceQuality, options?: HttpOptions): Observable<any> {
    var res = this._action<{quality: TeleconferenceDeviceQuality}, any>('microsoft.graph.logTeleconferenceDeviceQuality');
    res.segment.entitySet('');
    return res.call({quality}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
}