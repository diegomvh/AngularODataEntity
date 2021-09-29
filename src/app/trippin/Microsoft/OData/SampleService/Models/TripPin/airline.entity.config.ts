//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Airline } from './airline.entity';
import { AirlineModel } from './airline.model';
import { AirlineCollection } from './airline.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const AirlineEntityConfig = {
  name: "Airline",
  model: AirlineModel,
  collection: AirlineCollection,
  keys: [{name: 'AirlineCode'}],
  fields: {
    AirlineCode: {type: 'Edm.String', nullable: false, annotations: [{"term":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig<Airline>;
//#endregion