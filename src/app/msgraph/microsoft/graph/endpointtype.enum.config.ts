import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { EndpointType } from './endpointtype.enum';
//#endregion

export const EndpointTypeConfig = {
  name: "EndpointType",
  members: EndpointType
} as EnumConfig<EndpointType>;