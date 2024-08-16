import { ODataClient, ODataEntitySetResource, ODataServiceFactory } from "angular-odata";
import { Airport } from "../../trip-pin";
import { Injector } from "@angular/core";

export default (injector: Injector) => {
    const client = injector.get(ODataClient);
    const factory = injector.get(ODataServiceFactory);

    // Use OData Service Factory
    let airportsService = factory.entitySet<Airport>('Airports');
    let airports = airportsService.entities();

    // Store airports resource
    var json = airports.toJson();
    // Load airports resource
    airports = client.fromJson(json) as ODataEntitySetResource<Airport>;

    // Fetch airports
    airports.fetch().subscribe(({ entities }) => {
      console.log('Airports: ', entities);
    });
  }
