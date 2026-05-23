/** Unified media item — images and videos across all gallery pages */
export interface MediaItem {
  id: string;
  title: string;
  description?: string;
  mediaType: "image" | "video";
  thumbnailUrl: string;
  mediaUrl: string;
  category: string;
  album?: string;
  season?: string;
  createdAt: string;
}

/** Season / event album grouping */
export interface Album {
  id: string;
  name: string;
  season: string;
  coverImageUrl: string;
  mediaCount: number;
  description?: string;
  createdAt: string;
}

/** Featured milestone card for the Arion in Action page */
export interface FeaturedMoment {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  category: string;
}

/** Video entry for VideoGallery component */
export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category?: string;
  isFeatured?: boolean;
}
