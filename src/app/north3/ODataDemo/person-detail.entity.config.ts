//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PersonDetail } from './person-detail.entity';
import { PersonDetailModel } from './person-detail.model';
import { PersonDetailCollection } from './person-detail.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PersonDetailEntityConfig = {
  name: 'PersonDetail',
  model: PersonDetailModel,
  collection: PersonDetailCollection,
  keys: [{name: 'PersonID'}],
  fields: {
    PersonID: {type: 'Edm.Int32', nullable: false},
    Age: {type: 'Edm.Byte', nullable: false},
    Gender: {type: 'Edm.Boolean', nullable: false},
    Phone: {type: 'Edm.String'},
    Address: {type: 'ODataDemo.Address'},
    Photo: {type: 'Edm.Stream', nullable: false},
    Person: {type: 'ODataDemo.Person', navigation: true}
  }
} as StructuredTypeConfig;
//#endregion