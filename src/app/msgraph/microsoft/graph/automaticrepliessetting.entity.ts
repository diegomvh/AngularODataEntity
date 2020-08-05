import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticRepliesStatus } from './automaticrepliesstatus.enum';
import { ExternalAudienceScope } from './externalaudiencescope.enum';
import { DateTimeTimeZone } from './datetimetimezone.entity';
//#endregion

export interface AutomaticRepliesSetting {
  //#region ODataApi Properties
  status?: AutomaticRepliesStatus;
  externalAudience?: ExternalAudienceScope;
  scheduledStartDateTime?: DateTimeTimeZone;
  scheduledEndDateTime?: DateTimeTimeZone;
  internalReplyMessage?: string;
  externalReplyMessage?: string;
  //#endregion
}