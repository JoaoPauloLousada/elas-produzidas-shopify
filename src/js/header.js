import Maybe from "./Maybe";

const getElementById = (id) => document.querySelector(`#${id}`);

const addBtnClick = (btn_id, target_id, callback) => {
  Maybe.of(getElementById(btn_id)).map((btn) =>
    btn.addEventListener("click", () => callback(getElementById(target_id)))
  );
};

const isOpen = (element) => !element.classList.contains("search_input--close");

const addOrRemoveClass = (element, targetClass, add) => {
  add
    ? element.classList.add(targetClass)
    : element.classList.remove(targetClass);
};

const toggleInput = (element, targetClass) => {
  Maybe.of(element)
    .flatMap((el) => Maybe.of(isOpen(el)))
    .map((isOpen) => addOrRemoveClass(element, targetClass, isOpen));
};

export default (() => {
  document.addEventListener("DOMContentLoaded", () => {
    addBtnClick("header-search-btn", "header-search", (element) =>
      toggleInput(element, "search_input--close")
    );
  });
})();
