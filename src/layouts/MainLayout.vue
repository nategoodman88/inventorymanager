<template>
  <q-toolbar class="bg-grey-9 text-white">
    <q-btn flat round dense>
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title> Toolbar </q-toolbar-title>
    <q-btn flat round dense>
      <q-icon name="more_vert" />
    </q-btn>
  </q-toolbar>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>
