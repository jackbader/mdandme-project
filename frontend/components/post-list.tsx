import usePosts from "@/hooks/get-posts";
import { useCallback } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import PostItem from "./post-item";
import { PostProps } from "@/types/model/post";

const PostList = () => {
  const { posts, loading, error, refetch } = usePosts();

  const renderItem = useCallback(({ item }: { item: PostProps }) => {
    return <PostItem post={item} />;
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList data={posts} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});

export default PostList;
