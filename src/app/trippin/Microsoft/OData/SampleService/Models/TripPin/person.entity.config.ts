import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Person } from './person.entity';
//#endregion

export const PersonConfig = {
  name: "Person",
  open: true,
  annotations: [],
  fields: {
    userName: {name: 'UserName', type: 'Edm.String', key: true, ref: 'userName', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    firstName: {name: 'FirstName', type: 'Edm.String', nullable: false},
    lastName: {name: 'LastName', type: 'Edm.String', nullable: false},
    emails: {name: 'Emails', type: 'Edm.String', collection: true},
    addressInfo: {name: 'AddressInfo', type: 'Microsoft.OData.SampleService.Models.TripPin.Location', collection: true},
    gender: {name: 'Gender', type: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender'},
    concurrency: {name: 'Concurrency', type: 'Edm.Int64', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Computed","bool":true}]},
    friends: {name: 'Friends', type: 'Microsoft.OData.SampleService.Models.TripPin.Person', collection: true, navigation: true},
    trips: {name: 'Trips', type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', collection: true, navigation: true},
    photo: {name: 'Photo', type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', navigation: true}
  }
} as EntityConfig<Person>;