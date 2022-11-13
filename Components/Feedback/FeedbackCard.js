import { Text, StyleSheet, View } from 'react-native';
import CardBack from '../CardBack';
import FeedbackContainer from './FeedbackContainer';


const FeedbackCard = ({ user }) => {

  return (
    <View style={styles.feedbackWrapper}>
      <CardBack fWidth={1} fHeight={1.6} color="#c9c8c8ff" />
      <View style={styles.feedbackContainer}>
        <View style={styles.feedbackHeaderWrapper}>
          <Text style={styles.feedbackHeader}>Últimas Chiroleadas Recibidas</Text>
        </View>
        {user && user.feedback.map((feed) => {
          return (
            <FeedbackContainer feed={feed} />
          )
        })}
      </View>
    </View>
  );
}

export default FeedbackCard;

const styles = StyleSheet.create({
  feedbackWrapper: {
    flex: 1,
    marginBottom: 87,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  feedbackContainer: {
    borderRadius: 10,
    height: '100%'
  },
  feedbackHeaderWrapper: {
    margin: 10,
  },
  feedbackHeader: {
    fontFamily: 'Ubuntu',
    fontSize: 18,
    fontWeight: '700'
  }
});