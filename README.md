# Hungry for Food? 🍉

This project is submitted for [MLH - Hack and Snack 2022 Hackathon](https://hackandsnack.devpost.com/)

---

The Idea behind **Hungry for Food** is to build a hassle-free web application which **fetches the nearby restaurants** of the user to **pre-book/ reserve** your seats with ease. It could also provide you features of each restaurants and on the other hand you could also publish your delicious recipe with your friends, family or almost anyone in the web.

# Technology Stack Used:
<a href="#" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
<a href="#" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="#" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="css3" width="40" height="40"/> </a>
<a href="#" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" alt="css3" width="40" height="40"/> </a>
<a href="#" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="#" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="#" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="#" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>

- EJS: For webpage templating
- Mongoose: As a driver to connect MongoDB with node.js
- Passport.js: Authentication middleware for Google OAuth

#### APIs used
- [Geoapify API for Places](https://apidocs.geoapify.com/docs/places/#about): Our website will calculate latitude and longitude values of current location and it will fetch all nearby resturants data.

## What it does?
This hackathon project is our attempt to accomplish the Idea. But unfortunately we were not able to accomplish it entirely.

1. Upon visiting our web app the user is presented with Sign-Up Page where he is provided with Multiple Third Party Authentication.
2. Once the user is logged in, he is directed to our home page where the user can fetch restaurants by clicking **Fetch restaurants near me**.
3. Once the User is done checking the nearby restaurants he could logout with a single button atthe top right.

## How we built it ⚙️
The real gem behind this project is the Geoapify API for Places. This API provides details on twenty of hotels, making it possible for us to include custom details for so many beaches. Although this API only provides information about hotels in Pakistan, we hope to add hotels from around the world in the future.
The data from the Geoapify API is queried by our server hourly, and saved into our MongoDB database (to avoid overloading their API). This database can be queried by name and location (latitude, longitude).

Another part of our project is that we have provide an option for sign in with google , facebook and twitter using Passport.js and one can also continue without login.

## Installation/Execution ✅

```bash
npm install
```
```bash
npm run dev -- --open
```

## Challenges we ran into 💻
1. Fetching, Installing Dependencies and Fixing Backend Errors.
2. Figuring out the API for different regions or co-ordinates of different places was a huge task.

## Accomplishments that we're proud of 🏆
We were able to partially complete the idea behind the challenge and create a hack to solve this problem. Team Work was something we were really proud of specially when we had errors we worked together to fix them.

## What we learnt 📚
We experimented lot of API's and learnt pretty much everything we used out of this project.

## What's next for Hungry for Food?
We plan to finish this challenge and create a complete web application and help the user to experience the best out of it.

## Team Members:
<a href="https://github.com/ahamedbasha-n/hack_and_snack/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ahamedbasha-n/hack_and_snack"/>
</a>

## Show your support

Please ⭐️ this repository if this project helped you!

