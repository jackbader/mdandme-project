import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PostItemPatientDescription: FC<{ patientDescription: string }> = (props) => {
  const { patientDescription } = props;

  return (
    <View style={styles.fadedTextContainer}>
      <Text numberOfLines={4} ellipsizeMode="tail" style={styles.patientDescriptionText}>
        <Text style={{ fontWeight: 'bold' }}>Patient Description: </Text>
        {patientDescription}
      </Text>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', colors.white]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  patientDescriptionText: {
    fontSize: 14,
    color: colors.grey,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 50,
  },
  fadedTextContainer: {
    position: 'relative',
    marginVertical: 12,
  },
});

export default PostItemPatientDescription;
