import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { PeopleService } from './people.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PeopleConfig = {
  name: "People",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Person",
  service: PeopleService,
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Concurrency"
    ]
  },
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "People"
  },
  {
    "type": "Org.OData.Capabilities.V1.NavigationRestrictions"
  },
  {
    "type": "Org.OData.Capabilities.V1.SearchRestrictions",
    "values": [
      "",
      "Org.OData.Capabilities.V1.SearchExpressions/none"
    ]
  },
  {
    "type": "Org.OData.Capabilities.V1.InsertRestrictions",
    "values": [
      "",
      "TripsFriends"
    ]
  }
]
} as EntitySetConfig;
//#endregion