import { Profile } from './Profile';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics
        data={data}
      />

      <FriendList
        friends={friends}
      />

      <TransactionHistory items={transactions} />
    </div>
  );
};