<template>
    <div>
      <h2>Registration Form</h2>
  
      <form @submit.prevent="submitForm">
        <!-- Full Name -->
        <label for="full-name">Full Name:</label><br />
        <input
          type="text"
          class="fullnameclass"
          id="full-name"
          v-model="form.fullName"
          required
        /><br /><br />
  
        <!-- Email -->
        <label for="email">Email:</label><br />
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
        /><br /><br />
  
        <!-- Password -->
        <label for="password">Password:</label><br />
        <input
          type="password"
          id="password"
          v-model="form.password"
          required
        /><br /><br />
  
        <!-- Gender -->
        <label>Gender:</label><br />
        <input type="radio" id="male" value="male" v-model="form.gender" required />
        <label for="male">Male</label><br />
        <input type="radio" id="female" value="female" v-model="form.gender" />
        <label for="female">Female</label><br /><br />
  
        <!-- Age -->
        <label for="age">Age:</label><br />
        <input type="number" id="age" v-model="form.age" min="18" max="100" required />
        <br /><br />
  
        <!-- Country -->
        <label for="country">Country:</label><br />
        <select id="country" v-model="form.country" required>
          <option value="">Select your country</option>
          <option value="india">India</option>
          <option value="usa">America</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
        <br /><br />
  
        <!-- Languages -->
        <label>Languages Known:</label><br />
        <div v-for="lang in languageOptions" :key="lang">
          <input
            type="checkbox"
            :id="lang"
            :value="lang"
            v-model="form.languages"
          />
          <label :for="lang">{{ lang }}</label>
        </div>
        <br />
  
        <!-- Phone -->
        <label for="phone">Phone Number:</label><br />
        <input type="tel" id="phone" v-model="form.phone" />
        <br /><br />
  
        <!-- Comments -->
        <label for="comments">Comments or Additional Info:</label><br />
        <textarea
          id="comments"
          rows="6"
          cols="50"
          v-model="form.comments"
        ></textarea>
        <br /><br />
  
        <!-- Resume -->
        <label for="resume">Upload Resume:</label><br />
        <input type="file" id="resume" @change="handleFile" />
        <br /><br />
  
        <!-- Terms -->
        <input type="checkbox" id="terms" v-model="form.termsAccepted" required />
        <label for="terms">I accept the terms and conditions</label><br /><br />
  
        <!-- Buttons -->
        <button type="reset" @click="resetForm">Reset</button>
        <button type="submit">Submit</button>
      </form>
  
      <!-- Table -->
      <div style="margin-top: 30px"></div>
      <table cellpadding="8" >
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Country</th>
            <th>Languages</th>
            <th>Phone</th>
            <th>Comments</th>
            <th>Resume</th>
            <th>Terms</th>
          </tr>
        </thead>
  
        <tbody>
          <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ item.fullName }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.password }}</td>
            <td>{{ item.gender }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.country }}</td>
            <td>{{ item.languages.join(', ') }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.comments }}</td>
            <td>{{ item.resume }}</td>
            <td>{{ item.termsAccepted ? "Yes" : "No" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script setup>
  import { ref } from "vue";
  
  const form = ref({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    country: "",
    languages: [],
    phone: "",
    comments: "",
    resume: "",
    termsAccepted: false,
  });
  
  const tableData = ref([]);
  
  const languageOptions = ["English", "Hindi", "French"];
  
  const handleFile = (e) => {
    const file = e.target.files[0];
    form.value.resume = file ? file.name : "";
  };
  
  const submitForm = () => {
    tableData.value.push({ ...form.value });
    resetForm();
  };
  
  const resetForm = () => {
    form.value = {
      fullName: "",
      email: "",
      password: "",
      gender: "",
      age: "",
      country: "",
      languages: [],
      phone: "",
      comments: "",
      resume: "",
      termsAccepted: false,
    };
  };
  </script>
  
  