import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SelectionLikelihoodInfo } from './selectionlikelihoodinfo.enum';
//#endregion

export interface ScoredEmailAddress {
  //#region ODataApi Properties
  address?: string;
  relevanceScore?: number;
  selectionLikelihood?: SelectionLikelihoodInfo;
  itemId?: string;
  //#endregion
}