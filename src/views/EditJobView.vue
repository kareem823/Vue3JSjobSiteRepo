<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';
import {useToast} from 'vue-toastification';
import 'vue-toastification/dist/index.css';
//form validation tool
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const jobId = route.params.id;

const state = reactive({
    job : {},
    isLoading: true
})

const Form= reactive({
        type: 'Full-Time',
        title: '',
        description: '',
        salary: '',
        location: 'Ontario, Canada',
        company: {
        name: 'Echo Jobs',
        description: '',
        contactEmail: '',
        contactPhone: '',
        },
    });




    const submitForm = async () => {
        const updateJob = {
            type: Form.type,
            title: Form.title,
            location: Form.location,
            description: Form.description,
            salary: Form.salary,
            company: {
                name: Form.company.name,
                description: Form.company.description,
                contactEmail: Form.company.contactEmail,
                contactPhone: Form.company.contactPhone,
            
            }
        }


        try {
            const response = await axios.put(`/api/jobs/${jobId}`, updateJob );
            // @todo - show toast
            toast.success('Job Updated successfully');
            router.push(`/jobs/${response.data.id}`);
        } catch (error) {
            //@todo - show toast
            toast.error('Job not updated');
            console.error(error);
        } 

    }

    onMounted(async () => {
        try {
            const response = await axios.get(`/api/jobs/${jobId}`);
            state.job = response.data;
            //populate the form with the job data
            Form.title = state.job.title;
            Form.type = state.job.type;
            Form.description = state.job.description;
            Form.salary = state.job.salary;
            Form.location = state.job.location;
            Form.company.name = state.job.company.name;
            Form.company.description = state.job.company.description;
            Form.company.contactEmail = state.job.company.contactEmail;
            Form.company.contactPhone = state.job.company.contactPhone;

        }
        catch (error) {
            console.error('Error fetching job', error);
        }
        finally {
            state.isLoading = false;
        }

    })

</script>

<template>
  <section class="bg-blue-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <h2 class="form-title">Edit Job</h2>

          <div class="form-group">
            <label for="type" class="form-label">Job Type</label>
            <select v-model="Form.type" 
            id="type" name="type" class="form-input" required>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Job Listing Name</label>
            <input
            v-model="Form.title"
              type="text"
              id="name"
              name="name"
              class="form-input"
              placeholder="eg. Beautiful Apartment In Miami"
              required
            />
          </div>

          <div class="form-group">
            <label for="description" class="form-label">Description</label>
            <textarea
            v-model = "Form.description"
              id="description"
              name="description"
              class="form-input"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="salary" class="form-label">Salary</label>
            <select 
            v-model="Form.salary"
            id="salary" name="salary" class="form-input" required>
              <option value="Under $50K">under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class="form-group">
            <label class="form-label">Location</label>
            <input
              type="text"
              v-model="Form.location"

              id="location"
              name="location"
              class="form-input"
              placeholder="Company Location"
              required
            />
          </div>

          <h3 class="form-subtitle">Company Info</h3>

          <div class="form-group">
            <label for="company" class="form-label">Company Name</label>
            <input
              type="text"
              v-model="Form.company.name"

              id="company"
              name="company"
              class="form-input"
              placeholder="Company Name"
            />
          </div>

          <div class="form-group">
            <label for="description" class="form-label">Company Description</label>
            <textarea
              id="description"
              v-model="Form.company.description"

              name="description"
              class="form-input"
              rows="4"
              placeholder="What does your company do?"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="contactEmail" class="form-label">Contact Email</label>
            <input
              type="email"
              v-model="Form.company.contactEmail"
              id="contactEmail"
              name="contactEmail"
              class="form-input"
              placeholder="Email address for applicants"
              required
            />
          </div>

          <div class="form-group">
            <label for="contactPhone" class="form-label">Contact Phone</label>
            <input
              type="tel"
              v-model="Form.company.contactPhone"
              id="contactPhone"
              name="contactPhone"
              class="form-input"
              placeholder="Optional phone for applicants"
            />
          </div>

          <div>
            <button class="form-button" type="submit">Update Job</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form-container {
  @apply bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0;
}

.form-title {
  @apply text-3xl text-center font-semibold mb-6;
}

.form-subtitle {
  @apply text-2xl mb-5;
}

.form-group {
  @apply mb-4;
}

.form-label {
  @apply block text-gray-700 font-bold mb-2;
}

.form-input {
  @apply border rounded w-full py-2 px-3 mb-2;
}

.form-button {
  @apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full;
}
</style>
