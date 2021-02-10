import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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

export class PersonModel<E extends Person> extends ODataModel<E> {
  //#region ODataApi Properties
  ID!: number;
  Name?: string;
  PersonDetail?: PersonDetailModel<PersonDetail>;
  //#endregion
  //#region ODataApi Setters
  public setPersonDetail(model: PersonDetailModel<PersonDetail> | null, options?: HttpOptions) {
    return this._setReference<PersonDetail>('PersonDetail', model, options);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}