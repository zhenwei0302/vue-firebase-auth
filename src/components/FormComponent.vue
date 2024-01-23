<template>
    <div v-if="showAlert" class="alert alert-danger" role="alert">
      Please fill in all the required fields.
    </div>

    <div  v-if="showSuccess" class="alert alert-success" role="alert">
       Submitted successfully !
    </div>

    <div class="mx-5">
        <h3 class="mt-3 mb-5" style="text-align:left">Personal Information</h3>
        <form class="row g-3" @submit.prevent="submitForm">
            <div class="col-md-6">
            <label for="inputName" class="form-label">*Name</label>
            <input type="text" class="form-control" :class="{ 'empty-input': isInputEmpty('userName') }" id="inputName" v-model="form.userName">
            </div>

            <div class="col-md-6">
            <label for="inputEmail4" class="form-label">*Email</label>
            <input type="email" class="form-control" id="inputEmail4" :class="{ 'empty-input': isInputEmpty('userEmail') }" v-model="form.userEmail">
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
                <option v-for="option in optionsData" :key="option.value" :value="option.value">{{ option.label }}</option>
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
import { optionsData } from '../enum/options'

export default{
    name:'FormComponent',
    data(){
        return{
            optionsData,
            showAlert: false,
            showSuccess: false,
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
    methods:{
        submitForm() {
            //const areEmptyForm = (obj) => Object.entries(obj).every(([key, value]) => key === 'userState' || value === '');
            //const submitData = JSON.parse(JSON.stringify(this.form));

            if(this.form.userName === '' || this.form.userEmail === '' ){
                this.showAlert = true;
                this.showSuccess = false;
            }
            else{
                this.showAlert = false;
                this.showSuccess = true;
            }

        },
        isInputEmpty(fieldName) {
            return this.form[fieldName].trim() === '';
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

<style>
.empty-input {
  border: 2px solid red; /* Add your preferred styling for highlighting the empty input */
}
</style>