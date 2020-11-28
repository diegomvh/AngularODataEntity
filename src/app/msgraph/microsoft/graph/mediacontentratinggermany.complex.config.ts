import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaContentRatingGermany } from './mediacontentratinggermany.complex';
import { MediaContentRatingGermanyModel } from './mediacontentratinggermany.model';
import { MediaContentRatingGermanyCollection } from './mediacontentratinggermany.collection';
//#endregion

export const MediaContentRatingGermanyConfig = {
  name: "mediaContentRatingGermany",
  model: MediaContentRatingGermanyModel,
  collection: MediaContentRatingGermanyCollection,
  annotations: [],
  fields: {
    movieRating: {type: 'graph.ratingGermanyMoviesType', nullable: false},
    tvRating: {type: 'graph.ratingGermanyTelevisionType', nullable: false}
  }
} as StructuredTypeConfig<MediaContentRatingGermany>;