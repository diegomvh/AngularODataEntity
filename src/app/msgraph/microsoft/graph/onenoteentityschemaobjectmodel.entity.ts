import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityBaseModel } from './onenoteentitybasemodel.entity';
//#endregion

export interface OnenoteEntitySchemaObjectModel extends OnenoteEntityBaseModel {
  //#region ODataApi Properties
  createdDateTime?: Date;
  //#endregion
}