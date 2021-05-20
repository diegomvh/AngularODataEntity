import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Person } from './person.entity';
import { PersonDetail } from './persondetail.entity';
import { PersonDetailModel } from './persondetail.model';
import { PersonCollection } from './person.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

@Model()
export class PersonModel<E extends Person> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  ID!: number;
  
  
  @ModelField()
  Name?: string;
  
  
  @ModelField()
  PersonDetail?: PersonDetailModel<PersonDetail>;
  public getPersonDetail({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<PersonDetail>('PersonDetail', {asEntity, ...options}) as Observable<PersonDetailModel<PersonDetail>>;
  }
  public setPersonDetail(model: PersonDetailModel<PersonDetail> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<PersonDetail>('PersonDetail', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}