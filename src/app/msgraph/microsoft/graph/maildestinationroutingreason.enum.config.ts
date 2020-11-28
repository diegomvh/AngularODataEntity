import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
//#endregion

export const MailDestinationRoutingReasonConfig = {
  name: "mailDestinationRoutingReason",
  members: MailDestinationRoutingReason
} as EnumTypeConfig<MailDestinationRoutingReason>;