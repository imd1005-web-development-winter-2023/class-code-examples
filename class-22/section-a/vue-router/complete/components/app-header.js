app.component("AppHeader", {
  setup() {
    const count = ref(0);
    return { count };
  },
  template: `
    <header>
      <div class="">
        <h2>Site Header</h2>
      </div>
    </header>
    `,
});
