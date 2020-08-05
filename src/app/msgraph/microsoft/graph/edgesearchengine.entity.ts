import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineBase } from './edgesearchenginebase.entity';
import { EdgeSearchEngineType } from './edgesearchenginetype.enum';
//#endregion

export interface EdgeSearchEngine extends EdgeSearchEngineBase {
  //#region ODataApi Properties
  edgeSearchEngineType: EdgeSearchEngineType;
  //#endregion
}