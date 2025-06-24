import { defineQuery } from "next-sanity";

export const getAllPosts = defineQuery(`
    *[_type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search] | order(_createdAt desc) {
      _id,
      title,
      slug,
      _createdAt,
      description,
      author -> {
        _id,
        name,
        image,
        bio
      },
      views,
      category,
      image
    }
`);

export const getAllPostsFromUser = defineQuery(`
    *[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
      _id,
      title,
      slug,
      _createdAt,
      description,
      author -> {
        _id,
        name,
        image,
        bio
      },
      views,
      category,
      image
    }
`);

export const getPlaylistBySlug =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);

export const getPostById = defineQuery(`
    *[_type == "startup" && _id == $id][0] {
      _id,
      title,
      slug,
      _createdAt,
      description,
      author -> {
        _id,
        name,
        username,
        image,
        bio
      },
      views,
      category,
      image,
      pitch
    }
`)

export const getPostViews = defineQuery(`
    *[_type == "startup" && _id == $id][0] {
      _id,
      views
    }
`)

export const getAuthorByGithubId = defineQuery(`
  *[_type == "author" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }
`)

export const getAuthorById = defineQuery(`
  *[_type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }
`)