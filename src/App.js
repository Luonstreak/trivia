import React, { Component } from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header, Card, CardSection, Button } from './components/common';
import GameStart from './components/GameStart';
import UserProfile from './components/UserProfile';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyDqYuLYEHSeiO0PrT4zPWornW7mHX8uP80',
			authDomain: 'trivia-1ec67.firebaseapp.com',
			databaseURL: 'https://trivia-1ec67.firebaseio.com',
			projectId: 'trivia-1ec67',
			storageBucket: 'trivia-1ec67.appspot.com',
			messagingSenderId: '308224065203'
		};
		firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers);

		return (
			<Provider store={store}>
				<View>
					<Header headerText='Fun Trivia' />
					<Card>
						<CardSection>
							<GameStart />
						</CardSection>

						<CardSection>
							<UserProfile />
						</CardSection>
						<CardSection>
							<Button>
								Leader Board
							</Button>
							<Button>
								Invite Friends
							</Button>
						</CardSection>
					</Card>
				</View>
			</Provider>
		);
	}
}

export default App;
