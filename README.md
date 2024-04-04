# :rocket: IN THIS REPOSITORY
## 🧬 Diet Suggestion App 

### 🩸You Can See the App in 📌[Netlify.com](diet-suggestion-app-frontend.netlify.app/)

## 📂 Folder Structure:
+ Index.html
+ Main.jsx
+ App.jsx
+ src
  + Components  
    + NavbarComponent.jsx
    + Sidebar.jsx
  + Pages
    + LandingPage.jsx
    + Register.jsx
    + Login.jsx
    + ForgetPassword.jsx
    + ResetPassword.jsx
    + DashboardLayout.jsx 
    + Recipes.jsx
    + FatBurners.jsx
    + GmPlan.jsx
    + DoughnutChart.jsx
    + LineChart.jsx  
    + BMI and BMR Calculator.jsx
    + Footer.jsx
    + Error.jsx
--- 
**🛗 Third Parties:**
+ React Router Dom
+ React Bootstrap
+ React Icons
+ React Toastify
+ Formik
+ Yup
+ Axios
+ Chart.js
+ React ChartJs-2
``` javascript
"dependencies": {
    "axios": "^1.6.8",
    "chart.js": "^4.4.2",
    "formik": "^2.4.5",
    "react": "^18.2.0",
    "react-bootstrap": "^2.10.2",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "react-router-dom": "^6.22.3",
    "react-toastify": "^10.0.5",
    "yup": "^1.4.0"
  },
```
## 🎈 Features:
+ **📝Register**
+ **🔐Login**
+ **🔑 Forget Password**
+ **🔏 Reset Password**
+ **🪬 DashboardLayout**
  + **Recipes For Diet Control**
  + **Fat Burner** 
    + **Veg && Non-veg Foods** 
    +  **Vegetables**
  + **GM Weight Loss Plans For Seven Weeks**
  + **Seven Weeks Weight Loss Chart**
  + **Seven Weeks Gain Calories and Proteins Chart**
  + **BMI and BMR Calculators**
  + **Footers with Contact Address and Social Media Platforms**
---   
**Introduction:**

+ App is open with `Landing Page` 
  + In Landing Page have Logo and Titles, To below of this have a Register and login buttons
  
**Register User:** 
+ If User is new for this App Should `Register` First

   **Required Details For Registration**
    + Name
    + Contact Number
    + Gender 
    + Email
    + Password  
   
**User Login:**
+ If User is already Registered User then Move on to `Login`
  + Email
  + Password 
+ After a successful login User can use this app 
+ If User Forget Their Password Move on to Forget Password By clicking Forget Password Link
+ In a Forget Password page User Can enter Registered Email 
+ In Email User Can Get A Reset Password Page URL(Route)
+ Validating Random String or Token 
+ After Validate Token is Valid, Allow them to reset their password, Other wise move to login page
+ After Reset Password Allow user to login into App `( Dashboard Layout )`
  
**DashboardLayout:**
+ Navbar
+ Sidebar
  + Recipes
  + Fat Burners
  + Gm Plans
  + BMI Calculator
  + BMR Calculator
  + Weight Loss Chart
  + Calories and Proteins Chart
  + Logout
---
**Thank You..!!** 


