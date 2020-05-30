import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Person } from './person.entity';
//#endregion

export const PersonConfig = {
  name: "Person",
  annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]},{"type":"Org.OData.Core.V1.Computed","bool":true}],
  fields: {
    UserName: {type: 'string', key: true, ref: 'UserName', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    FirstName: {type: 'string', nullable: false},
    LastName: {type: 'string', nullable: false},
    Emails: {type: 'string', collection: true},
    AddressInfo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Location', collection: true},
    Gender: {type: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender'},
    Concurrency: {type: 'number', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Computed","bool":true}]},
    Friends: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', collection: true, navigation: true},
    Trips: {type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', collection: true, navigation: true},
    Photo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', navigation: true}
  }
} as EntityConfig<Person>;