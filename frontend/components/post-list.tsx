import { colors } from '@/constants/colors';
import { usePostsStore } from '@/stores/posts-store';
import Post from '@/types/model/post';
import { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import PostItem from './post-item';

const PostList = () => {
  const { posts, fetchPosts, error, loading } = usePostsStore();

  useEffect(() => {
    void fetchPosts();
  }, []);

  const onEndReached = useCallback(() => {
    void fetchPosts();
  }, [fetchPosts]);

  const keyExtractor = useCallback((item: Post): string => item.created_at, []);

  const renderItem = ({ item, index }: { item: Post; index: number }) => {
    return <PostItem post={item} index={index} />;
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        removeClippedSubviews={true}
        onEndReached={onEndReached}
        keyExtractor={keyExtractor}
        data={posts}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
});

export default PostList;
