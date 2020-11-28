import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersonDetail } from './persondetail.entity';
import { PersonDetailModel } from './persondetail.model';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

export const PersonDetailConfig = {
  name: "PersonDetail",
  model: PersonDetailModel,
  collection: PersonDetailCollection,
  annotations: [],
  fields: {
    PersonID: {type: 'Edm.Int32', key: true, ref: 'PersonID', nullable: false},
    Age: {type: 'Edm.Byte', nullable: false},
    Gender: {type: 'Edm.Boolean', nullable: false},
    Phone: {type: 'Edm.String'},
    Address: {type: 'ODataDemo.Address'},
    Photo: {type: 'Edm.Stream', nullable: false},
    Person: {type: 'ODataDemo.Person', navigation: true}
  }
} as EntityConfig<PersonDetail>;