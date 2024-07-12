import { colors } from '@/constants/colors';
import Post from '@/types/model/post';
import { Portal } from '@gorhom/portal';
import { FC } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import PostCommentModalHeader from './post-comment-modal-header';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import PostCommentList from './post-comment-list';

interface PostItemCommentModalProps {
  onClose: () => void;
  post: Post;
}

const PostItemCommentModal: FC<PostItemCommentModalProps> = (props) => {
  const { onClose, post } = props;

  const translationY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      if (event.translationY <= 0) return;
      translationY.value = event.translationY;
    })
    .onEnd((event) => {
      if (event.velocityY > 0) {
        runOnJS(onClose)();
      }
      translationY.value = withTiming(0);
    });

  const panelAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
    };
  });

  return (
    <Portal hostName="mainPortalHost">
      <View style={styles.backgroundOverlay}></View>
      <Modal transparent visible onDismiss={onClose} animationType="slide">
        <View style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Animated.View style={[styles.panelContainer, panelAnimatedStyle]}>
            <GestureDetector gesture={panGesture}>
              <PostCommentModalHeader onClose={onClose} numOfComments={post?.comments?.length} />
            </GestureDetector>
            <PostCommentList post={post} />
          </Animated.View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  backgroundOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    height: '100%',
    width: '100%',
    zIndex: 1,
  },
  panelContainer: {
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    minHeight: '70%',
  },
});

export default PostItemCommentModal;
