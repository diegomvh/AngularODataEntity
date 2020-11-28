import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingFrance } from './mediacontentratingfrance.entity';
import { MediaContentRatingFranceModel } from './mediacontentratingfrance.model';
import { MediaContentRatingFranceCollection } from './mediacontentratingfrance.collection';
//#endregion

export const MediaContentRatingFranceConfig = {
  name: "mediaContentRatingFrance",
  model: MediaContentRatingFranceModel,
  collection: MediaContentRatingFranceCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingFranceMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingFranceTelevisionType', nullable: false}
  }
} as EntityConfig<MediaContentRatingFrance>;