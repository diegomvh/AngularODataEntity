import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { IdentitySet } from './identityset.entity';
import { NotebookLinks } from './notebooklinks.entity';
//#endregion

export interface CopyNotebookModel {
  //#region ODataApi Properties
  isDefault?: boolean;
  userRole?: OnenoteUserRole;
  isShared?: boolean;
  sectionsUrl?: string;
  sectionGroupsUrl?: string;
  links?: NotebookLinks;
  name?: string;
  createdBy?: string;
  createdByIdentity?: IdentitySet;
  lastModifiedBy?: string;
  lastModifiedByIdentity?: IdentitySet;
  lastModifiedTime?: Date;
  id?: string;
  self?: string;
  createdTime?: Date;
  //#endregion
}