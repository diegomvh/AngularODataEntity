import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { Notebook } from './notebook.entity';
import { OnenoteSection } from './onenotesection.entity';
import { OnenoteEntityHierarchyModelModel } from './onenoteentityhierarchymodel.model';
import { NotebookModel } from './notebook.model';
import { SectionGroupModel } from './sectiongroup.model';
import { OnenoteSectionModel } from './onenotesection.model';
import { OnenoteEntityHierarchyModelCollection } from './onenoteentityhierarchymodel.collection';
import { NotebookCollection } from './notebook.collection';
import { SectionGroupCollection } from './sectiongroup.collection';
import { OnenoteSectionCollection } from './onenotesection.collection';
//#endregion

export interface SectionGroup extends OnenoteEntityHierarchyModel {
  //#region ODataApi Properties
  sectionGroupsUrl?: string;
  sectionsUrl?: string;
  parentNotebook?: Notebook;
  parentSectionGroup?: SectionGroup;
  sectionGroups?: SectionGroup[];
  sections?: OnenoteSection[];
  //#endregion
}