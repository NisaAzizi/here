class User{
    constructor(title, firstName, lastName, city, country){
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.country = country;
    
        
        
        this.present = false;
    }


   afficheUser() {
        /*const containerElement = document.createElement("section");
        containerElement.innerHTML = '';*/
          const userCard = document.createElement("div");
          userCard.classList.add("user");
          userCard.innerHTML = `
          <div class="user" data-present="${this.present}">
          <div class="user--info">
                  <h1>${this.title} ${this.firstName} ${this.lastName}</h1>
                  <p>10 years old</p>
                  <p>${this.city}, ${this.country}</p>
          </div>
          <a href="mailto:test">
                  <span class="mail">✉️</span>
          </a>
        </div>
          `;
        return userCard;
      }




      
    /*renderUsers(tableau){
        const main = document.querySelector("main")
        tableau.forEach(e=> {
            main.appendChild(e.afficheUser);
        });
      }*/

      /*list.addEventListener("click", (e) => {
        // Toggle fait -> non-fait
        if (e.target.tagName === "LI") {
          if (e.target.dataset.done === "true") {
            e.target.dataset.done = "false";
          } else {
            e.target.dataset.done = "true";
          }
        }
        
         list.addEventListener("click", (e) => {
        if (e.target.classList === "user") {
          if (e.target.dataset.dataPresent === "true") {
            e.target.dataset.dataPresent = "false";
          } else {
            e.target.dataset.dataPresent = "true";
          }
        }*/

}



export default User;