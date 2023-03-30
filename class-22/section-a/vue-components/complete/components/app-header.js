app.component("AppHeader", {
  props: ["cart"],
  setup(props) {},
  template: `
  <header>
    <div class="nav-bar">
      <img src="./images/logo.png" alt="Donut Logo" />
      <h2>donuts</h2>
      <div class="cart">
        <img src="./images/bag.png" alt="Donut Logo" />
        <p>
          <span class="sr-only">Number of items in cart: </span>{{ cart }}
        </p>
      </div>
    </div>
  </header>
    `,
});
