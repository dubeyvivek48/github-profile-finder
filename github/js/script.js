
function getProfile(e){
    
  e.preventDefault();
    var UN=document.getElementById('UName').value;
    if(!UN || UN==''){
        UN="dubeyvivek48";

    }
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            var user = JSON.parse(xhttp.responseText);

            document.getElementById('jcard').innerHTML=` <div class="card">
            
                                <div class="card-body">
                                    <div class="card-headder">
                                        <h3 class="card-headding">${user.name}</h3>
                                    </div>
                                    <div class="card-img">
                                        <img src="${user.avatar_url}" alt="${user.name}" id="img-pro">
                                    </div>
                                    <div class="card-text">
                                            <button class="btn btn-re"> Public Repos ${user.public_repos}</button>
                                            <button class="btn btn-gi"> Public Gists ${user.public_gists}</button>
                                            <br>
                                            <br>
                                            <label for="Website" class="lab lab1"> Website:${user.blog}</label>
                                            <label for="Email" class="lab lab2">Email:${user.email}</label>
                                            <a href="${user.html_url}" id="git-link"><button id="github" target="_blank"> Visit Github <i class= "fa fa-github" style="padding-left:4px; font-size:140%;"></i></button> </a>
            
            
                                        
                                    </div>
            
                                </div>
                            </div>
               `
        }
    }
    xhttp.open('GET', 'https://api.github.com/users/'+UN, true);
    xhttp.send();



}

document.getElementById('form').addEventListener('submit', getProfile, false);
