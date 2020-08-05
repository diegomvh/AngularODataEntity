import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosVppEBook } from './iosvppebook.entity';
//#endregion

export const IosVppEBookConfig = {
  name: "iosVppEBook",
  base: "microsoft.graph.managedEBook",
  annotations: [],
  fields: {
    vppTokenId: {type: 'Edm.Guid', nullable: false},
    appleId: {type: 'Edm.String'},
    vppOrganizationName: {type: 'Edm.String'},
    genres: {type: 'Edm.String', collection: true},
    language: {type: 'Edm.String'},
    seller: {type: 'Edm.String'},
    totalLicenseCount: {type: 'Edm.Int32', nullable: false},
    usedLicenseCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<IosVppEBook>;