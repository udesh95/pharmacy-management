<template>
  <v-card class="mx-auto h-screen" width="256">
    <v-navigation-drawer class="deep-purple accent-4" dark permanent>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
        { title: "Drug-Issue", icon: "mdi-account-box", route: "/drug-issue" },
        { title: "Stock", icon: "mdi-gavel", route: "/stock" },
      ],
    };
  },
};
</script>

<style scoped></style>
