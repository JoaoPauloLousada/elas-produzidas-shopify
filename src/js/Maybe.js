function Maybe(value) {
  this.__value = value;

  this.flatMap = (fn) => {
    if (this.isNothing()) return Maybe.Nothing();
    const m = fn(this.__value);

    return m.isNothing() ? Maybe.Nothing() : Maybe.of(m.__value);
  };
  this.getOrElse = (elseVal) => {
    return this.isNothing() ? elseVal : this.__value;
  };
  this.getOrEmptyArray = () => {
    return this.getOrElse([]);
  };
  this.getOrNull = () => {
    return this.getOrElse(null);
  };
  this.isNothing = () => {
    return this.__value === null || this.__value === undefined;
  };
  this.map = (fn) => {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.__value));
  };
}

Maybe.of = function(valueToBox) {
  return new Maybe(valueToBox);
};

Maybe.Nothing = () => Maybe.of(null);

export default Maybe;
