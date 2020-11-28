import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { OnenoteUserRole } from './onenoteuserrole.enum';
import { NotebookLinks } from './notebooklinks.complex';
import { SectionGroup } from './sectiongroup.entity';
import { OnenoteSection } from './onenotesection.entity';
import { NotebookLinksModel } from './notebooklinks.model';
import { OnenoteEntityHierarchyModelModel } from './onenoteentityhierarchymodel.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { NotebookLinksCollection } from './notebooklinks.collection';
import { OnenoteEntityHierarchyModelCollection } from './onenoteentityhierarchymodel.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
//#endregion

export interface Notebook extends OnenoteEntityHierarchyModel {
  //#region ODataApi Properties
  isDefault?: boolean;
  isShared?: boolean;
  links?: NotebookLinks;
  sectionGroupsUrl?: string;
  sectionsUrl?: string;
  userRole?: OnenoteUserRole;
  sectionGroups?: SectionGroup[];
  sections?: OnenoteSection[];
  //#endregion
}