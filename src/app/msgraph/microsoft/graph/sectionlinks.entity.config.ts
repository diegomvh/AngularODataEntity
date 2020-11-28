import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SectionLinks } from './sectionlinks.entity';
import { SectionLinksModel } from './sectionlinks.model';
import { SectionLinksCollection } from './sectionlinks.collection';
//#endregion

export const SectionLinksConfig = {
  name: "sectionLinks",
  model: SectionLinksModel,
  collection: SectionLinksCollection,
  annotations: [],
  fields: {
    oneNoteClientUrl: {type: 'graph.externalLink'},
    oneNoteWebUrl: {type: 'graph.externalLink'}
  }
} as EntityConfig<SectionLinks>;