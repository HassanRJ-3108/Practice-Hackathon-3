import { groq } from 'next-sanity';

export const allProductsQuery = groq`*[_type == "product"]`;

export const featuredProductsQuery = groq`*[_type == "product" && "featured" in tags]`;

export const todaysDealProductsQuery = groq`*[_type == "product" && "todays-deal" in tags]`;

export const bestsellerProductsQuery = groq`*[_type == "product" && "bestseller" in tags]`;
