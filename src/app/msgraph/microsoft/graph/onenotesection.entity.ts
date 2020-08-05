import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntityHierarchyModel } from './onenoteentityhierarchymodel.entity';
import { SectionLinks } from './sectionlinks.entity';
import { Notebook } from './notebook.entity';
import { SectionGroup } from './sectiongroup.entity';
import { OnenotePage } from './onenotepage.entity';
//#endregion

export interface OnenoteSection extends OnenoteEntityHierarchyModel {
  //#region ODataApi Properties
  isDefault?: boolean;
  links?: SectionLinks;
  pagesUrl?: string;
  parentNotebook?: Notebook;
  parentSectionGroup?: SectionGroup;
  pages?: OnenotePage[];
  //#endregion
}