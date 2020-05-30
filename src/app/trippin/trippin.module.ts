import { NgModule } from '@angular/core';

//#region ODataApi Imports
import { PhotosService } from './Microsoft/OData/SampleService/Models/TripPin/photos.service';
import { PeopleService } from './Microsoft/OData/SampleService/Models/TripPin/people.service';
import { AirlinesService } from './Microsoft/OData/SampleService/Models/TripPin/airlines.service';
import { AirportsService } from './Microsoft/OData/SampleService/Models/TripPin/airports.service';
import { MeService } from './Microsoft/OData/SampleService/Models/TripPin/me.service';
import { TripPinApi } from './trippinapi.api';
//#endregion

@NgModule({
  providers: [
    TripPinApi,
    PhotosService,
    PeopleService,
    AirlinesService,
    AirportsService,
    MeService
  ]
})
export class TripPinModule { }