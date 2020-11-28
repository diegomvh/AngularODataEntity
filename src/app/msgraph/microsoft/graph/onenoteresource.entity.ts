import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityBaseModel } from './onenoteentitybasemodel.entity';
import { OnenoteEntityBaseModelModel } from './onenoteentitybasemodel.model';
import { OnenoteEntityBaseModelCollection } from './onenoteentitybasemodel.collection';
//#endregion

export interface OnenoteResource extends OnenoteEntityBaseModel {
  //#region ODataApi Properties
  content?: any;
  contentUrl?: string;
  //#endregion
}