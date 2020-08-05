import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SectionLinks } from './sectionlinks.entity';
//#endregion

export const SectionLinksConfig = {
  name: "SectionLinks",
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<SectionLinks>;