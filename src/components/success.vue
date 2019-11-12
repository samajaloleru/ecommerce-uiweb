<template>
	<section class="">
    <appnavbar></appnavbar>
		<div class="section" style="margin-top:70px">
        <div class="container">
					<div class="col-sm-8 ml-auto mr-auto">
						<h5 class="text-center">We absolutely love what we do and we are so thankful for the kind words our beneficiaries share along the way. 
							Some of the stories we receive are powerful reminders of how much of an impact financial hardships have on individuals and families 
							and it is always refreshing when we hear someone say that they’ve conquered their debt and are well on track for financial success! 
							We are happy empowering people out of poverty and giving them once again the financial freedom that everyone deserves.</h5>
					</div>
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div class="media-area">
                <h2 class="title text-primary text-center">Success Stories</h2>
                <div class="media mt-3">
                  <a class="pull-left">
                    <div class="avatar">
                      <img class="media-object " src="@/assets/img/denise.jpg" alt="..." />
                    </div>
                  </a>
                  <div class="media-body">
                    <p class="font-weight-bold text-dark">This opportunity has given me another chance that I feared I might never have again. 
											You are never too old to make a better life for yourself and also a better life for everyone you come in contact with. 
											Thank you so much Redemption Network
										</p>
										<h4 class="media-heading pull-right">Denis 
											<small class="text-muted">&middot; – Baton Rogue, Louisiana</small>
                    </h4>  
                  </div>
                </div>                
                <div class="media mt-3">
                  <a class="pull-left">
                    <div class="avatar">
                      <img class="media-object img-raised" src="@/assets/img/aaron.jpg" alt="..." />
                    </div>
                  </a>
                  <div class="media-body">
                    <p class="font-weight-bold text-dark">All I can begin to start out with is “Thank You”. I was in a bad debt place before I heard about Redemption Network. 
											I knew it was impossible to pay off these debts without help. Laid off a few years ago and I've always been behind on my bills. 
											This was the best decision I have ever made. Indeed, I have a fresh start now. Thank you, thank you, thank you!     
										</p>
										<h4 class="media-heading pull-right">Aaron  
											<small class="text-muted">&middot;– Ontario, Canada</small>
                    </h4>  
                  </div>
                </div>                
                <div class="media mt-3">
                  <a class="pull-left">
                    <div class="avatar">
                      <img class="media-object img-raised" src="@/assets/img/keisha.jpeg" alt="..." />
                    </div>
                  </a>
                  <div class="media-body">
                    <p class="font-weight-bold text-dark">I am very grateful for all the help I have received. I am also glad I could participate in sending supplies to the needy, 
											that was something I never thought I could do for people considering my financial situation before I got help. 
											It is all too easy to become discouraged and to think poorly of one’s self in the event of overwhelming debt. 
											Therefore, my deepest thanks and gratitude to Redemption network.
										</p>
										<h4 class="media-heading pull-right">Keisha  
											<small class="text-muted">&middot;– Seattle, Washington</small>
                    </h4>  
                  </div>
                </div>                
                <div class="media mt-3">
                  <a class="pull-left">
                    <div class="avatar">
                      <img class="media-object img-raised" src="@/assets/img/karen.jpeg" alt="..." />
                    </div>
                  </a>
                  <div class="media-body">
                    <p class="font-weight-bold text-dark">God bless Redemption Network, for your help to making me debt free.
										</p>
										<h4 class="media-heading pull-right"> Karen 
											<small class="text-muted">&middot;- Scarsdale, New York </small>
                    </h4>  
                  </div>
                </div>                
                <div class="media mt-3">
                  <a class="pull-left">
                    <div class="avatar">
                      <img class="media-object img-raised" src="@/assets/img/lisa.jpg" alt="..." />
                    </div>
                  </a>
                  <div class="media-body">
                    <p class="font-weight-bold text-dark">Thank you for everything you’ve done to help us! 
											We’re both so relieved to have this past us. It’s like a dream come true!
										</p>
										<h4 class="media-heading pull-right"> Lisa  
											<small class="text-muted">&middot;- Honolulu, Hawaii</small>
                    </h4>  
                  </div>
                </div>                
                <div class="media mt-3">
                  <a class="pull-left">
                    <div class="avatar">
                      <img class="media-object img-raised" src="@/assets/img/naomi.jpg" alt="..." />
                    </div>
                  </a>
                  <div class="media-body">
                    <p class="font-weight-bold text-dark">Thank you so much for all your help. We were about to give up. 
											We are honest hard working people and never intended for all this to happen. Thanks again!
										</p>
										<h4 class="media-heading pull-right"> Naomi  
											<small class="text-muted">&middot;- Los Angeles, California </small>
                    </h4>  
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>  
    
    <appfooter></appfooter>
	</section>
</template>

<script>
import {HTTP} from '@/common';
import notify from "@/components/notify"
import appnavbar from "@/components/app-navbar";
import appfooter from "@/components/app-footer";

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