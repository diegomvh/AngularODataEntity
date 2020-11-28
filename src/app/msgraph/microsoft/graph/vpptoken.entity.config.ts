import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppToken } from './vpptoken.entity';
import { VppTokenModel } from './vpptoken.model';
import { VppTokenCollection } from './vpptoken.collection';
//#endregion

export const VppTokenConfig = {
  name: "vppToken",
  base: "microsoft.graph.entity",
  model: VppTokenModel,
  collection: VppTokenCollection,
  annotations: [],
  fields: {
    appleId: {type: 'Edm.String'},
    automaticallyUpdateApps: {type: 'Edm.Boolean', nullable: false},
    countryOrRegion: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastSyncStatus: {type: 'graph.vppTokenSyncStatus', nullable: false},
    organizationName: {type: 'Edm.String'},
    state: {type: 'graph.vppTokenState', nullable: false},
    token: {type: 'Edm.String'},
    vppTokenAccountType: {type: 'graph.vppTokenAccountType', nullable: false}
  }
} as StructuredTypeConfig<VppToken>;