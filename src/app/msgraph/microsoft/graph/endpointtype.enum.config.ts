import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EndpointType } from './endpointtype.enum';
//#endregion

export const EndpointTypeConfig = {
  name: "endpointType",
  members: EndpointType
} as EnumConfig<EndpointType>;