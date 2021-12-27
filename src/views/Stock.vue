<template>
  <div>
    <div v-if="shouldShowParagraph">
      <p>This is a sample paragraph</p>
      <input v-model="name" style="background-color: bisque" />
    </div>
    <button @click="showParagraph">Show/Hide paragraph</button>
  </div>
</template>

<script>
export default {
  name: "Stock",

  props: {},

  components: {},

  data() {
    return {
      name: "",
      age: "",
      mobile: "",
      subjects: [],
      batch: {},
      shouldShowParagraph: false,
      amountInRupees: 290,
    };
  },

  methods: {
    showParagraph() {
      this.shouldShowParagraph = !this.shouldShowParagraph;
    },
  },

  computed: {
    amountInDollars() {
      return this.amountInRupees;
    },
  },

  watch: {
    subject() {},
  },

  created() {},
};
</script>

<style scoped></style>
