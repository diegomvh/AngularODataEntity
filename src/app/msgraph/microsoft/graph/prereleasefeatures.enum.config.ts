import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PrereleaseFeatures } from './prereleasefeatures.enum';
//#endregion

export const PrereleaseFeaturesConfig = {
  name: "PrereleaseFeatures",
  members: PrereleaseFeatures
} as EnumConfig<PrereleaseFeatures>;