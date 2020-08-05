import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineBase } from './edgesearchenginebase.entity';
//#endregion

export interface EdgeSearchEngineCustom extends EdgeSearchEngineBase {
  //#region ODataApi Properties
  edgeSearchEngineOpenSearchXmlUrl: string;
  //#endregion
}