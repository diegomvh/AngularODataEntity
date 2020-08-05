import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { VppToken } from './vpptoken.entity';
//#endregion

export const VppTokenConfig = {
  name: "vppToken",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    organizationName: {type: 'Edm.String'},
    vppTokenAccountType: {type: 'graph.vppTokenAccountType', nullable: false},
    appleId: {type: 'Edm.String'},
    expirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    token: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    state: {type: 'graph.vppTokenState', nullable: false},
    lastSyncStatus: {type: 'graph.vppTokenSyncStatus', nullable: false},
    automaticallyUpdateApps: {type: 'Edm.Boolean', nullable: false},
    countryOrRegion: {type: 'Edm.String'}
  }
} as EntityConfig<VppToken>;