import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessApplications } from './conditionalaccessapplications.entity';
//#endregion

export const ConditionalAccessApplicationsConfig = {
  name: "conditionalAccessApplications",
  annotations: [],
  fields: {
    includeApplications: {type: 'Edm.String', nullable: false, collection: true},
    excludeApplications: {type: 'Edm.String', nullable: false, collection: true},
    includeUserActions: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessApplications>;