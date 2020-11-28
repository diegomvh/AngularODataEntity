import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { InvitationParticipantInfo } from './invitationparticipantinfo.complex';
import { MediaStream } from './mediastream.complex';
import { ParticipantInfo } from './participantinfo.complex';
import { RecordingInfo } from './recordinginfo.complex';
import { Participant } from './participant.entity';
import { InviteParticipantsOperation } from './inviteparticipantsoperation.entity';
import { MuteParticipantOperation } from './muteparticipantoperation.entity';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { MediaStreamModel } from './mediastream.model';
import { ParticipantInfoModel } from './participantinfo.model';
import { RecordingInfoModel } from './recordinginfo.model';
import { InviteParticipantsOperationModel } from './inviteparticipantsoperation.model';
import { MuteParticipantOperationModel } from './muteparticipantoperation.model';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
import { MediaStreamCollection } from './mediastream.collection';
import { ParticipantInfoCollection } from './participantinfo.collection';
import { RecordingInfoCollection } from './recordinginfo.collection';
import { ParticipantCollection } from './participant.collection';
import { InviteParticipantsOperationCollection } from './inviteparticipantsoperation.collection';
import { MuteParticipantOperationCollection } from './muteparticipantoperation.collection';
//#endregion

export class ParticipantModel<E extends Participant> extends EntityModel<E> {
  //#region ODataApi Properties
  info: ParticipantInfoModel<ParticipantInfo>;
  isInLobby: boolean;
  isMuted: boolean;
  mediaStreams?: MediaStreamCollection<MediaStream, MediaStreamModel<MediaStream>>;
  recordingInfo?: RecordingInfoModel<RecordingInfo>;
  //#endregion
  //#region ODataApi Actions
  public mute(clientContext: string, options?: HttpOptions): Observable<MuteParticipantOperationModel<MuteParticipantOperation>> {
    var res = this._action<{clientContext: string}, MuteParticipantOperation>('microsoft.graph.mute');
    res.segment.entitySet('');
    return res.call({clientContext}, 'model', options) as Observable<MuteParticipantOperationModel<MuteParticipantOperation>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}