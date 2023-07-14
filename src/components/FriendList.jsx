import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => (
                <li className={css.itemFriend} key={friend.id}>
                    {friend.isOnline === true ? (<span className={css.online}></span>) : (<span className={css.offline}></span>)}
                    <img src={friend.avatar} alt="User avatar" width="48" className={css.avatarFriend} />
                    <p className={css.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};