//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PersonDetail } from './persondetail.entity';
import { PersonDetailModel } from './persondetail.model';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const PersonDetailEntityConfig = {
  name: "PersonDetail",
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
} as StructuredTypeConfig<PersonDetail>;
//#endregion