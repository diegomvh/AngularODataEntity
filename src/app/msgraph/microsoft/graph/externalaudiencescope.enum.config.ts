import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExternalAudienceScope } from './externalaudiencescope.enum';
//#endregion

export const ExternalAudienceScopeConfig = {
  name: "externalAudienceScope",
  members: ExternalAudienceScope
} as EnumConfig<ExternalAudienceScope>;