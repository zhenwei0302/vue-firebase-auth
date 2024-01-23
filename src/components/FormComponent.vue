<template>
    <div v-if="showAlert" class="alert alert-danger mt-3" role="alert">
      Please fill in all the required fields.
    </div>

    <div class="mx-5">
        <h3 class="mb-5" style="text-align:left">Personal Information</h3>
        <form class="row g-3" @submit.prevent="submitForm">
            <div class="col-md-6">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" v-model="form.userName">
            </div>

            <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4" v-model="form.userEmail">
            </div>

            <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress"  v-model="form.userAddress">
            </div>

            <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"  v-model="form.userAddressTwo">
            </div>

            <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity" v-model="form.userCity">
            </div>

            <div class="col-md-4">
            <label for="inputState" class="form-label">State</label>
            <select id="inputState" class="form-select"  v-model="form.userState">
                <option selected>Kuala Lumpur</option>
                <option>Selangor</option>
            </select>
            </div>

            <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip" v-model="form.userZip">
            </div>
            
            <div class="col-12 mt-5">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default{
    name:'FormComponent',
    data(){
        return{
            showAlert: false,
            form:{
                userName: '',
                userEmail:'',
                userAddress:'',
                userAddressTwo:'',
                userCity:'',
                userState:'',
                userZip:'',
            } 
        }
    },
    method:{
        submitForm() {
         console.log('Form submitted',this.form);   
        },
    },
    computed: {
        ...mapGetters(['getUser'])
    },
    created() {
        // Initialize the local data property with the value from Vuex
        this.form.userName = this.getUser.user.displayName;    
        this.form.userEmail = this.getUser.user.email;  
    },

}
</script>