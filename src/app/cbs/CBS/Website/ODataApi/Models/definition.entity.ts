import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DefinitionType } from './definitiontype.enum';
import { LinkList } from './linklist.entity';
//#endregion

export interface Definition {
  //#region ODataApi Properties
  UniqueId: string;
  Title?: string;
  DefinitionType: DefinitionType;
  Description?: string;
  LeadText?: string;
  Url?: string;
  MetaDescription?: string;
  TaxonomyTags?: string[];
  Themes?: string[];
  Series?: string[];
  Language?: string;
  Version: number;
  Updated: Date;
  Created: Date;
  Permalink?: string;
  References?: LinkList;
  Links?: LinkList;
  //#endregion
}