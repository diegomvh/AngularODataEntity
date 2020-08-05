import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
//#endregion

export const MailDestinationRoutingReasonConfig = {
  name: "MailDestinationRoutingReason",
  members: MailDestinationRoutingReason
} as EnumConfig<MailDestinationRoutingReason>;