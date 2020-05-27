import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import UiBook from '../../../../components/ui/UiBook/UiBook';
import { Action, addToCart } from '../../../../store/actions';
import { BookType } from '../book.types';
import { State } from '../../../../store/reducers';

const mapDispatchToProps = (dispatch: ThunkDispatch<State, any, Action>) => ({
  addToCart: (book: BookType) => dispatch(addToCart(book)),
});

export default connect(
    null,
    mapDispatchToProps,
)(UiBook);
