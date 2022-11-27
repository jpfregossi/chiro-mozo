import { useSelector } from 'react-redux';

import NavigationComponent from './NavigationBar/NavigationComponent';
import BeaconComponent from './Beacon/BeaconComponent';
import ChirosRecibidas from './Acumulado/ChirosRecibidas';
import FeedbackCard from './Feedback/FeedbackCard';
import WalletComponent from './WalletCard/WalletComponent';
import Background from './Background';

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.users.currentUser);

  return (
    <>
      <Background />
      <BeaconComponent user={user} />
      <WalletComponent navigation={navigation} user={user} />
      <ChirosRecibidas user={user}/>
      <FeedbackCard user={user} />
      <NavigationComponent navigation={navigation}/>
    </>
  );
}

export default Home;
