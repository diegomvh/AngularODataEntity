import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { CallDirection } from './calldirection.enum';
import { CallState } from './callstate.enum';
import { Modality } from './modality.enum';
import { RecordingStatus } from './recordingstatus.enum';
import { RejectReason } from './rejectreason.enum';
import { ScreenSharingRole } from './screensharingrole.enum';
import { MediaConfig } from './mediaconfig.entity';
import { CallMediaState } from './callmediastate.entity';
import { CallOptions } from './calloptions.entity';
import { CallRoute } from './callroute.entity';
import { CallTranscriptionInfo } from './calltranscriptioninfo.entity';
import { ChatInfo } from './chatinfo.entity';
import { IncomingContext } from './incomingcontext.entity';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { Prompt } from './prompt.entity';
import { MeetingInfo } from './meetinginfo.entity';
import { ParticipantInfo } from './participantinfo.entity';
import { ResultInfo } from './resultinfo.entity';
import { TeleconferenceDeviceQuality } from './teleconferencedevicequality.entity';
import { ToneInfo } from './toneinfo.entity';
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
import { CallCollection } from './call.collection';
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

export class CallModel<E extends Call> extends EntityModel<E> {
  //#region ODataApi Properties
  callbackUri: string;
  callChainId?: string;
  callOptions?: CallOptionsModel<CallOptions>;
  callRoutes?: CallRouteCollection<CallRoute, CallRouteModel<CallRoute>>;
  chatInfo?: ChatInfoModel<ChatInfo>;
  direction?: CallDirection;
  incomingContext?: IncomingContextModel<IncomingContext>;
  mediaConfig?: MediaConfigModel<MediaConfig>;
  mediaState?: CallMediaStateModel<CallMediaState>;
  meetingInfo?: MeetingInfoModel<MeetingInfo>;
  myParticipantId?: string;
  requestedModalities?: Modality;
  resultInfo?: ResultInfoModel<ResultInfo>;
  source?: ParticipantInfoModel<ParticipantInfo>;
  state?: CallState;
  subject?: string;
  targets?: InvitationParticipantInfoCollection<InvitationParticipantInfo, InvitationParticipantInfoModel<InvitationParticipantInfo>>;
  tenantId?: string;
  toneInfo?: ToneInfoModel<ToneInfo>;
  transcription?: CallTranscriptionInfoModel<CallTranscriptionInfo>;
  operations?: CommsOperationCollection<CommsOperation, CommsOperationModel<CommsOperation>>;
  participants?: ParticipantCollection<Participant, ParticipantModel<Participant>>;
  //#endregion
  //#region ODataApi Actions
  public answer(callbackUri: string, mediaConfig: MediaConfig, acceptedModalities: Modality[], options?: HttpOptions): Observable<any> {
    var res = this._action<{callbackUri: string, mediaConfig: MediaConfig, acceptedModalities: Modality[]}, any>('microsoft.graph.answer');
    res.segment.entitySet('');
    return res.call({callbackUri, mediaConfig, acceptedModalities}, 'property', options) as Observable<any>;
  }
  public cancelMediaProcessing(clientContext: string, options?: HttpOptions): Observable<CancelMediaProcessingOperationModel<CancelMediaProcessingOperation>> {
    var res = this._action<{clientContext: string}, CancelMediaProcessingOperation>('microsoft.graph.cancelMediaProcessing');
    res.segment.entitySet('');
    return res.call({clientContext}, 'model', options) as Observable<CancelMediaProcessingOperationModel<CancelMediaProcessingOperation>>;
  }
  public changeScreenSharingRole(role: ScreenSharingRole, options?: HttpOptions): Observable<any> {
    var res = this._action<{role: ScreenSharingRole}, any>('microsoft.graph.changeScreenSharingRole');
    res.segment.entitySet('');
    return res.call({role}, 'property', options) as Observable<any>;
  }
  public keepAlive(options?: HttpOptions): Observable<any> {
    var res = this._action<null, any>('microsoft.graph.keepAlive');
    res.segment.entitySet('');
    return res.call(null, 'property', options) as Observable<any>;
  }
  public mute(clientContext: string, options?: HttpOptions): Observable<MuteParticipantOperationModel<MuteParticipantOperation>> {
    var res = this._action<{clientContext: string}, MuteParticipantOperation>('microsoft.graph.mute');
    res.segment.entitySet('');
    return res.call({clientContext}, 'model', options) as Observable<MuteParticipantOperationModel<MuteParticipantOperation>>;
  }
  public playPrompt(prompts: Prompt[], clientContext: string, options?: HttpOptions): Observable<PlayPromptOperationModel<PlayPromptOperation>> {
    var res = this._action<{prompts: Prompt[], clientContext: string}, PlayPromptOperation>('microsoft.graph.playPrompt');
    res.segment.entitySet('');
    return res.call({prompts, clientContext}, 'model', options) as Observable<PlayPromptOperationModel<PlayPromptOperation>>;
  }
  public recordResponse(prompts: Prompt[], bargeInAllowed: boolean, initialSilenceTimeoutInSeconds: number, maxSilenceTimeoutInSeconds: number, maxRecordDurationInSeconds: number, playBeep: boolean, stopTones: string[], clientContext: string, options?: HttpOptions): Observable<RecordOperationModel<RecordOperation>> {
    var res = this._action<{prompts: Prompt[], bargeInAllowed: boolean, initialSilenceTimeoutInSeconds: number, maxSilenceTimeoutInSeconds: number, maxRecordDurationInSeconds: number, playBeep: boolean, stopTones: string[], clientContext: string}, RecordOperation>('microsoft.graph.recordResponse');
    res.segment.entitySet('');
    return res.call({prompts, bargeInAllowed, initialSilenceTimeoutInSeconds, maxSilenceTimeoutInSeconds, maxRecordDurationInSeconds, playBeep, stopTones, clientContext}, 'model', options) as Observable<RecordOperationModel<RecordOperation>>;
  }
  public redirect(targets: InvitationParticipantInfo[], timeout: number, callbackUri: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{targets: InvitationParticipantInfo[], timeout: number, callbackUri: string}, any>('microsoft.graph.redirect');
    res.segment.entitySet('');
    return res.call({targets, timeout, callbackUri}, 'property', options) as Observable<any>;
  }
  public reject(reason: RejectReason, callbackUri: string, options?: HttpOptions): Observable<any> {
    var res = this._action<{reason: RejectReason, callbackUri: string}, any>('microsoft.graph.reject');
    res.segment.entitySet('');
    return res.call({reason, callbackUri}, 'property', options) as Observable<any>;
  }
  public subscribeToTone(clientContext: string, options?: HttpOptions): Observable<SubscribeToToneOperationModel<SubscribeToToneOperation>> {
    var res = this._action<{clientContext: string}, SubscribeToToneOperation>('microsoft.graph.subscribeToTone');
    res.segment.entitySet('');
    return res.call({clientContext}, 'model', options) as Observable<SubscribeToToneOperationModel<SubscribeToToneOperation>>;
  }
  public transfer(transferTarget: InvitationParticipantInfo, options?: HttpOptions): Observable<any> {
    var res = this._action<{transferTarget: InvitationParticipantInfo}, any>('microsoft.graph.transfer');
    res.segment.entitySet('');
    return res.call({transferTarget}, 'property', options) as Observable<any>;
  }
  public unmute(clientContext: string, options?: HttpOptions): Observable<UnmuteParticipantOperationModel<UnmuteParticipantOperation>> {
    var res = this._action<{clientContext: string}, UnmuteParticipantOperation>('microsoft.graph.unmute');
    res.segment.entitySet('');
    return res.call({clientContext}, 'model', options) as Observable<UnmuteParticipantOperationModel<UnmuteParticipantOperation>>;
  }
  public updateRecordingStatus(status: RecordingStatus, clientContext: string, options?: HttpOptions): Observable<UpdateRecordingStatusOperationModel<UpdateRecordingStatusOperation>> {
    var res = this._action<{status: RecordingStatus, clientContext: string}, UpdateRecordingStatusOperation>('microsoft.graph.updateRecordingStatus');
    res.segment.entitySet('');
    return res.call({status, clientContext}, 'model', options) as Observable<UpdateRecordingStatusOperationModel<UpdateRecordingStatusOperation>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}