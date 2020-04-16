import React,{ useEffect, useState }  from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import {updateBook,deleteBook} from "../actions/bookActions";
import { connect } from "react-redux";

function BookList(props) {
  const action = props.actions;
  const [book, setBook] = useState({});

  function handleChange(orginialBook,e) {
    let tempBook = Object.assign({},orginialBook);
    tempBook.price = e.target.value;
    setBook(tempBook);
  }

  function handleSave() {
    action.updateBook(book).then(() => {
      alert("價錢修改成功");
    });
  }
  
  function deleteBook(id){
    action.deleteBook(id).then(() => {
      alert("刪除成功");
      location.reload();
    });
  }

  return (
    <React.Fragment>
    <table className="table">
    <thead>
      <tr>
        <th>書名</th>
        <th>作者</th>
        <th>價錢</th>
        <th>修改價錢</th>
        <th>確定修改價錢</th>
        <th>刪除</th>
      </tr>
    </thead>
    <tbody>
      {props.books.map(book => {
        return (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.price}</td>
            <td><input  type="number" defaultValue={book.price} onChange={(e) => handleChange(book, e)}/></td>
            <td><button className="btn btn-primary" onClick={handleSave}>確定修改</button></td>
            <td><button className="btn btn-primary" onClick={() => deleteBook(book.id)}>確定刪除</button></td>
          </tr>
        );
      })}
    </tbody>
  </table>
  </React.Fragment>
);
}


function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  return {   
    actions: {
      updateBook: bindActionCreators(updateBook, dispatch),
      deleteBook: bindActionCreators(deleteBook, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

