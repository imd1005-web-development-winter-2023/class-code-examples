app.component("ProductCard", {
  props: ["isPremium"],
  setup(props, { emit }) {
    const cart = ref(0);

    const product = reactive({
      title: "Delicious Donuts",
      description:
        "Our delicious donuts are made with the finest ingredients and come in three irresistible flavors: cotton candy, lemon, and strawberry. Each donut is soft, fluffy, and bursting with flavor, making it the perfect treat for any occasion.",
      details: [
        "Each donut is freshly baked and handcrafted by our expert bakers.",
        "Available in boxes of 6 or 12 donuts.",
        "Comes with a satisfaction guarantee.",
      ],
      selectedVariantId: 1122,
      image: {
        src: "./images/donut-1.png",
        alt: "Cotton candy",
      },
      variants: [
        {
          id: 1122,
          flavour: "Cotton candy",
          image: { src: "./images/donut-1.png", alt: "Cotton candy" },
          selector: { src: "./images/variant-1.png", alt: "Cotton candy" },
          price: 22.21,
          stock: 10,
        },
        {
          id: 1123,
          flavour: "Lemon",
          image: { src: "./images/donut-2.png", alt: "Lemon" },
          selector: { src: "./images/variant-2.png", alt: "Cotton candy" },
          price: 10.21,
          stock: 0,
        },
        {
          id: 1124,
          flavour: "Strawberry",
          image: { src: "./images/donut-3.png", alt: "Strawberry" },
          selector: { src: "./images/variant-3.png", alt: "Cotton candy" },
          price: 5.21,
          stock: 33,
        },
      ],
    });

    function updateVariantId(variantId) {
      product.selectedVariantId = variantId;
    }

    // a computed ref
    const image = computed(() => {
      const variantIndex = product.variants.findIndex(
        (element) => element.id === product.selectedVariantId
      );

      return product.variants[variantIndex].image;
    });

    // a computed ref
    const price = computed(() => {
      const variantIndex = product.variants.findIndex(
        (element) => element.id === product.selectedVariantId
      );

      return product.variants[variantIndex].price;
    });

    const inStock = computed(() => {
      const variantIndex = product.variants.findIndex(
        (element) => element.id === product.selectedVariantId
      );

      return product.variants[variantIndex].stock > 0;
    });

    function addToCart() {
      console.log("From Product");
      emit("add-to-cart", price.value);
    }

    return {
      // exposed to template
      cart,
      inStock,
      image,
      product,
      price,
      addToCart,
      updateVariantId,
    };
  },
  template: `
  <div class="product" v-bind:class="{ premium : isPremium }">
  <img class="image" v-bind:src="image.src" alt="" />
  <div class="content">
    <h2>{{ product.title }}</h2>

    <section>
      <h3 class="sr-only">Product description</h3>

      <!-- In Stock -->
      <p v-if="inStock === true" class="badge in-stock">
        In stock add add
      </p>
      <p v-else class="badge out-stock">Out of stock</p>

      <p>{{ product.description}}</p>

      <ul>
        <li v-for="productDetail in product.details">
          {{ productDetail }}
        </li>
      </ul>
    </section>

    <section>
      <h3 class="sr-only">Product variants</h3>

      <ul class="variants-selector">
        <li v-for="variant, index in product.variants">
          <button v-on:click="updateVariantId(variant.id)">
            <img v-bind:src="variant.selector.src" alt="" />
            <span class="sr-only"> {{ variant.flavour }}</span>
          </button>
        </li>
      </ul>
    </section>

    <section>
      <h3 class="sr-only">Product price</h3>
      <div class="price-section">
        <p class="price">\${{ price }}</p>
        <button
          v-bind:disabled="!inStock"
          v-on:click="addToCart"
          class="btn-primary"
        >
          Add to cart
        </button>
      </div>
    </section>
  </div>
</div>
    `,
});
