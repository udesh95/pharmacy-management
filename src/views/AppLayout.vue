<template>
  <div class="flex">
    <div class="h-full">
      <side-bar />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  name: "AppLayout",

  components: { SideBar },

  methods: {},

  computed: {},

  data() {},
};
</script>

<style scoped></style>
