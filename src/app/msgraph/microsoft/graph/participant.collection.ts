import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { InvitationParticipantInfo } from './invitationparticipantinfo.entity';
import { MediaStream } from './mediastream.entity';
import { ParticipantInfo } from './participantinfo.entity';
import { RecordingInfo } from './recordinginfo.entity';
import { Participant } from './participant.entity';
import { InviteParticipantsOperation } from './inviteparticipantsoperation.entity';
import { MuteParticipantOperation } from './muteparticipantoperation.entity';
import { InvitationParticipantInfoModel } from './invitationparticipantinfo.model';
import { MediaStreamModel } from './mediastream.model';
import { ParticipantInfoModel } from './participantinfo.model';
import { RecordingInfoModel } from './recordinginfo.model';
import { ParticipantModel } from './participant.model';
import { InviteParticipantsOperationModel } from './inviteparticipantsoperation.model';
import { MuteParticipantOperationModel } from './muteparticipantoperation.model';
import { InvitationParticipantInfoCollection } from './invitationparticipantinfo.collection';
import { MediaStreamCollection } from './mediastream.collection';
import { ParticipantInfoCollection } from './participantinfo.collection';
import { RecordingInfoCollection } from './recordinginfo.collection';
import { InviteParticipantsOperationCollection } from './inviteparticipantsoperation.collection';
import { MuteParticipantOperationCollection } from './muteparticipantoperation.collection';
//#endregion

export class ParticipantCollection<E extends Participant, M extends ParticipantModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  public invite(participants: InvitationParticipantInfo[], clientContext: string, options?: HttpOptions): Observable<InviteParticipantsOperationModel<InviteParticipantsOperation>> {
    var res = this._action<{participants: InvitationParticipantInfo[], clientContext: string}, InviteParticipantsOperation>('microsoft.graph.invite');
    res.segment.entitySet('');
    return res.call({participants, clientContext}, 'model', options) as Observable<InviteParticipantsOperationModel<InviteParticipantsOperation>>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
}