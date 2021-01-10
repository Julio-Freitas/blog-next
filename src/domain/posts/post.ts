export type PostAuthor = {
  id: number;
  name: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};

export type PostCategory = {
  category: {
    id: number;
    name: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
};

export type PostCoverFormats = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormats & {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    large: PostCoverFormats;
    small: PostCoverFormats;
    medium: PostCoverFormats;
    thumbnail: PostCoverFormats;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  created_at: string;
  updated_at: string;
};

export type PostData = {
  id: number;
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  published_at: string;
  created_at: string;
  updated_at: string;
  cover: PostCover;
};
