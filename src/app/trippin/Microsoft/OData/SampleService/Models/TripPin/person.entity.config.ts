import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Person } from './person.entity';
//#endregion

export const PersonConfig = {
  name: "Person",
  annotations: [],
  fields: {
    UserName: {type: 'String', key: true, ref: 'UserName', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    FirstName: {type: 'String', nullable: false},
    LastName: {type: 'String', nullable: false},
    Emails: {type: 'String', collection: true},
    AddressInfo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Location', collection: true},
    Gender: {type: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender'},
    Concurrency: {type: 'Number', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Computed","bool":true}]},
    Friends: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', collection: true, navigation: true},
    Trips: {type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', collection: true, navigation: true},
    Photo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', navigation: true}
  }
} as EntityConfig<Person>;