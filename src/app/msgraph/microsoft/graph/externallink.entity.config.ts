import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
import { ExternalLinkModel } from './externallink.model';
import { ExternalLinkCollection } from './externallink.collection';
//#endregion

export const ExternalLinkConfig = {
  name: "externalLink",
  model: ExternalLinkModel,
  collection: ExternalLinkCollection,
  annotations: [],
  fields: {
    href: {type: 'Edm.String'}
  }
} as EntityConfig<ExternalLink>;