import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CasoCollection } from './caso.collection';
import { Fiscalia } from '../Lugares/fiscalia.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { CasoPenalReporte } from './casopenalreporte.entity';
import { AcumulacionCarpeta } from './acumulacioncarpeta.entity';
import { Intervencion } from './intervencion.entity';
import { CasoPenal } from './casopenal.entity';
import { MovimientoCaso } from './movimientocaso.entity';
import { Detencion } from './detencion.entity';
import { HistoricoAbogadoPersona } from './historicoabogadopersona.entity';
import { FiscaliaModel } from '../Lugares/fiscalia.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { CasoPenalReporteModel } from './casopenalreporte.model';
import { AcumulacionCarpetaModel } from './acumulacioncarpeta.model';
import { IntervencionModel } from './intervencion.model';
import { CasoPenalModel } from './casopenal.model';
import { MovimientoCasoModel } from './movimientocaso.model';
import { DetencionModel } from './detencion.model';
import { HistoricoAbogadoPersonaModel } from './historicoabogadopersona.model';
import { FiscaliaCollection } from '../Lugares/fiscalia.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { CasoPenalReporteCollection } from './casopenalreporte.collection';
import { AcumulacionCarpetaCollection } from './acumulacioncarpeta.collection';
import { IntervencionCollection } from './intervencion.collection';
import { MovimientoCasoCollection } from './movimientocaso.collection';
import { DetencionCollection } from './detencion.collection';
import { HistoricoAbogadoPersonaCollection } from './historicoabogadopersona.collection';
//#endregion

export class CasoPenalCollection<E extends CasoPenal, M extends CasoPenalModel<E>> extends CasoCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getCausas(principalId: number, alternativoId: number, desde: Date, hasta: Date, submaterias: number[], options?: HttpOptions): Observable<CasoPenalReporteCollection<CasoPenalReporte, CasoPenalReporteModel<CasoPenalReporte>>> {
    var res = this._function<{principalId: number, alternativoId: number, desde: Date, hasta: Date, submaterias: number[]}, CasoPenalReporte>('SIU.GetCausas');
    res.segment.entitySet('casosPenales');
    return res.call({principalId, alternativoId, desde, hasta, submaterias}, 'collection', options) as Observable<CasoPenalReporteCollection<CasoPenalReporte, CasoPenalReporteModel<CasoPenalReporte>>>;
  }
  public printCausas(principalId: number, alternativoId: number, desde: Date, hasta: Date, submaterias: number[], options?: HttpOptions): Observable<ArrayBuffer> {
    var res = this._function<{principalId: number, alternativoId: number, desde: Date, hasta: Date, submaterias: number[]}, ArrayBuffer>('SIU.PrintCausas');
    res.segment.entitySet('casosPenales');
    return res.call({principalId, alternativoId, desde, hasta, submaterias}, 'property', options) as Observable<ArrayBuffer>;
  }
  //#endregion
}