import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DelegateMeetingMessageDeliveryOptions } from './delegatemeetingmessagedeliveryoptions.enum';
//#endregion

export const DelegateMeetingMessageDeliveryOptionsConfig = {
  name: "delegateMeetingMessageDeliveryOptions",
  members: DelegateMeetingMessageDeliveryOptions
} as EnumTypeConfig<DelegateMeetingMessageDeliveryOptions>;