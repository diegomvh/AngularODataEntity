//#region ODataApiGen ApiConfig
export const TripPinApi = {
  EnumTypes: {
    PersonGender: 'Microsoft.OData.SampleService.Models.TripPin.PersonGender'
  },
  ComplexTypes: {
    City: 'Microsoft.OData.SampleService.Models.TripPin.City',
    Location: 'Microsoft.OData.SampleService.Models.TripPin.Location',
    EventLocation: 'Microsoft.OData.SampleService.Models.TripPin.EventLocation',
    AirportLocation: 'Microsoft.OData.SampleService.Models.TripPin.AirportLocation'
  },
  EntityTypes: {
    Photo: 'Microsoft.OData.SampleService.Models.TripPin.Photo',
    Person: 'Microsoft.OData.SampleService.Models.TripPin.Person',
    Airline: 'Microsoft.OData.SampleService.Models.TripPin.Airline',
    Airport: 'Microsoft.OData.SampleService.Models.TripPin.Airport',
    PlanItem: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem',
    PublicTransportation: 'Microsoft.OData.SampleService.Models.TripPin.PublicTransportation',
    Flight: 'Microsoft.OData.SampleService.Models.TripPin.Flight',
    Event: 'Microsoft.OData.SampleService.Models.TripPin.Event',
    Trip: 'Microsoft.OData.SampleService.Models.TripPin.Trip'
  },
  EntitySets: {
    Photos: 'Microsoft.OData.SampleService.Models.TripPin.Photos',
    People: 'Microsoft.OData.SampleService.Models.TripPin.People',
    Airlines: 'Microsoft.OData.SampleService.Models.TripPin.Airlines',
    Airports: 'Microsoft.OData.SampleService.Models.TripPin.Airports'
  },
  Singletons: {
    Me: 'Microsoft.OData.SampleService.Models.TripPin.Me'
  },
  Functions: {
    GetFavoriteAirline: 'Microsoft.OData.SampleService.Models.TripPin.GetFavoriteAirline',
    GetInvolvedPeople: 'Microsoft.OData.SampleService.Models.TripPin.GetInvolvedPeople',
    GetFriendsTrips: 'Microsoft.OData.SampleService.Models.TripPin.GetFriendsTrips',
    GetNearestAirport: 'Microsoft.OData.SampleService.Models.TripPin.GetNearestAirport'
  },
  Actions: {
    ResetDataSource: 'Microsoft.OData.SampleService.Models.TripPin.ResetDataSource',
    ShareTrip: 'Microsoft.OData.SampleService.Models.TripPin.ShareTrip'
  }
};
//#endregion