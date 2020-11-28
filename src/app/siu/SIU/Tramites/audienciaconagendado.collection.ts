import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AudienciaConAgendado } from './audienciaconagendado.entity';
import { AudienciaConAgendadoModel } from './audienciaconagendado.model';
//#endregion

export class AudienciaConAgendadoCollection<E extends AudienciaConAgendado, M extends AudienciaConAgendadoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}