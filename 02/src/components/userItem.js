import React, {useContext} from 'react';
import {MyContext} from '../context';

const UserItem = () => {
	const context = useContext(MyContext);
	console.log(context);
	return <>{context.active ? context.users.map((item) => <div key={item.id}>{item.name}</div>) : null}</>;
};

export default UserItem;
