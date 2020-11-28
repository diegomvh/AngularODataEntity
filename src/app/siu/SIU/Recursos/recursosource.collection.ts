import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoSource } from './recursosource.entity';
import { AllowConversion } from '../Onlyoffice/allowconversion.entity';
import { RecursoSourceModel } from './recursosource.model';
import { AllowConversionModel } from '../Onlyoffice/allowconversion.model';
import { AllowConversionCollection } from '../Onlyoffice/allowconversion.collection';
//#endregion

export class RecursoSourceCollection<E extends RecursoSource, M extends RecursoSourceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}