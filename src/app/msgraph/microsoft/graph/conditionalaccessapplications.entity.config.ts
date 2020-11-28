import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessApplications } from './conditionalaccessapplications.entity';
import { ConditionalAccessApplicationsModel } from './conditionalaccessapplications.model';
import { ConditionalAccessApplicationsCollection } from './conditionalaccessapplications.collection';
//#endregion

export const ConditionalAccessApplicationsConfig = {
  name: "conditionalAccessApplications",
  model: ConditionalAccessApplicationsModel,
  collection: ConditionalAccessApplicationsCollection,
  annotations: [],
  fields: {
    excludeApplications: {type: 'Edm.String', nullable: false, collection: true},
    includeApplications: {type: 'Edm.String', nullable: false, collection: true},
    includeUserActions: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessApplications>;