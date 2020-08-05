import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TelecomExpenseManagementPartner } from './telecomexpensemanagementpartner.entity';
//#endregion

export const TelecomExpenseManagementPartnerConfig = {
  name: "TelecomExpenseManagementPartner",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    url: {type: 'Edm.String'},
    appAuthorized: {type: 'Edm.Boolean', nullable: false},
    enabled: {type: 'Edm.Boolean', nullable: false},
    lastConnectionDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<TelecomExpenseManagementPartner>;