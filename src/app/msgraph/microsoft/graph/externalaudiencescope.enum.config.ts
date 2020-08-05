import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExternalAudienceScope } from './externalaudiencescope.enum';
//#endregion

export const ExternalAudienceScopeConfig = {
  name: "ExternalAudienceScope",
  members: ExternalAudienceScope
} as EnumConfig<ExternalAudienceScope>;