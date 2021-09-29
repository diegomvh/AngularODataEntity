//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PersonEntityConfig = {
  name: "Person",
  open: true,
  model: PersonModel,
  collection: PersonCollection,
  keys: [{name: 'UserName'}],
  fields: {
    UserName: {type: 'Edm.String', nullable: false, annotations: [{"term":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    FirstName: {type: 'Edm.String', nullable: false},
    LastName: {type: 'Edm.String', nullable: false},
    Emails: {type: 'Edm.String', collection: true},
    AddressInfo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Location', collection: true},
    Gender: {type: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender'},
    Concurrency: {type: 'Edm.Int64', nullable: false, annotations: [{"term":"Org.OData.Core.V1.Computed","bool":true}]},
    Friends: {type: 'Microsoft.OData.SampleService.Models.TripPin.Person', collection: true, navigation: true},
    Trips: {type: 'Microsoft.OData.SampleService.Models.TripPin.Trip', collection: true, navigation: true},
    Photo: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', navigation: true}
  }
} as StructuredTypeConfig<Person>;
//#endregion