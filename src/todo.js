let sequence = 1;

export default class Todo {
  constructor(text) {
    this.text = text;
    this.id = sequence++;
  }
}
