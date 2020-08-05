import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatCategory } from './threatcategory.enum';
//#endregion

export const ThreatCategoryConfig = {
  name: "ThreatCategory",
  members: ThreatCategory
} as EnumConfig<ThreatCategory>;