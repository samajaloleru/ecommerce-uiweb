<template>
  <div>
    <footer class="footer footer-white footer-big">
      <div class="container">
        <div class="content">
          <div class="row">
            <div class="col-md-3">
              <a href="#pablo">
                <h5>Ecommerce Web</h5>
              </a>
              <p>Probably the best Ecommerce site in the world! We know you've been waiting for it, so don't be shy!</p>
            </div>
            <div class="col-md-2">
              <h5>About</h5>
              <ul class="links-vertical">
                <li>
                  <a href="#pablo">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    Presentation
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5>Market</h5>
              <ul class="links-vertical">
                <li>
                  <a href="#pablo">
                    Sales FAQ
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    How to Register
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    Sell Goods
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    Receive Payment
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    Transactions Issues
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-2">
              <h5>Legal</h5>
              <ul class="links-vertical">
                <li>
                  <a href="#pablo">
                    Transactions FAQ
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#pablo">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Subscribe to Newsletter</h5>
              <p>
                Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
              </p>
              <form class="form form-newsletter" method="" action="">
                <div class="form-group">
                  <input type="email" class="form-control" placeholder="Your Email...">
                </div>
                <button type="button" class="btn btn-primary btn-icon btn-round" name="button">
                  <i class="now-ui-icons ui-1_email-85"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <ul class="social-buttons">
          <li>
            <a href="#pablo" class="btn btn-icon btn-neutral btn-twitter btn-lg">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#pablo" class="btn btn-icon btn-neutral btn-facebook btn-lg">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#pablo" class="btn btn-icon btn-neutral btn-dribbble btn-lg">
              <i class="fab fa-dribbble"></i>
            </a>
          </li>
          <li>
            <a href="#pablo" class="btn btn-icon btn-neutral btn-google btn-lg">
              <i class="fab fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="#pablo" class="btn btn-icon btn-neutral btn-youtube btn-lg">
              <i class="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
        <div class="copyright pull-center">
          Copyright &copy; {{date}}
          Creative Tim All Rights Reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script type="text/javascript">
  export default {
    data(){return{ contact:{firstname:"",lastname:"", email:""},date: new Date().getFullYear()}},
    methods:{
      submitContact() {
          const app = this;
          app.notifications = [];
          HTTP.post("https://cp.essentials.ng/api/signup-newsletter", app.contact,{withCredentials: true}).then((response) => {
              console.log(response.data);
              app.notifications.push(response.data)
          }).catch((e) => {
              app.status = {}
              console.log(e)
          })
      },
      scrollTop(){
        const   scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( 300 / 15 ),
        cosParameter = scrollHeight / 2;
        var scrollCount = 0, scrollMargin,
        scrollInterval = setInterval( function() {
            if ( window.scrollY != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
        }, 15 );
      }
    }
  }
</script>
