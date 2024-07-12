import { ResponsePostDto } from '@/types/dto/response-post-dto';
import Post from '@/types/model/post';
import { create } from 'zustand';

const FETCH_POSTS_LIMIT = 10;

interface PostStoreState {
  posts: Post[];
  skip: number;
  error: string | null;
  loading: boolean;
  fetchPosts: () => Promise<void>;
  addHug: (postUrl: string) => Promise<void>;
}

export const usePostsStore = create<PostStoreState>((set, get) => ({
  posts: [],
  skip: 0,
  error: null,
  loading: true,

  fetchPosts: async () => {
    const { posts: prevPosts, skip } = get();

    try {
      const response = await fetch(`http://localhost:8000/posts?skip=${skip}&limit=${FETCH_POSTS_LIMIT}`);

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = (await response.json()) as ResponsePostDto[];
      const posts = data.map((item) => Post.fromDto(item));

      const newPosts = [...prevPosts, ...posts];

      set({ posts: newPosts, error: null, skip: skip + FETCH_POSTS_LIMIT, loading: false });
    } catch (err) {
      set({ error: (err as Error).message });
    }
  },

  addHug: async (post_url: string) => {
    const { posts } = get();

    try {
      const url = `http://localhost:8000/posts/${post_url}/hug`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error('Failed to add hug');
      }

      const newPosts = posts.map((post) => {
        if (post.post_url === post_url) {
          return Post.create({
            ...post,
            num_hugs: post.num_hugs + 1,
          });
        }
        return post;
      });

      set({ posts: newPosts });
    } catch (err) {
      set({ error: (err as Error).message });
    }
  },
}));
