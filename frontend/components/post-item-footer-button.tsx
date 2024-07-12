import { colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface PostItemFooterButtonProps {
  icon: keyof typeof Ionicons.glyphMap;
  text: string;
  onPress: () => void;
}

const PostItemFooterButton: FC<PostItemFooterButtonProps> = (props) => {
  const { icon, text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient colors={['rgb(229, 123, 255)', 'rgb(125, 79, 255)']} style={styles.gradientBackground} />

      <View style={styles.buttonInnerContainer}>
        <Ionicons name={icon} size={24} color={colors.white} />
        <Text style={styles.hugNumText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientBackground: { position: 'absolute', zIndex: 0, width: '100%', height: '100%', borderRadius: 8 },
  buttonInnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  hugNumText: {
    color: colors.white,
    fontSize: 12,
    marginLeft: 4,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
    borderRadius: 8,
    shadowColor: colors.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginRight: 4,
  },
});

export default PostItemFooterButton;
