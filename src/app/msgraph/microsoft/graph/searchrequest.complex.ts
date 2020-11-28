import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EntityType } from './entitytype.enum';
import { SearchQuery } from './searchquery.complex';
import { SearchQueryModel } from './searchquery.model';
import { SearchQueryCollection } from './searchquery.collection';
//#endregion

export interface SearchRequest {
  //#region ODataApi Properties
  contentSources?: string[];
  enableTopResults?: boolean;
  entityTypes?: EntityType;
  fields?: string[];
  from: number;
  query: SearchQuery;
  size: number;
  //#endregion
}