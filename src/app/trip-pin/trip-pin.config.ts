import { ODataApiConfig, EDM_PARSERS, ODataMetadata, ODataVersion } from 'angular-odata';
import * as json from './metadata.json';

export const TripPinConfig = ODataMetadata.fromJson(json).toConfig({
  serviceRootUrl: 'https://services.odata.org/V4/TripPinServiceRW/',
  metadataUrl: 'https://services.odata.org/V4/TripPinServiceRW/$metadata',
  name: 'TripPin',
  version: '4.0' as ODataVersion,
  creation: new Date('2025-05-26T12:06:37.469Z'),
  parsers: EDM_PARSERS
}) as ODataApiConfig;
