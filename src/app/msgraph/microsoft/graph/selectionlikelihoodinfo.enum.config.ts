import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SelectionLikelihoodInfo } from './selectionlikelihoodinfo.enum';
//#endregion

export const SelectionLikelihoodInfoConfig = {
  name: "selectionLikelihoodInfo",
  members: SelectionLikelihoodInfo
} as EnumConfig<SelectionLikelihoodInfo>;