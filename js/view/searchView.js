import View from "./View.js";
class searchView extends View {
  _parentEl = document.querySelector(".search-div");

  getQuery() {
    const query = this._parentEl.querySelector(".search-input").value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentEl.querySelector(".search-input").value = "";
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new searchView();
