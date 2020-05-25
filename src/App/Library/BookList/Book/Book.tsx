import UiBook from '../../../../components/ui/UiBook/UiBook';
import { connect } from 'react-redux';
import { addToCartAction } from '../../../../store/actions';

const mapDispatchToProps = {
  addToCart: addToCartAction,
}

export default connect(
    null,
    mapDispatchToProps,
)(UiBook);
