//FROM JSON NAVIGATION LOADER
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "nav.json", true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);
        let navitems = response.nav;
        let navrightitem = response.navright;

        let output = '';
        let outputright = '';
        for(let i =0; i < navitems.length; i++) {
            output += `
            <li class="nav-item">
                <a class="nav-link" id="`+ navitems[i].name.replace(/\s/g, "") +`" href="#`+ navitems[i].name +`" onclick="load('`+ navitems[i].name + `');addclass(this); return false;">` + navitems[i].name + `</a>
            </li>
            `;
        }   
        for(let i =0; i < navrightitem.length; i++) {
            outputright += '<li class="nav-item"><a class="nav-link" href="">' + navrightitem[i].name + '</a></li>';
            if(i = 1) {
            outputright += '<li class="nav-item li-cust"><a class="nav-link btn btn-primary btn-nav-custom" href="">' + navrightitem[i].name + '</a></li>';
            }
        }
        document.querySelector(".addnav").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand align-middle" href="#">
                <img src="pomah.png" alt="" style="width: 128px; margin-top: 7px;">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav navbar-left"> 
                    ${output}
                </ul>
                <ul class="navbar-nav ml-auto nav-flex-icons">
                    ${outputright}
                </ul>
            </div>
        </nav>
        `; 
    }
};

//MAIN CONTENT PAGE
let contentDiv = document.querySelector(".addcontent");
let mainpage  = `
<div class="row no-mg">
<div class="col-5" style="background-color: #F6F8FC;">
    <div class="front-register-header">
        <div >
            <h2 class="front-register-h2">Register to Pomah</h2>
            <p class="front-register-text">Join to Pomah you will get the best recommendation for rent house in near of you.</p>
        </div>
        <div class="front-register-selectors">
            <a href="#" class="active-btn-reg-form" onclick="signfunc()">Register</a>
            <a href="#" onclick="loginfunc()">Login</a>
        </div>
        <form class="form-signup form-display">                     
                <div class="form-label-group">
                  <input type="text" class="form-control" id="label-name" placeholder="Enter your name" required autofocus>
                  <label for="label-name">Username</label>
                  <div class="testor">
                        <input type="checkbox" class="regular-checkbox ">
                    </div>
                </div>
                <div class="form-label-group">
                  <input type="email" id="label-email" class="form-control" placeholder="Your Email" required autofocus>
                  <label for="label-email">Email</label>
                  <div class="testor">
                      <input type="checkbox" class="regular-checkbox ">
                  </div>
                </div>
                <div class="form-label-group">
                  <input type="password" id="label-password" class="form-control" placeholder="Password" required>
                  <label for="label-password">Password</label>
                  <div class="testor">
                        <input type="checkbox" class="regular-checkbox ">
                    </div>
                </div>
                <button class="btn btn-lg btn-success btn-block btn-custom" type="submit">Register</button>
              </form>
              <form class="form-login form-display-none">                     
                <div class="form-label-group">
                  <input type="text" class="form-control" id="label-name" placeholder="Enter your name" required autofocus>
                  <label for="label-name">Username</label>
                  <div class="testor">
                        <input type="checkbox" class="regular-checkbox ">
                    </div>
                </div>
                <div class="form-label-group">
                  <input type="password" id="label-password" class="form-control" placeholder="Password" required>
                  <label for="label-password">Password</label>
                  <div class="testor">
                        <input type="checkbox" class="regular-checkbox ">
                    </div>
                </div>
                <button class="btn btn-lg btn-success btn-block btn-custom" type="submit">Register</button>
              </form>
    </div>
</div>

<div class="col-7 no-pd">
    
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100" src="caro1.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block caro-flex">
                    <div class="carosuler-desc-img">
                        <img src="carouseldescript.png" alt="">
                    </div>
                    <div class="carosuler-desc">
                        <h5>Best Price Guarantee</h5>
                        <p>Competetive price from extensive network budget hotels to 5 star hotels such as Ibis, Amaris, Santika Hotel with best price guarantee.</p>
                    </div>
                </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="caromain.png" alt="Second slide">
                    <div class="carousel-caption d-none d-md-block caro-flex">
                        <div class="carosuler-desc-img">
                            <img src="carouseldescript.png" alt="">
                        </div>
                        <div class="carosuler-desc">
                            <h5>Best Price Guarantee</h5>
                            <p>Competetive price from extensive network budget hotels to 5 star hotels such as Ibis, Amaris, Santika Hotel with best price guarantee.</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                <img class="d-block w-100" src="caro1.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block caro-flex">
                    <div class="carosuler-desc-img">
                        <img src="carouseldescript.png" alt="">
                    </div>
                    <div class="carosuler-desc">
                        <h5>Best Price Guarantee</h5>
                        <p>Competetive price from extensive network budget hotels to 5 star hotels such as Ibis, Amaris, Santika Hotel with best price guarantee.</p>
                    </div>
                </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="caro1.jpg" alt="Third slide">
                    <div class="carousel-caption d-none d-md-block caro-flex">
                        <div class="carosuler-desc-img">
                            <img src="carouseldescript.png" alt="">
                        </div>
                        <div class="carosuler-desc">
                            <h5>Best Price Guarantee</h5>
                            <p>Competetive price from extensive network budget hotels to 5 star hotels such as Ibis, Amaris, Santika Hotel with best price guarantee.</p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
</div>
`;
contentDiv.innerHTML = mainpage;

//CONTENT LOADER - to load content of current page
function load(page) {

if(page == "blog" || page == "Blog") {
let communityDiv = document.querySelector(".addcontent");
communityDiv.innerHTML = `
<div class="row no-mg blog-list">
        
<div class="blog-post">
    <div class="blog-image">
        <img src="caro1.jpg" alt="" style="max-width: 90%; border-radius: 50%;">
    </div>
    <div class="blog-contnet">
        <h2>Blog postas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique repellat id
                <span id="dots"><button onclick="myFunction()" id="myBtn">Read more..</button></span><span id="more">, quos provident facilis aliquam doloribus quis corrupti nemo iure in soluta magni numquam reiciendis commodi, debitis, consequatur laudantium?</span>
        </p>
    </div>
</div>

<div class="blog-post">
        <div class="blog-image">
            <img src="caro1.jpg" alt="" style="max-width: 90%; border-radius: 50%;">
        </div>
        <div class="blog-contnet">
            <h2>Blog postas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique repellat id
                    <span id="dots"><button onclick="myFunction()" id="myBtn">Read more..</button></span><span id="more">, quos provident facilis aliquam doloribus quis corrupti nemo iure in soluta magni numquam reiciendis commodi, debitis, consequatur laudantium?</span>
            </p>
        </div>
    </div>

    <div class="blog-post">
            <div class="blog-image">
                <img src="caro1.jpg" alt="" style="max-width: 90%; border-radius: 50%;">
            </div>
            <div class="blog-contnet">
                <h2>Blog postas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque similique repellat id
                        <span id="dots"><button onclick="myFunction()" id="myBtn">Read more..</button></span><span id="more">, quos provident facilis aliquam doloribus quis corrupti nemo iure in soluta magni numquam reiciendis commodi, debitis, consequatur laudantium?</span>
                </p>
            </div>
        </div>
</div>
`;

};

if(page == "Find Pomah" || page == "Find Pomah") {
    let contentDiv = document.querySelector(".addcontent");
    contentDiv.innerHTML = mainpage;

};

if(page == "community" || page == "Community") {

    let contentDiv = document.querySelector(".addcontent");
    contentDiv.innerHTML = `
    <div class="row no-mg">
    <div class="col-5" style="background-color: #F6F8FC;">
        comunit
    </div>

    <div class="col-7 no-pd" style="background-color: #F6F8FC;">
       comooas

        </div>
        
</div>
`;

};
if(page == "about" || page == "About Pomah") {
    let contentDiv = document.querySelector(".addcontent");
    contentDiv.innerHTML = `
    <div class="row no-mg about-us">
    <div class="about-content">
        <h2>About Pomah</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta eos natus, porro nemo commodi aspernatur similique eius eaque tenetur laboriosam, obcaecati placeat accusantium quaerat blanditiis, cupiditate aut esse molestiae? Molestiae?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus, numquam doloremque nisi maxime, tempore possimus alias assumenda et eveniet, voluptatum optio vero dolor molestiae cum? Eaque veniam tenetur blanditiis?</p>
    </div>
    <div class="about-image">
        <img src="caro1.jpg" alt="" style="max-width: 90%; border-radius: 50%;">
    </div>       
</div>
    `;

};
};


//LOGIN FORM CHANGE
function loginfunc(){
    var signform = document.querySelector('.form-signup');
    var logform = document.querySelector('.form-login');
    signform.classList.remove("form-display");
    signform.classList.add("form-display-none");
    logform.classList.remove("form-display-none");
    logform.classList.add("form-display");
}

function signfunc(){
    var signform = document.querySelector('.form-signup');
    var logform = document.querySelector('.form-login');
    logform.classList.remove("form-display");
    logform.classList.add("form-display-none");
    signform.classList.remove("form-display-none");
    signform.classList.add("form-display");
}

window.onload = function() {
    var x = document.querySelector('.navbar-left').firstElementChild;
x.classList.add("active-btn");
  };

function addclass(anchorLink){
    var allLi = document.querySelectorAll(".nav-item");
    [].forEach.call(allLi, function(el) {
        el.classList.remove("active-btn");
    });
    pridejimas(anchorLink); 
}
function pridejimas(anchorLink){
    anchorLink.parentNode.classList.add("active-btn");
}