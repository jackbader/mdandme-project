import { colors } from '@/constants/colors';
import Post from '@/types/model/post';
import { FC, memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PostItemPatientDescription from './post-item-patient-description';
import PostItemFooter from './post-item-footer';

interface PostItemProps {
  post: Post;
  index: number;
}

const PostItem: FC<PostItemProps> = (props) => {
  const { post, index } = props;

  console.log('re-rendering post item', index);

  return (
    <View style={styles.container}>
      <Text style={styles.postTitleText}>{post.title}</Text>

      <PostItemPatientDescription patientDescription={post.patient_description} />

      <PostItemFooter post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  postTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    padding: 16,
    margin: 8,
    borderRadius: 16,
    backgroundColor: colors.white,
    elevation: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});

const arePropsEqual = (prevProps: PostItemProps, nextProps: PostItemProps) => {
  return prevProps.post.num_hugs === nextProps.post.num_hugs;
};

export default memo(PostItem, arePropsEqual);
