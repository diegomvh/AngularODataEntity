import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SelectionLikelihoodInfo } from './selectionlikelihoodinfo.enum';
//#endregion

export interface ScoredEmailAddress {
  //#region ODataApi Properties
  address?: string;
  itemId?: string;
  relevanceScore?: number;
  selectionLikelihood?: SelectionLikelihoodInfo;
  //#endregion
}