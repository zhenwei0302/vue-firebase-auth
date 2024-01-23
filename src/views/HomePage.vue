
<template>
    
    <HeaderComponent/>
    
    <FormComponent/>

</template>
  
<script>
  import { getAuth, signOut } from 'firebase/auth';
  import  HeaderComponent  from '../components/HeaderComponent.vue'
  import  FormComponent  from '../components/FormComponent.vue'

  export default {
    components:{
        HeaderComponent,FormComponent
    },
    mounted() {
    // Add an event listener for the popstate event
    window.addEventListener('popstate', this.handleBackButton);
    },

    data() {
    return {
      form:{
        inputName: '',
        inputEmail:''
      } 
    }},
    
    methods: {
     
      async handleBackButton() {

      const auth = getAuth();
        try {
          await signOut(auth);
          this.$router.push('/');
        } catch (error) {
          console.error(error.message);
        }
     
    },
    },

  };</script>
  