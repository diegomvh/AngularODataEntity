import { FlightMeta } from './flight.meta';
import { PublicTransportation } from './publictransportation.entity';
import { AirlineMeta } from './airline.meta';
import { AirportMeta } from './airport.meta';
import { PublicTransportationMeta } from './publictransportation.meta';
import { Airline } from './airline.entity';
import { Airport } from './airport.entity';
import { AirlinesService } from './airlines.service';
import { AirportsService } from './airports.service';

export interface Flight extends PublicTransportation {
  FlightNumber: string;
  From?: Airport;
  To?: Airport;
  Airline?: Airline
}