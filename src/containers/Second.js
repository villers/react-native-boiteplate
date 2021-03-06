import { connect } from 'react-redux';

import SecondScreen from '../components/SecondScreen';
import { navigatePush } from '../actions/navigate';

const mapStateToProps = (state) => {
	return {
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonPress: () => {
			dispatch(navigatePush('Third'))
		},
		onModalButtonPress: () => {
			dispatch(navigatePush('Modal'))
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SecondScreen);