
let navbar = () => {

    return ` <div id="navbar_import">
    <div id="s1_navbar">
        <div id="s1_p1_navbar"><img src="https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.png" alt="Zappos"></div>
        <div id="s1_p2_navbar"><img src="https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.png" alt=""></div>   
    </div>
    <div id="s2_navbar">
        <div id="s2_p1_navbar">
            <div class="s2_p1_dropdown">
                <button onclick="myFunction()" class="dropbtn">Customer Service &#9660</button>
                <div id="myDropdown" class="dropdown-content">
                  <a href="">Contact Info</a>
                  <a href="">FAQ</a>
                  <a href="">Give us Feedback</a>
                </div>
              </div>                  
        </div>
        <div id="s2_p2_navbar">
            <p>Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day Return Policy! More About Shipping & Returns</p>
        </div> 
    </div>
    <div id="s3_navbar">
        <div id="s3_p1_navbar">
            <div id="s3_p1_logo"><a href="index.html"><img src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.png" alt="" height="50"></a></div>
            <div id="s3_p1_search_bar">
                <input type="search" placeholder="&#128270 Search for shoes,clothes,etc" id="search">
                <button id="search_btn" onclick="search()" >SEARCH</button>
            </div>
        </div>
        <div id="s3_p2_navbar" onclick = "cart()">
            <div id="cart_logo"><img src="https://cdn-icons-png.flaticon.com/512/4296/4296929.png" alt=""></div>
            <p>My Cart</p>
        </div> 
    </div>
    <div id="s4_navbar">
        <div id="s4_p1_navbar">
            <div id="s4_p1_navbar_c1">
               <div onclick="new_d1()" class="dropbtn">New &#9660</div>
               <div id="myDropdown-1" class="dropdown-content">
                <div id="dp_list_new"></div>
                <div id="dp_search_bar">
                  <input type="search" placeholder="Search" id="dp_search"/>
                  <button>Search</button>
                </div>
              </div> 
            </div>
            <div id="s4_p1_navbar_c2">
              <div onclick="women_d2()" class="dropbtn">Women &#9660</div>
              <div id="myDropdown-2" class="dropdown-content">
                <div id="dp_list_women"></div>
                <div id="dp_search_bar">
                  <input type="search" placeholder="Search" id="dp_search"/>
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div id="s4_p1_navbar_c3">
              <div onclick="men_d3()" class="dropbtn">Men &#9660</div>
              <div id="myDropdown-3" class="dropdown-content">
                <div id="dp_list_men"></div>
                <div id="dp_search_bar">
                  <input type="search" placeholder="Search" id="dp_search"/>
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div id="s4_p1_navbar_c4">
              <div onclick="kids_d4()" class="dropbtn">Kids &#9660</div>  
              <div id="myDropdown-4" class="dropdown-content">
                <div id="dp_list_kids"></div>
                <div id="dp_search_bar">
                  <input type="search" placeholder="Search" id="dp_search"/>
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div id="s4_p1_navbar_c5">
               <div onclick="dept_d5()" class="dropbtn">Departments &#9660</div> 
               <div id="myDropdown-5" class="dropdown-content">
                <div id="dp_list_dept"></div>
                <div id="dp_search_bar">
                  <input type="search" placeholder="Search" id="dp_search"/>
                  <button>Search</button>
                </div>
               </div>
            </div>
            <div id="s4_p1_navbar_c6">
                <div onclick="brands_d6()" class="dropbtn">Brands &#9660</div>
                 <div id="myDropdown-6" class="dropdown-content">
                  <div id="dp_list_brands"></div>
                  <div id="dp_search_bar">
                    <input type="search" placeholder="Search" id="dp_search"/>
                    <button>Search</button>
                  </div>
              </div>
            </div>
            <div id="s4_p1_navbar_c7">
                <div onclick="sale_d7()" class="dropbtn">Sale &#9660</div>
                 <div id="myDropdown-7" class="dropdown-content">
                  <div id="dp_list_sale"></div>
                  <div id="dp_search_bar">
                    <input type="search" placeholder="Search" id="dp_search"/>
                    <button>Search</button>
                  </div>
              </div>
            </div>
            <div id="s4_p1_navbar_c7">
                <div onclick="clothing_d8()" class="dropbtn">Clothing &#9660</div>
                 <div id="myDropdown-8" class="dropdown-content">
                  <div id="dp_list_clothing"></div>
                  <div id="dp_search_bar">
                    <input type="search" placeholder="Search" id="dp_search"/>
                    <button>Search</button>
                  </div>
              </div>
            </div>
        </div>
        <div id="s4_p2_navbar">
            <a href="favorites.html">Favorites</a>
             <a href="./login.html">Sign in/up</a>   
        </div>
    </div>
</div>`
}

export default navbar