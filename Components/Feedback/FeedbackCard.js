import { Text, StyleSheet, View } from 'react-native';
import CardBack2 from '../CardBack2';
import FeedbackContainer from './FeedbackContainer';


const FeedbackCard = ({ user }) => {

  return (
    <View>
      <CardBack2 alto={100} color="#ffffff" />
      <View style={styles.feedbackContainer}>
        <View style={styles.feedbackHeaderWrapper}>
        </View>
        {user && user.feedback.map((feed) => {
          return (
            <FeedbackContainer feed={feed} key={feed._id}/>
          )
        })}
      </View>
    </View>
  );
}

export default FeedbackCard;

const styles = StyleSheet.create({
  feedbackContainer: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 25,
    //backgroundColor: 'red',
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