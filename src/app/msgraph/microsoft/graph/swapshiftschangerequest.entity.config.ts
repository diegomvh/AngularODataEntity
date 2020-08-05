import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SwapShiftsChangeRequest } from './swapshiftschangerequest.entity';
//#endregion

export const SwapShiftsChangeRequestConfig = {
  name: "SwapShiftsChangeRequest",
  base: "microsoft.graph.offerShiftRequest",
  annotations: [],
  fields: {
    recipientShiftId: {type: 'Edm.String'}
  }
} as EntityConfig<SwapShiftsChangeRequest>;