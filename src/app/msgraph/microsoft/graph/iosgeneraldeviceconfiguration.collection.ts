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
import { AppListItem } from './applistitem.entity';
import { IosNetworkUsageRule } from './iosnetworkusagerule.entity';
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.entity';
import { MediaContentRatingCanada } from './mediacontentratingcanada.entity';
import { MediaContentRatingFrance } from './mediacontentratingfrance.entity';
import { MediaContentRatingGermany } from './mediacontentratinggermany.entity';
import { MediaContentRatingIreland } from './mediacontentratingireland.entity';
import { MediaContentRatingJapan } from './mediacontentratingjapan.entity';
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.entity';
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.entity';
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.entity';
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