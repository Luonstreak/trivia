import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { userInfo } from '../actions';

class UserProfile extends Component {
	render() {
		console.log(this.props);
		return (
			<View>
				<Text>
					{this.props.name}
				</Text>
			</View>
		);
	}
}

const mapStateToProps = state => {
	const user = _.map(state.userInfo, (val, uid) => {
			return { ...val, uid };
	});

	return { user };
};

export default connect(mapStateToProps, { userInfo })(UserProfile);
