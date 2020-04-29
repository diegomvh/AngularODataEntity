import { MetaEntity } from 'angular-odata';

import { Person } from './person.entity';

export const PersonMetaEntity = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Person",
  set: { 
    name: "People",
    annotations: [{"type":"Org.OData.Core.V1.OptimisticConcurrency"},{"type":"Org.OData.Core.V1.ResourcePath"},{"type":"Org.OData.Capabilities.V1.NavigationRestrictions"},{"type":"Org.OData.Capabilities.V1.SearchRestrictions"},{"type":"Org.OData.Capabilities.V1.InsertRestrictions"}],
  },
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
} as MetaEntity<Person>;