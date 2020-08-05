import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { PolicyBase } from './policybase.entity';
import { DirectoryObject } from './directoryobject.entity';
//#endregion

export interface StsPolicy extends PolicyBase {
  //#region ODataApi Properties
  definition: string[];
  isOrganizationDefault?: boolean;
  appliesTo?: DirectoryObject[];
  //#endregion
}