import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFilterCriteria } from './workbookfiltercriteria.entity';
import { WorkbookFilterCriteriaModel } from './workbookfiltercriteria.model';
import { WorkbookFilterCriteriaCollection } from './workbookfiltercriteria.collection';
//#endregion

export const WorkbookFilterCriteriaConfig = {
  name: "workbookFilterCriteria",
  model: WorkbookFilterCriteriaModel,
  collection: WorkbookFilterCriteriaCollection,
  annotations: [],
  fields: {
    color: {type: 'Edm.String'},
    criterion1: {type: 'Edm.String'},
    criterion2: {type: 'Edm.String'},
    dynamicCriteria: {type: 'Edm.String', nullable: false},
    filterOn: {type: 'Edm.String', nullable: false},
    icon: {type: 'graph.workbookIcon'},
    operator: {type: 'Edm.String', nullable: false},
    values: {type: 'graph.Json'}
  }
} as EntityConfig<WorkbookFilterCriteria>;