app.component("AppFooter", {
  setup() {
    const count = ref(0);
    return { count };
  },
  template: `
    <footer>
      <div class="">
        <h2>Site Footer</h2>
      </div>
    </footer>
    `,
});
