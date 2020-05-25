import { connect } from 'react-redux';
import React from 'react';

import UiSearch from '../../../../components/ui/Navbar/UiSearch/UiSearch';
import { setSearchAction } from '../../../../store/actions';
import { useHistory } from 'react-router-dom';

interface SearchProps {
  onChanged: (value: string) => void;
}

function Search ({onChanged}: SearchProps) {
  const history = useHistory();

  function handleEnter () {
    history.push('/');
  }

  return (
      <UiSearch onChanged={onChanged} onEnter={handleEnter}/>
  );
}

const mapDispatchToProps: SearchProps = {
  onChanged: (value: string) => setSearchAction(value)
};

export default connect(
    null,
    mapDispatchToProps,
)(Search);
