import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineBase } from './edgesearchenginebase.complex';
import { EdgeSearchEngineType } from './edgesearchenginetype.enum';
import { EdgeSearchEngineBaseModel } from './edgesearchenginebase.model';
import { EdgeSearchEngineBaseCollection } from './edgesearchenginebase.collection';
//#endregion

export interface EdgeSearchEngine extends EdgeSearchEngineBase {
  //#region ODataApi Properties
  edgeSearchEngineType: EdgeSearchEngineType;
  //#endregion
}