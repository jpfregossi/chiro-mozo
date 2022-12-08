import { Text, StyleSheet, View } from 'react-native';
import CardBack2 from '../CardBack2';
import FeedbackContainer from './FeedbackContainer';
import moment from 'moment';
import 'moment/locale/pt-br';


const FeedbackCard = ({ user }) => {

  return (
    <View>
      <CardBack2 alto={150} color="#ffffff" />
      <View style={styles.feedbackContainer}>
        <View style={styles.feedbackHeaderWrapper}>
        </View>
        {user && user.feedback && user.feedback.slice().sort(function(a, b) {
          let p = new Date(a.createdAt);
          let s = new Date(b.createdAt);
          if (p-s > 0) return -1;
          else if(p-s < 0) return  1;
          else return  0;
        }).map((feed) => {
          return (
            <FeedbackContainer feed={feed} rate={user.lastRate} key={feed._id}/>
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