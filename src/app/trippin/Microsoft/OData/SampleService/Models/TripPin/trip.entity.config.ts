import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Trip } from './trip.entity';
//#endregion

export const TripConfig = {
  name: "Trip",
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]},{"type":"Org.OData.Measures.V1.ISOCurrency","string":"USD"},{"type":"Org.OData.Measures.V1.Scale","int":2}],
  fields: {
    TripId: {type: 'number', key: true, ref: 'TripId', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    ShareId: {type: 'string'},
    Description: {type: 'string'},
    Name: {type: 'string', nullable: false},
    Budget: {type: 'number', nullable: false, annotations: [{"type":"Org.OData.Measures.V1.ISOCurrency","string":"USD"},{"type":"Org.OData.Measures.V1.Scale","int":2}]},
    StartsAt: {type: 'Date', nullable: false},
    EndsAt: {type: 'Date', nullable: false},
    Tags: {type: 'string', nullable: false, collection: true},
    Photos: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', collection: true, navigation: true},
    PlanItems: {type: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem', collection: true, navigation: true}
  }
} as EntityConfig<Trip>;