import { ODataApiConfig, EDM_PARSERS, ODataMetadata, ODataVersion } from 'angular-odata';
import * as json from './metadata.json';

export const NorthwindConfig = ODataMetadata.fromJson(json).toConfig({
  serviceRootUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  metadataUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/$metadata',
  name: 'Northwind',
  version: '4.0' as ODataVersion,
  creation: new Date('2025-05-26T12:13:35.566Z'),
  parsers: EDM_PARSERS
}) as ODataApiConfig;
