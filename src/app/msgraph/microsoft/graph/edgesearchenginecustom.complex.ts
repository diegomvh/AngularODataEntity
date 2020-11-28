import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { EdgeSearchEngineBase } from './edgesearchenginebase.complex';
import { EdgeSearchEngineBaseModel } from './edgesearchenginebase.model';
import { EdgeSearchEngineBaseCollection } from './edgesearchenginebase.collection';
//#endregion

export interface EdgeSearchEngineCustom extends EdgeSearchEngineBase {
  //#region ODataApi Properties
  edgeSearchEngineOpenSearchXmlUrl: string;
  //#endregion
}