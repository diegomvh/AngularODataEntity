import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PolicyBase } from './policybase.entity';
import { DirectoryObject } from './directoryobject.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { PolicyBaseModel } from './policybase.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { PolicyBaseCollection } from './policybase.collection';
//#endregion

export interface StsPolicy extends PolicyBase {
  //#region ODataApi Properties
  definition: string[];
  isOrganizationDefault?: boolean;
  appliesTo?: DirectoryObject[];
  //#endregion
}