//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Person } from './person.entity';
import { PersonModel } from './person.model';
import { PersonCollection } from './person.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const PersonEntityConfig = {
  name: "Person",
  model: PersonModel,
  collection: PersonCollection,
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Name: {type: 'Edm.String'},
    PersonDetail: {type: 'ODataDemo.PersonDetail', navigation: true}
  }
} as StructuredTypeConfig<Person>;
//#endregion