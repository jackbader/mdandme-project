import { colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostCommentModalHeaderProps {
  numOfComments: number;
  onClose: () => void;
}

const PostCommentModalHeader: FC<PostCommentModalHeaderProps> = (props) => {
  const { numOfComments, onClose } = props;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeftPlaceholder}></View>
      <View style={styles.commentsNumContainer}>
        <Text style={styles.commentsNumText}>{numOfComments} comments</Text>
      </View>
      <TouchableOpacity onPress={onClose} style={styles.closeIconContainer}>
        <Ionicons name="close" size={24} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeftPlaceholder: { width: 50, height: 50 },
  commentsNumText: { fontSize: 16, fontWeight: 'bold' },
  commentsNumContainer: { height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' },
  closeIconContainer: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
});

export default PostCommentModalHeader;
