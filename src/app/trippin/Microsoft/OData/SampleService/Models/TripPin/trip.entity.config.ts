import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Trip } from './trip.entity';
//#endregion

export const TripConfig = {
  name: "Trip",
  annotations: [],
  fields: {
    tripId: {name: 'TripId', type: 'Edm.Int32', key: true, ref: 'tripId', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    shareId: {name: 'ShareId', type: 'Edm.Guid'},
    description: {name: 'Description', type: 'Edm.String'},
    name: {name: 'Name', type: 'Edm.String', nullable: false},
    budget: {name: 'Budget', type: 'Edm.Single', nullable: false, annotations: [{"type":"Org.OData.Measures.V1.ISOCurrency","string":"USD"},{"type":"Org.OData.Measures.V1.Scale","int":2}]},
    startsAt: {name: 'StartsAt', type: 'Edm.DateTimeOffset', nullable: false},
    endsAt: {name: 'EndsAt', type: 'Edm.DateTimeOffset', nullable: false},
    tags: {name: 'Tags', type: 'Edm.String', nullable: false, collection: true},
    photos: {name: 'Photos', type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', collection: true, navigation: true},
    planItems: {name: 'PlanItems', type: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem', collection: true, navigation: true}
  }
} as EntityConfig<Trip>;