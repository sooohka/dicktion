import Counter from "./components/counter.js";

class App {
  $App: HTMLDivElement;

  $body: HTMLElement;

  state: { count: number };

  $counter: any;

  constructor() {
    this.$App = document.createElement("div");
    this.$body = document.body;
    this.$App.className = "root";
    this.$body.appendChild(this.$App);
    this.state = {
      count: 0,
    };
    this.$counter = new Counter(this.state.count);
    this.render();
  }

  render() {
    this.$counter.attach(this.$App);
  }
}

window.onload = () => {
  // eslint-disable-next-line no-new
  new App();
};
