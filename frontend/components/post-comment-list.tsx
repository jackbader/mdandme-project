import Comment from '@/types/model/comment';
import Post from '@/types/model/post';
import { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface PostCommentListProps {
  post: Post;
}

const PostCommentList: FC<PostCommentListProps> = (props) => {
  const { post } = props;

  const renderItem = ({ item }: { item: Comment }) => {
    return (
      <View style={styles.commentItem}>
        <Text style={styles.usernameText}>{item.display_name}</Text>
        <Text>{item.text}</Text>
        {item.replies.map((reply) => (
          <View style={styles.replyComment} key={reply.id}>
            <Text style={styles.usernameText}>{reply.display_name}</Text>
            <Text>{reply.text}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={post.comments} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  replyComment: { paddingLeft: 30, marginTop: 20 },
  usernameText: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  container: {
    paddingHorizontal: 20,
  },
  commentItem: {
    padding: 8,
    margin: 4,
    borderRadius: 8,
  },
});

export default PostCommentList;
