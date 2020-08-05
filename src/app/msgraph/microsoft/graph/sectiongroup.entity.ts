import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { Notebook } from './notebook.entity';
import { OnenoteSection } from './onenotesection.entity';
//#endregion

export interface SectionGroup extends OnenoteEntityHierarchyModel {
  //#region ODataApi Properties
  sectionsUrl?: string;
  sectionGroupsUrl?: string;
  parentNotebook?: Notebook;
  parentSectionGroup?: SectionGroup;
  sections?: OnenoteSection[];
  sectionGroups?: SectionGroup[];
  //#endregion
}