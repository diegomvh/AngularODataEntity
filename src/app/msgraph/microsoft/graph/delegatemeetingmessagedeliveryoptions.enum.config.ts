import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DelegateMeetingMessageDeliveryOptions } from './delegatemeetingmessagedeliveryoptions.enum';
//#endregion

export const DelegateMeetingMessageDeliveryOptionsConfig = {
  name: "DelegateMeetingMessageDeliveryOptions",
  members: DelegateMeetingMessageDeliveryOptions
} as EnumConfig<DelegateMeetingMessageDeliveryOptions>;