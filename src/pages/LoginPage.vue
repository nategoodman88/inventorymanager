<template>
  <!-- TODO: Make this whole thing more aesthetically pleasing -->
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center q-pa-md" style="height: 100vh">
        <q-form class="full-width" style="max-width: 400px">
          <q-input
            rounded
            standout
            v-model="username"
            label="Username"
            filled
            :rules="[
              (val) => (val && val.length > 0) || 'Username is required',
            ]"
          />
          <q-input
            rounded
            standout
            v-model="password"
            label="Password"
            filled
            :type="isPwd ? 'password' : 'text'"
            :rules="[
              (val) => (val && val.length > 0) || 'Password is required',
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-btn
            color="black"
            label="Login"
            class="full-width q-mt-md"
            @click="login()"
          />
        </q-form>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup language="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const username = ref('');
const password = ref('');
const isPwd = ref(true);
const router = useRouter();

const login = async () => {
  const response = await axios.post('http://localhost:1337/api/auth/local', {
    identifier: username.value,
    password: password.value,
  });

  if (response.status == 200) {
    router.push('/home');
  } else {
    console.log('Invalid credentials! ' + response.status); //TODO: Change this to a banner or alert or something
  }
};
</script>
