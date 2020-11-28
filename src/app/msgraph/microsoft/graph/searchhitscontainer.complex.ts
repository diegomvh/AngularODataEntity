import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SearchHit } from './searchhit.complex';
import { SearchHitModel } from './searchhit.model';
import { SearchHitCollection } from './searchhit.collection';
//#endregion

export interface SearchHitsContainer {
  //#region ODataApi Properties
  hits?: SearchHit[];
  moreResultsAvailable?: boolean;
  total?: number;
  //#endregion
}