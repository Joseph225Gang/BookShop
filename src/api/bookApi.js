import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/books/";

export function getBooks() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function save(book) {
  return fetch(baseUrl + (book.id || ""), {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(book)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteBook(bookId) {
  return fetch(baseUrl + bookId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}