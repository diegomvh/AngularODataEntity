import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Trip } from './trip.entity';
//#endregion

export const TripConfig = {
  name: "Trip",
  annotations: [],
  fields: {
    TripId: {type: 'Number', key: true, ref: 'TripId', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    ShareId: {type: 'String'},
    Description: {type: 'String'},
    Name: {type: 'String', nullable: false},
    Budget: {type: 'Number', nullable: false, annotations: [{"type":"Org.OData.Measures.V1.ISOCurrency","string":"USD"},{"type":"Org.OData.Measures.V1.Scale","int":2}]},
    StartsAt: {type: 'Date', nullable: false},
    EndsAt: {type: 'Date', nullable: false},
    Tags: {type: 'String', nullable: false, collection: true},
    Photos: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', collection: true, navigation: true},
    PlanItems: {type: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem', collection: true, navigation: true}
  }
} as EntityConfig<Trip>;