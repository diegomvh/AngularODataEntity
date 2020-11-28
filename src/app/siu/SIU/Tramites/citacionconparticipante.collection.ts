import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CitacionConParticipante } from './citacionconparticipante.entity';
import { CitacionConParticipanteModel } from './citacionconparticipante.model';
//#endregion

export class CitacionConParticipanteCollection<E extends CitacionConParticipante, M extends CitacionConParticipanteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}