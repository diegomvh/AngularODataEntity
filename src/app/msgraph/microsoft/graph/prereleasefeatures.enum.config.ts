import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PrereleaseFeatures } from './prereleasefeatures.enum';
//#endregion

export const PrereleaseFeaturesConfig = {
  name: "prereleaseFeatures",
  members: PrereleaseFeatures
} as EnumConfig<PrereleaseFeatures>;