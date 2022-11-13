import { useSelector } from 'react-redux';
import { selectAllUsers } from '../store/users';

import NavigationComponent from './NavigationBar/NavigationComponent';
import BeaconComponent from './Beacon/BeaconComponent';
import FeedbackCard from './Feedback/FeedbackCard';
import WalletComponent from './WalletCard/WalletComponent';

const Home = ({ navigation }) => {
  const user = useSelector(selectAllUsers)[0];

  return (
    <>
      <WalletComponent navigation={navigation} user={user} />
      <BeaconComponent user={user} />
      <FeedbackCard user={user} />
      <NavigationComponent navigation={navigation}/>
    </>
  );
}

export default Home;