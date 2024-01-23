<template>
    <section class="vh-100">
        <div class="container-fluid h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid" alt="Sample image">
            </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <p style="font-size: 30px;">Welcome to EliteHire Solutions</p>
                    <p style="font-size: 20px;">
                    As a leading job agency, we understand the dynamic nature of the job market and are committed to facilitating meaningful connections that propel both employers and job seekers to new heights.
                    </p>

                    <div class="divider d-flex align-items-center my-4"></div>

                    <form>
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-normal mb-0 ms-4 me-3">Sign in with</p>
                        <button type="button" class="btn btn-primary rounded-circle" @click="handleSignInGoogle">
                        <font-awesome-icon icon="fa-brands fa-google" />
                        </button>
                        <p class="lead fw-normal mb-0 ms-3">to explore more opportunity !</p>
                    </div>
                    </form>
                </div>
            </div>
        </div>      
    </section>
</template>

<script>
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

firebaseConfig

const provider = new GoogleAuthProvider();
const auth = getAuth();

export default {
  methods: {
    handleSignInGoogle() {
      signInWithPopup(auth, provider)
        .then((result) => {   
            
        this.$store.dispatch('setUser', result);

        this.$router.push('/home');
        }).catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.divider:after,
.divider:before {
content: "";
flex: 1;
height: 1px;
background: #eee;
}
.h-custom {
height: calc(100% - 15%);
}
@media (max-width: 450px) {
.h-custom {
height: 100%;
}
}
</style>