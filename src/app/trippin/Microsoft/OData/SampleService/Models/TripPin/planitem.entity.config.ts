//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PlanItem } from './planitem.entity';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PlanItemEntityConfig = {
  name: 'PlanItem',
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