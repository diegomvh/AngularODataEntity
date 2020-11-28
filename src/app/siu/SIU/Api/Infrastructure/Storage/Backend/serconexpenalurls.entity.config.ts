import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SerconexPenalUrls } from './serconexpenalurls.entity';
import { SerconexPenalUrlsModel } from './serconexpenalurls.model';
import { SerconexPenalUrlsCollection } from './serconexpenalurls.collection';
//#endregion

export const SerconexPenalUrlsConfig = {
  name: "SerconexPenalUrls",
  base: "SIU.Api.Infrastructure.Storage.Backend.SourceUrls",
  model: SerconexPenalUrlsModel,
  collection: SerconexPenalUrlsCollection,
  annotations: [],
  fields: {
    embedded: {type: 'Edm.String'},
    share: {type: 'Edm.String'},
    pdf: {type: 'Edm.String'},
    html: {type: 'Edm.String'}
  }
} as EntityConfig<SerconexPenalUrls>;