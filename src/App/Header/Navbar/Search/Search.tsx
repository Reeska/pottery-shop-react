import React from "react";
import './Search.scss';
import { connect } from "react-redux";
import { setSearchAction } from "../../../../store";
import UiSearch from "../../../../components/ui/Navbar/Search/UiSearch";

interface SearchProps {
  setSearch: (value: string) => void;
}

function Search (props: SearchProps) {
  return (
      <UiSearch onChanged={props.setSearch}/>
  )
}

const mapDispatchToProps: SearchProps = {
  setSearch: (value: string) => setSearchAction(value)
};

export default connect(
    null,
    mapDispatchToProps,
)(Search);
