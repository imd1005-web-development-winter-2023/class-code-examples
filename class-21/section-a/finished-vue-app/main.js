const { createApp, reactive, computed, ref } = Vue;

createApp({
  setup() {
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
      cart.value += 1;
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
}).mount("#app");
