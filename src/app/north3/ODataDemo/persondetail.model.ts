import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpQueryOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { Person } from './person.entity';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { PersonModel } from './person.model';
import { AddressCollection } from './address.collection';
import { PersonCollection } from './person.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

@Model()
export class PersonDetailModel<E extends PersonDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  PersonID!: number;
  
  
  @ModelField()
  Age!: number;
  
  
  @ModelField()
  Gender!: boolean;
  
  
  @ModelField()
  Phone?: string;
  
  
  @ModelField()
  Address?: AddressModel<Address>;
  
  
  @ModelField()
  Photo!: any;
  
  
  @ModelField()
  Person?: PersonModel<Person>;
  public getPerson({asEntity, ...options}: {asEntity?: boolean} & HttpQueryOptions<Person> = {}) {
    return this.getReference<Person>('Person', {asEntity, ...options}) as Observable<PersonModel<Person>>;
  }
  public setPerson(model: PersonModel<Person> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Person>('Person', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}