class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .p-no-margin {
      	margin-bottom: 0px;
      }

      .fa {
      	width: 15px;
      	margin-right: 10px;
      }
      footer {
      	background-color: #fbfbfd;
      	color: #343a40;
      	border-top: 1px solid #ececec;
      }
      footer ul li a {
      	color: #343a40;
      }
      footer ul li a:hover {
      	color: #568056;
      	text-decoration: none;
      	font-weight: 500;
      }
      .input-group {
      	max-width: 300px;
      }
      .footer-copyright {
      	font-size: 0.9rem;
      }
      .btn-outline-dark {
      	color: #343a40;
      	background-color: transparent;
      	background-image: none;
      	border-color: #343a40;
      }


      </style>

      <!-- Footer -->
      <footer class="page-footer font-small pt-5 mt-5">
        <div class="text-center text-md-left container-fluid">
          <div class="row">
            <div class="col-lg-5 col-md-5 mb-sm-5 mb-5">
              <!--
              <h6 class="text-uppercase">Thanks for Viewing</h6>
              -->
              <p> <strong>By Day: </strong> UX Researcher at Motional.
              <br><strong>By Night: </strong> Hosting Pass the Compassion podcast, crafting mocktails, and rating Matcha from different coffee shops.</p>
              <!-- Left Col Text -->
              <p>I'm currently available for freelance UXR, User Generated Content, and Holistic Nutrition Consulting. Message me for more information.</p>
              <a href="mailto:alysonbortone@gmail.com?Subject=Hello!" class="btn btn-dark" role="button" aria-pressed="true" target="_top"><span class="fa fa-envelope"></span>Say Hello!</a>
            </div>
            <div class="offset-lg-3 offset-md-1 col-lg-2 col-md-3 mb-md-0 mt-xs-3">
              <h5>Find Me On</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/alysonbortone/" target="_blank"><span class="fa fa-linkedin"></span>LinkedIn</a>
                </li>
                <li>
                  <a href="https://open.spotify.com/show/6oHCQFN8f1qDmYJeqI5l9y?si=-Fyuf3AfQi-LdhLBCd2wJw&nd=1&dlsi=30f0f15920964a98" target="_blank"><span class="fa fa-podcast"></span>Podcast</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-3 mb-md-0 mb-3">

              <h5 class="text-uppercase">___________</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="https://www.instagram.com/stralify/?igsh=MTYxNDR2dDloOW1qYg%3D%3D&utm_source=qr" target="_blank"><span class="fa fa-instagram"></span>Creative</a>
                </li>
                <li>
                  <a href="https://www.behance.net/alysonbortone" target="_blank"><span class="fa fa-behance"></span>Behance</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center mb-3"> &copy; 2023 Copyright: Website designed and developed by Julia Paranay</div>
      </footer>
      <!-- Footer -->
    `;
  }
}

customElements.define('footer-component', Footer);
