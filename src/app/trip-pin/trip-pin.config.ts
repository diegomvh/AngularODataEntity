import { ApiConfig, EDM_PARSERS, ODataMetadata, ODataVersion } from 'angular-odata';
import * as json from './metadata.json';

export const TripPinConfig = ODataMetadata.fromJson(json).toConfig({
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/', 
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata', 
  name: 'TripPin',
  version: '4.0' as ODataVersion,
  creation: new Date('2024-08-23T16:29:29.941Z'),
  parsers: EDM_PARSERS
}) as ApiConfig;
