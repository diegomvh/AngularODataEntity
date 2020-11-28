import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { AppListType } from './applisttype.enum';
import { RatingAppsType } from './ratingappstype.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
import { AppListItem } from './applistitem.complex';
import { IosNetworkUsageRule } from './iosnetworkusagerule.complex';
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.complex';
import { MediaContentRatingCanada } from './mediacontentratingcanada.complex';
import { MediaContentRatingFrance } from './mediacontentratingfrance.complex';
import { MediaContentRatingGermany } from './mediacontentratinggermany.complex';
import { MediaContentRatingIreland } from './mediacontentratingireland.complex';
import { MediaContentRatingJapan } from './mediacontentratingjapan.complex';
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.complex';
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.complex';
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.complex';
import { IosGeneralDeviceConfiguration } from './iosgeneraldeviceconfiguration.entity';
import { AppListItemModel } from './applistitem.model';
import { IosNetworkUsageRuleModel } from './iosnetworkusagerule.model';
import { MediaContentRatingAustraliaModel } from './mediacontentratingaustralia.model';
import { MediaContentRatingCanadaModel } from './mediacontentratingcanada.model';
import { MediaContentRatingFranceModel } from './mediacontentratingfrance.model';
import { MediaContentRatingGermanyModel } from './mediacontentratinggermany.model';
import { MediaContentRatingIrelandModel } from './mediacontentratingireland.model';
import { MediaContentRatingJapanModel } from './mediacontentratingjapan.model';
import { MediaContentRatingNewZealandModel } from './mediacontentratingnewzealand.model';
import { MediaContentRatingUnitedKingdomModel } from './mediacontentratingunitedkingdom.model';
import { MediaContentRatingUnitedStatesModel } from './mediacontentratingunitedstates.model';
import { IosGeneralDeviceConfigurationModel } from './iosgeneraldeviceconfiguration.model';
import { AppListItemCollection } from './applistitem.collection';
import { IosNetworkUsageRuleCollection } from './iosnetworkusagerule.collection';
import { MediaContentRatingAustraliaCollection } from './mediacontentratingaustralia.collection';
import { MediaContentRatingCanadaCollection } from './mediacontentratingcanada.collection';
import { MediaContentRatingFranceCollection } from './mediacontentratingfrance.collection';
import { MediaContentRatingGermanyCollection } from './mediacontentratinggermany.collection';
import { MediaContentRatingIrelandCollection } from './mediacontentratingireland.collection';
import { MediaContentRatingJapanCollection } from './mediacontentratingjapan.collection';
import { MediaContentRatingNewZealandCollection } from './mediacontentratingnewzealand.collection';
import { MediaContentRatingUnitedKingdomCollection } from './mediacontentratingunitedkingdom.collection';
import { MediaContentRatingUnitedStatesCollection } from './mediacontentratingunitedstates.collection';
//#endregion

export class IosGeneralDeviceConfigurationCollection<E extends IosGeneralDeviceConfiguration, M extends IosGeneralDeviceConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}