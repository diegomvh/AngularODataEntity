import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { NotebookLinks } from './notebooklinks.entity';
import { OnenoteSection } from './onenotesection.entity';
import { SectionGroup } from './sectiongroup.entity';
//#endregion

export interface Notebook extends OnenoteEntityHierarchyModel {
  //#region ODataApi Properties
  isDefault?: boolean;
  userRole?: OnenoteUserRole;
  isShared?: boolean;
  sectionsUrl?: string;
  sectionGroupsUrl?: string;
  links?: NotebookLinks;
  sections?: OnenoteSection[];
  sectionGroups?: SectionGroup[];
  //#endregion
}