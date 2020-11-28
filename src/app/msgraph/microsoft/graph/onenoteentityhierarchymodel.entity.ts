import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { OnenoteEntitySchemaObjectModelModel } from './onenoteentityschemaobjectmodel.model';
import { IdentitySetCollection } from './identityset.collection';
import { OnenoteEntitySchemaObjectModelCollection } from './onenoteentityschemaobjectmodel.collection';
//#endregion

export interface OnenoteEntityHierarchyModel extends OnenoteEntitySchemaObjectModel {
  //#region ODataApi Properties
  createdBy?: IdentitySet;
  displayName?: string;
  lastModifiedBy?: IdentitySet;
  lastModifiedDateTime?: Date;
  //#endregion
}