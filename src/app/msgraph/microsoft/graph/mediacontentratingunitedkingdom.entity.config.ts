import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.entity';
import { MediaContentRatingUnitedKingdomModel } from './mediacontentratingunitedkingdom.model';
import { MediaContentRatingUnitedKingdomCollection } from './mediacontentratingunitedkingdom.collection';
//#endregion

export const MediaContentRatingUnitedKingdomConfig = {
  name: "mediaContentRatingUnitedKingdom",
  model: MediaContentRatingUnitedKingdomModel,
  collection: MediaContentRatingUnitedKingdomCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingUnitedKingdomMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingUnitedKingdomTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingUnitedKingdom>;