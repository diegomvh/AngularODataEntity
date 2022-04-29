//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Trip } from './trip.entity';
import { TripModel } from './trip.model';
import { TripCollection } from './trip.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const TripEntityConfig = {
  name: 'Trip',
  model: TripModel,
  collection: TripCollection,
  keys: [{name: 'TripId'}],
  fields: {
    TripId: {type: 'Edm.Int32', nullable: false, annotations: [{"term":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    ShareId: {type: 'Edm.Guid'},
    Description: {type: 'Edm.String'},
    Name: {type: 'Edm.String', nullable: false},
    Budget: {type: 'Edm.Single', nullable: false, annotations: [{"term":"Org.OData.Measures.V1.ISOCurrency","string":"USD"},{"term":"Org.OData.Measures.V1.Scale","int":2}]},
    StartsAt: {type: 'Edm.DateTimeOffset', nullable: false},
    EndsAt: {type: 'Edm.DateTimeOffset', nullable: false},
    Tags: {type: 'Edm.String', nullable: false, collection: true},
    Photos: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', collection: true, navigation: true},
    PlanItems: {type: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Trip>;
//#endregion