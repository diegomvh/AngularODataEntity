import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { IdentitySet } from './identityset.entity';
//#endregion

export interface OnenoteEntityHierarchyModel extends OnenoteEntitySchemaObjectModel {
  //#region ODataApi Properties
  displayName?: string;
  createdBy?: IdentitySet;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  //#endregion
}