import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SwapShiftsChangeRequest } from './swapshiftschangerequest.entity';
import { SwapShiftsChangeRequestModel } from './swapshiftschangerequest.model';
import { SwapShiftsChangeRequestCollection } from './swapshiftschangerequest.collection';
//#endregion

export const SwapShiftsChangeRequestConfig = {
  name: "swapShiftsChangeRequest",
  base: "microsoft.graph.offerShiftRequest",
  model: SwapShiftsChangeRequestModel,
  collection: SwapShiftsChangeRequestCollection,
  annotations: [],
  fields: {
    recipientShiftId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SwapShiftsChangeRequest>;