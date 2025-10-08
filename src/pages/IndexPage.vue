<template>
<<<<<<< HEAD
  <q-page class="row items-center justify-center">
    <q-card style="min-width: 360px; max-width: 720px;">
      <q-card-section>
        <div class="text-h6">Basic Form — Wannapa Chattong</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="onSubmit" ref="formRef">
          <q-input v-model="form.studentId" label="Student ID" lazy-rules :rules="[val => !!val || 'Required']" />
          <q-input v-model="form.firstName" label="First name (English)" lazy-rules :rules="[val => !!val || 'Required']" />
          <q-input v-model="form.lastName" label="Last name (English)" lazy-rules :rules="[val => !!val || 'Required']" />
          <q-input v-model="form.email" label="Email" type="email" />
          <div class="row items-center q-gutter-sm q-mt-md">
            <q-btn label="Submit" type="submit" color="primary" />
            <q-btn label="Reset" flat @click="resetForm" />
          </div>
        </q-form>
      </q-card-section>

      <q-separator />
      <q-card-section>
        <div v-if="submitted">
          <div><strong>Submitted data:</strong></div>
          <div>Student ID: {{ form.studentId }}</div>
          <div>Name: {{ form.firstName }} {{ form.lastName }}</div>
          <div>Email: {{ form.email }}</div>
        </div>
      </q-card-section>
    </q-card>
=======
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
>>>>>>> test
  </q-page>
</template>

<script setup>
<<<<<<< HEAD
import { ref } from 'vue'

const form = ref({
  studentId: '',
  firstName: '',
  lastName: '',
  email: ''
})
const submitted = ref(false)
const formRef = ref(null)

function onSubmit () {
  submitted.value = true
  // (สามารถทำ API call ได้ที่นี่)
}

function resetForm () {
  form.value = { studentId: '', firstName: '', lastName: '', email: '' }
  submitted.value = false
}
=======
//
>>>>>>> test
</script>
