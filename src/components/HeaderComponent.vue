<template>
    <header class="p-3  border-bottom">
        <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
            <p class="nav col-11 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 text-end"></p>

            <button type="button" class="btn btn-primary" @click="handleSignOut">Log Out</button>

        </div>
        </div>
  </header>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';

export default{
    name:'HeaderComponent',
    methods: {
      async handleSignOut() {
        const auth = getAuth();
        try {
          await signOut(auth);
          this.$router.push('/');
        } catch (error) {
          console.error(error.message);
        }
      },
    }
}

</script>