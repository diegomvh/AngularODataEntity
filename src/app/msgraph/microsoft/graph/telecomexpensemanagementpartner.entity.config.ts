import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TelecomExpenseManagementPartner } from './telecomexpensemanagementpartner.entity';
import { TelecomExpenseManagementPartnerModel } from './telecomexpensemanagementpartner.model';
import { TelecomExpenseManagementPartnerCollection } from './telecomexpensemanagementpartner.collection';
//#endregion

export const TelecomExpenseManagementPartnerConfig = {
  name: "telecomExpenseManagementPartner",
  base: "microsoft.graph.entity",
  model: TelecomExpenseManagementPartnerModel,
  collection: TelecomExpenseManagementPartnerCollection,
  annotations: [],
  fields: {
    appAuthorized: {type: 'Edm.Boolean', nullable: false},
    displayName: {type: 'Edm.String'},
    enabled: {type: 'Edm.Boolean', nullable: false},
    lastConnectionDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    url: {type: 'Edm.String'}
  }
} as EntityConfig<TelecomExpenseManagementPartner>;