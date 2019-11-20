<template>
  <nav class="navbar navbar-expand-lg bg-primary fixed-top navbar-transparent" color-on-scroll="100">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="" rel="tooltip" title="" data-placement="bottom" target="_blank">
          <img class="img " src="@/assets/img/logo.png" />
        </a>
        <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link  class="nav-link text-dark font-weight-bold" style="font-size:15px" to="/"> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link text-dark font-weight-bold" style="font-size:15px" to="/about"> About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link text-dark font-weight-bold" style="font-size:15px" to="/success">Success Stories</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link text-dark font-weight-bold" style="font-size:15px" to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import appnavbar from "@/components/app-navbar";
import appfooter from "@/components/app-footer";
  const submenu = [        
        {to:'/',icon:'',title:'Home'},        
        {to:'/about',icon:'',title:'About Us'},        
        {to:'/success',icon:'',title:'Success Stories'},        
        {to:'/contact',icon:'',title:'Contact Us'},        
        ]

export default {
	components: {notify, appnavbar, appfooter},
	data(){ return { formSignup:{Username:"x",Password:"x",Email:""}, notifications:[]}},
	methods: {
      signup() {
		const app = this;
		if (app.formSignup.Email !== "") {
			app.formSignup.Username = app.formSignup.Email;
			app.formSignup.Password = app.formSignup.Email;
		}
        HTTP.post('/api/signup', app.formSignup ,{withCredentials: true}).then(response => {
          console.log(response)
          app.notifications.push(response.data)
		  setTimeout(checkRedirect(response.data),1500)
          if (response.data.Code == 200) {
			  app.formSignup.Username = "x";
			  app.formSignup.Password = "x";
			  app.formSignup.Email = "";
		  }
        }).catch(e => {
          console.log(e)
          this.error = e
          // this.errors.push(e)
        })
      }
    }
}
</script>