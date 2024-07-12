import { usePostsStore } from '@/stores/posts-store';
import Post from '@/types/model/post';
import { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PostItemFooterButton from './post-item-footer-button';
import PostCommentModal from './post-comment-modal';

interface PostItemFooterProps {
  post: Post;
}

const PostItemFooter: FC<PostItemFooterProps> = (props) => {
  const { post } = props;

  const [commentModalOpen, setCommentModalOpen] = useState(false);

  const { addHug } = usePostsStore();

  return (
    <View style={styles.container}>
      <PostItemFooterButton icon="heart" text={`${post.num_hugs} Hugs`} onPress={() => void addHug(post.post_url)} />
      <PostItemFooterButton
        icon="chatbubble"
        text={`${post.comments.length} Comments`}
        onPress={() => setCommentModalOpen(true)}
      />

      {commentModalOpen && <PostCommentModal onClose={() => setCommentModalOpen(false)} post={post} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
});

export default PostItemFooter;
