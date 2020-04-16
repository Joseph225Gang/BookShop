import React from "react";
import { connect } from "react-redux";
import * as bookActions from "../actions/bookActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BookList from "./BookList";

class Book extends React.Component {
  componentDidMount() {
    const { books, actions} = this.props;
    if (books.length === 0) {
      actions.loadBooks().catch(error => {
        alert("Loading books failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Books</h2>
        <BookList books={this.props.books} />
      </>
    );
  }
}

Book.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    return {
      books: state.books
    };
  }

function mapDispatchToProps(dispatch) {
  return {
    actions: {
        loadBooks: bindActionCreators(bookActions.loadBooks, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
