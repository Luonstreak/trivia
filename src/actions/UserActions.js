import firebase from 'firebase';
import FETCH_SUCCESS from './types';
// import { Actions } from 'react-native-router-flux';

export const userFetch = () => {
	return (dispatch) => {
			firebase.database().ref('/Users/asdfjkl/abc1/name')
					.on('value', snapshot => {
							dispatch({ type: FETCH_SUCCESS, payload: snapshot.val() });
							console.log(snapshot.val());
					});
					
	};
};
