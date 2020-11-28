import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { SearchHitsContainer } from './searchhitscontainer.complex';
import { SearchHitsContainerModel } from './searchhitscontainer.model';
import { SearchHitsContainerCollection } from './searchhitscontainer.collection';
//#endregion

export interface SearchResponse {
  //#region ODataApi Properties
  hitsContainers?: SearchHitsContainer[];
  searchTerms?: string[];
  //#endregion
}