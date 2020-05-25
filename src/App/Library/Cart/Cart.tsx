import { connect } from 'react-redux';

import UiCart from '../../../components/ui/UiCart/UiCart';
import { State } from '../../../store/reducers';

const mapStateToProps = (state: State) => ({
  cart: state.cart,
});

export default connect(
    mapStateToProps,
)(UiCart);
