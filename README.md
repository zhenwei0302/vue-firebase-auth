# Vue.js with Firebase Authentication OAuth

This project demonstrates a simple Vue.js application with Firebase authentication. It includes a login page where users can authenticate using their Google account, and a home page where users can fill out a basic form after successful authentication.

## Application 
See [the project](https://vue-firebase-auth-xi.vercel.app/).
![Capture](https://github.com/zhenwei0302/vue-firebase-auth/assets/92962254/ac44120c-bc71-4992-976e-255acf6f64b3)

## Installation

 1. Clone the repository:
```
git clone https://github.com/zhenwei0302/vue-firebase-auth.git
```

 2. Navigate to the project folder:
```
cd vue-firebase-auth
```

 3. Install dependencies:
```
npm install
```

 4. Run the application:
```
npm run serve
```

## Usage
### Login Page
- Access the login page by navigating to the root URL.
- Click on the "Login with Google" button to authenticate using your Google account.
- Upon successful authentication, you will be redirected to the home page.

### Home Page
- After logging in, you will be redirected to the home page.
- The home page displays a form with auto-filled inputs for username and email using the authenticated user's information.

### Vue Router
- Vue Router is utilized to ensure that the home page can only be accessed when authenticated.

## Technologies Used
- Vue.js
- Firebase Authentication
- Vue Router


