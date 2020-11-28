import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosVppEBook } from './iosvppebook.entity';
import { IosVppEBookModel } from './iosvppebook.model';
import { IosVppEBookCollection } from './iosvppebook.collection';
//#endregion

export const IosVppEBookConfig = {
  name: "iosVppEBook",
  base: "microsoft.graph.managedEBook",
  model: IosVppEBookModel,
  collection: IosVppEBookCollection,
  annotations: [],
  fields: {
    appleId: {type: 'Edm.String'},
    genres: {type: 'Edm.String', collection: true},
    language: {type: 'Edm.String'},
    seller: {type: 'Edm.String'},
    totalLicenseCount: {type: 'Edm.Int32', nullable: false},
    usedLicenseCount: {type: 'Edm.Int32', nullable: false},
    vppOrganizationName: {type: 'Edm.String'},
    vppTokenId: {type: 'Edm.Guid', nullable: false}
  }
} as EntityConfig<IosVppEBook>;