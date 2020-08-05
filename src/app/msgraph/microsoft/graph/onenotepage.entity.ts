import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteEntitySchemaObjectModel } from './onenoteentityschemaobjectmodel.entity';
import { PageLinks } from './pagelinks.entity';
import { Notebook } from './notebook.entity';
import { OnenoteSection } from './onenotesection.entity';
//#endregion

export interface OnenotePage extends OnenoteEntitySchemaObjectModel {
  //#region ODataApi Properties
  title?: string;
  createdByAppId?: string;
  links?: PageLinks;
  contentUrl?: string;
  content?: any;
  lastModifiedDateTime?: Date;
  level?: number;
  order?: number;
  userTags?: string[];
  parentSection?: OnenoteSection;
  parentNotebook?: Notebook;
  //#endregion
}