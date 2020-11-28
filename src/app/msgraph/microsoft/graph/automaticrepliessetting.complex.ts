import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticRepliesStatus } from './automaticrepliesstatus.enum';
import { ExternalAudienceScope } from './externalaudiencescope.enum';
import { DateTimeTimeZone } from './datetimetimezone.complex';
import { DateTimeTimeZoneModel } from './datetimetimezone.model';
import { DateTimeTimeZoneCollection } from './datetimetimezone.collection';
//#endregion

export interface AutomaticRepliesSetting {
  //#region ODataApi Properties
  externalAudience?: ExternalAudienceScope;
  externalReplyMessage?: string;
  internalReplyMessage?: string;
  scheduledEndDateTime?: DateTimeTimeZone;
  scheduledStartDateTime?: DateTimeTimeZone;
  status?: AutomaticRepliesStatus;
  //#endregion
}