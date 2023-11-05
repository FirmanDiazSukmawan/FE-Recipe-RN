# FE-RECIPE-Mobile

<br />
<p align="center">
  <div align="center">
    <img height="150" src="https://github.com/xTats/BE-Recipe-RN/assets/122331956/3ee434fa-0ad5-4b89-a506-2083ff2a7433" alt="MyRecipe" border="0"/>
  </div>
  <h3 align="center">My Recipe APK Mobile </h3>
  <p align="center">
    <a href="https://github.com/xTats/FE-Recipe-RN"><strong>Explore the docs »</strong></a>
    <br />
  <a href="https://drive.google.com/file/d/10Du1B1AyJg-WY7X6DcBdc40IhXtWtS03/view?usp=sharing">View APK Demo</a>
    ·
    <a href="https://be-recipe-rn.vercel.app">Api Demo</a> -->
  </p>
</p>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
  - [Installation](#installation)
  - [Setup .env](#setup-env)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [Related Project](#related-project)

# About The Project

"Recipe Cooking" is an application that allows you to explore the world of recipes, search for, and share many new recipes every day. You can search for recipes by name, share recipes with others, and help them create delicious and easy dishes every day. You can like the recipes you enjoy and save the ones you want to try at home. Additionally, you can leave comments to provide feedback to the recipe creators. This app also offers additional features, including notifications to receive the latest recipe updates and the ability to open the camera to take pictures of your own recipes or share your cooking experiences visually.

## Built With

These are the libraries and service used for building this Front End My Recipe Mobile

- [React Native](https://reactnative.dev/)
- [Redux](https://redux.js.org/)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [Bootstrap](https://getbootstrap.com/)
- [React-Bootstrap](https://react-bootstrap.netlify.app/)
- [native-base](https://nativebase.io/)
- [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv)
- And Other

# Installation

1. Clone this repository

```sh
git clone https://github.com/xTats/FE-Recipe-RN.git
```

2. Change directory to FE-RECIPE-RN

```sh
cd FE-RECIPE-RN
```

3. Install all of the required modules

```sh
npm i / npm install
```

5. Create and configure `.env` file in the root directory, example credentials are provided in [.env](API_RECIPE:./.linkAPI)

```txt
- Please note that this server requires Google Drive API credentials and Gmail service account
- Otherwise API endpoint with image upload and account register won't work properly
```

6. Run this command to run the server

- Or run this command for running in development environment

```sh
- Type ` npm run android` To Start APK in android debug
- For Release [Release To APK or PlayStore](https://reactnative.dev/docs/signed-apk-android)
- Type ` npx react-native build-android --mode=release To Build APK to Release
- Type ` npm run android -- --mode="release" To Start APK APK in Release Mode
```


## Screenshot

<table>
 <tr>
    <td><img width="350px" src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/205643e7-77c1-47da-8a2d-e3d494d596c4" border="0" alt="1" /></td>
    <td> <img width="350px" src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/4c64b43e-474e-433e-b384-3562438ec164"  border="0"  alt="2" /></td>
<td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/95278b7f-601d-44a2-80d2-623911fdfd6a" border="0" alt="3" /> </td>
  </tr>
   <tr>
    <td>Login</td>
<td>Register</td>
<td>Landing Page</td>
  </tr>

<tr>
<td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/28fd4918-aa1d-439b-a718-ca022c912434"  border="0" alt="4" /></td>
    <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/4bf97866-cf30-4afc-b0f5-fe7e13a0e567" border="0" alt="3" /> </td>
     <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/2ad9bc31-4483-4bb8-b040-90459eb7050c"  border="0" alt="4" /></td>
  </tr>
   <tr>
     <td>Popular Recipe</td>
    <td>Search Recipe</td>
     <td>Detail Recipe</td>
  </tr>


  <tr>
<td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/957c0941-5c7f-450c-bbb1-ed3231492c78" border="0" alt="3" /> </td>
    <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/17675c17-abb1-4923-932c-a6e52f95e17a" border="0" alt="3" /> </td>
     <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/857a4b07-1f6d-4a6b-b823-b9e6849e9832"  border="0" alt="4" /></td>
  </tr>
   <tr>
<td>Comment</td>
     <td>Add Recipe</td>
      <td>Detail Video</td>
  </tr>
    <tr>
       <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/e82cf2fa-5964-4228-b77b-5ec14e77c40c"  border="0" alt="4" /></td>
    <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/c1943b8f-d716-4c93-b67a-c0595361f812" border="0" alt="3" /> </td>
     <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/1609a0d1-88fd-420c-85f0-af201737f659"  border="0" alt="4" /></td>
  </tr>
   <tr>
     <td>Profile</td>
     <td>Edit Profile</td>
    <td>My Recipe</td>
  </tr>
    <tr>
<td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/40720cba-b41a-4ec4-8e29-4c3db15c0097"  border="0" alt="4" /></td>
    <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/3f4d0068-386e-4796-b987-5742267a3eb1" border="0" alt="3" /> </td>
  </tr>
   <tr>
     <td>Saved Recipe</td>
    <td>Liked Recipe</td>
  </tr>

</table>


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b Try/TryClone`)
3. Commit your Changes (`git commit -m 'Add some TryClone'`)
4. Push to the Branch (`git push origin Try/TryClone`)
5. Open a Pull Request


## Related Project

:rocket: [`Backend-Recipe-RN`](https://github.com/xTats/BE-Recipe-RN)

:rocket: [`FE-Recipe-RN`](https://github.com/xTats/FE-Recipe-RN)

:rocket: [`FE-RECIPE-Redux-mix-react WEB`](https://github.com/xTats/FE-RECIPE-Redux-mix-react)

:rocket: [`Demo MyRecipe Web`](https://fe-recipe-redux-mix-react.vercel.app)

:rocket: [`Demo MyRecipe APK`](https://drive.google.com/file/d/10Du1B1AyJg-WY7X6DcBdc40IhXtWtS03/view?usp=sharing)

Project link : [https://github.com/xTats/FE-RECIPE-Redux-mix-react](https://github.com/xTats/FE-RECIPE-Redux-mix-react)]

Project link : [https://github.com/xTats/FE-Recipe-RN](https://github.com/xTats/FE-Recipe-RN)]
