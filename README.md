# FE-RECIPE-Redux-mix-react

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

Recipe Cooking adalah aplikasi untuk menjelajahi dunia recipe dan juga untuk mencari, dan berbagi banyak resep baru setiap hari, Cari berdasarkan nama resep, Bagikan resep serta bantu orang lain untuk membuat resep sehari-hari yang lezat dan mudah.Berikan like pada recipe yang anda sukai dan save untuk recipe yang ingin anda coba buat di rumah dan juga comment berikan feedback pada pembuat resep

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
<td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/c6b1346d-8160-4ce8-9f7e-d7005b8f67f2"  border="0" alt="4" /></td>
    <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/e89886ab-3b40-482e-8788-08300f9290f7" border="0" alt="3" /> </td>
     <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/2ad9bc31-4483-4bb8-b040-90459eb7050c"  border="0" alt="4" /></td>
<td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/c09573ac-3e24-4a3b-b18f-cb6ade6188cd" border="0" alt="3" /> </td>
  </tr>
   <tr>
     <td>Popular Recipe</td>
    <td>Search Recipe</td>
     <td>Detail Recipe</td>
<td>Comment</td>
  </tr>
  <tr>
    <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/17675c17-abb1-4923-932c-a6e52f95e17a" border="0" alt="3" /> </td>
     <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/a901461a-7bcd-4efa-af8e-a9b263767e1d"  border="0" alt="4" /></td>
     <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/cd7bcdf7-54b6-402c-a791-158c910748df"  border="0" alt="4" /></td>
  </tr>
   <tr>
     <td>Add Recipe</td>
      <td>Profile</td>
      <td>Detail Video</td>
  </tr>
    <tr>
    <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/c1943b8f-d716-4c93-b67a-c0595361f812" border="0" alt="3" /> </td>
     <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/fd562db7-de07-457f-9498-b9b9239f7ecd"  border="0" alt="4" /></td>
  </tr>
   <tr>
     <td>Edit Profile</td>
    <td>My Recipe</td>
  </tr>
    <tr>
<td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/7b59401a-7725-4d2a-82b2-b8834a099672"  border="0" alt="4" /></td>
    <td><img width="350px"  src="https://github.com/xTats/FE-Recipe-RN/assets/122331956/a6c44885-e04f-46dc-aa90-e86b5b7a2f8a" border="0" alt="3" /> </td>
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
