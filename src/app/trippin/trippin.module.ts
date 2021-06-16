//#region AngularOData Imports
import { 
  NgModule 
} from '@angular/core';//#endregion

//#region ODataApi Imports
import { DefaultContainerService } from './Microsoft/OData/SampleService/Models/TripPin/defaultcontainer.service';
import { PhotosService } from './Microsoft/OData/SampleService/Models/TripPin/photos.service';
import { PeopleService } from './Microsoft/OData/SampleService/Models/TripPin/people.service';
import { AirlinesService } from './Microsoft/OData/SampleService/Models/TripPin/airlines.service';
import { AirportsService } from './Microsoft/OData/SampleService/Models/TripPin/airports.service';
import { MeService } from './Microsoft/OData/SampleService/Models/TripPin/me.service';
//#endregion

@NgModule({
  providers: [
//#region ODataApi Providers
    DefaultContainerService,
    PhotosService,
    PeopleService,
    AirlinesService,
    AirportsService,
    MeService//#endregion
  ]
})
export class TripPinModule { }