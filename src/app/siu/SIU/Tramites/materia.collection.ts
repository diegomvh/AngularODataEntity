import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Oficina } from '../Lugares/oficina.entity';
import { Materia } from './materia.entity';
import { SubMateria } from './submateria.entity';
import { OficinaModel } from '../Lugares/oficina.model';
import { MateriaModel } from './materia.model';
import { SubMateriaModel } from './submateria.model';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { SubMateriaCollection } from './submateria.collection';
//#endregion

export class MateriaCollection<E extends Materia, M extends MateriaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}