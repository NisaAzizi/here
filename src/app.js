import User from './User.js';

const users = [];

/*const getProfiles = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `https://randomuser.me/api/?results=20`);
    request.send();
    request.addEventListener("load", e => {
        const data = JSON.parse(request.responseText);
        console.log(data);
       /* data.results.forEach(element => {
            cleanData(element);
        });*/

async function getData() {
    try {
      const res = await fetch("https://randomuser.me/api/?results=20");
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

/*const parseData = (rawData) => {
    const { results } = JSON.parse(rawData);
    const cleanData = results.map((el) => {
        const title = el.name.title;
        const firstName = el.name.first;
        const lastName = el.name.last;
        const city = el.location.city;
        const country = el.location.country;
    });
    return cleanData;
  };*/

async function render(){
    const data = await getData();
    /*const data2 = JSON.parse(data);*/
    const main = document.querySelector("main")
    data.results.forEach(element => {
        const newUser = new User(name.title, name.first, name.last, location.city, location.country);
        main.appendChild(newUser.afficheUser()); 
    });
}

render();



