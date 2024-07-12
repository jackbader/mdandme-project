import Post from "@/types/model/post";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface PostItemProps {
  post: Post;
}

const PostItem: FC<PostItemProps> = (props) => {
  const { post } = props;
  return (
    <View style={styles.container}>
      <Text>{post.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {},
  gradient: {},
  fadedTextContainer: {},
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default PostItem;
