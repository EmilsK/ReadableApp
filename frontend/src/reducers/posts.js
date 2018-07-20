import { SET_POSTS } from "../actions/posts";

export const posts = (state = {}, action) => {
  switch (action.type) {
    case SET_POSTS:
      const { posts } = action;
      let retValuesPosts = [];
      posts.forEach(post => {
        retValuesPosts = {
          ...retValuesPosts,
          [post.id]: post
        };
      });
      return retValuesPosts;
  }
};
