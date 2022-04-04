export default class Counter {
  count: any;

  $view: HTMLParagraphElement;

  constructor(count: any) {
    this.count = count;
    this.$view = document.createElement("p");
    this.$view.innerHTML = this.count;
  }

  attach($parent: HTMLElement) {
    $parent.appendChild(this.$view);
  }

  up() {
    this.count += 1;
  }
}
