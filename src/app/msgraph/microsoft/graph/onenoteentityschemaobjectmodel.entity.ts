import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityBaseModel } from './onenoteentitybasemodel.entity';
import { OnenoteEntityBaseModelModel } from './onenoteentitybasemodel.model';
import { OnenoteEntityBaseModelCollection } from './onenoteentitybasemodel.collection';
//#endregion

export interface OnenoteEntitySchemaObjectModel extends OnenoteEntityBaseModel {
  //#region ODataApi Properties
  createdDateTime?: Date;
  //#endregion
}