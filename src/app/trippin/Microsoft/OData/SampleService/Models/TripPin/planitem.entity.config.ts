//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PlanItem } from './planitem.entity';
import { PlanItemModel } from './planitem.model';
import { PlanItemCollection } from './planitem.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const PlanItemEntityConfig = {
  name: "PlanItem",
  model: PlanItemModel,
  collection: PlanItemCollection,
  keys: [{name: 'PlanItemId'}],
  fields: {
    PlanItemId: {type: 'Edm.Int32', nullable: false, annotations: [{"term":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    ConfirmationCode: {type: 'Edm.String'},
    StartsAt: {type: 'Edm.DateTimeOffset'},
    EndsAt: {type: 'Edm.DateTimeOffset'},
    Duration: {type: 'Edm.Duration'}
  }
} as StructuredTypeConfig<PlanItem>;
//#endregion