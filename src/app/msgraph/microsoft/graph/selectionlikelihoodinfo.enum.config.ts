import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { SelectionLikelihoodInfo } from './selectionlikelihoodinfo.enum';
//#endregion

export const SelectionLikelihoodInfoConfig = {
  name: "SelectionLikelihoodInfo",
  members: SelectionLikelihoodInfo
} as EnumConfig<SelectionLikelihoodInfo>;