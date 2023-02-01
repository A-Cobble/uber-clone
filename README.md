# Uber-Clone

Uber-Clone is an Expo React Native project based off the popular ridesharing app Uber. Features include interactive maps, auto-complete location searches via Google Places API, calculated distances between two points via Google Distance Matrix API, real-time directions drawn on the map via the Google Directions API, styling using Tailwind CSS, react navigation to allow for multiple pages, and state management via Redux.
 

 ### Technologies
- React Native - [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)
- Expo - [https://docs.expo.dev/](https://docs.expo.dev/)
- Redux - [https://redux.js.org/](https://redux.js.org/)
- Google Places API - [https://developers.google.com/maps/documentation/places/web-service](https://developers.google.com/maps/documentation/places/web-service)
- Google Distance Matrix API - [https://developers.google.com/maps/documentation/distance-matrix](https://developers.google.com/maps/documentation/distance-matrix)
- Google Directions API - [https://developers.google.com/maps/documentation/directions](https://developers.google.com/maps/documentation/directions)
- React Native Maps - [https://github.com/react-native-maps/react-native-maps](https://github.com/react-native-maps/react-native-maps)
- Tailwind CSS - [https://github.com/jaredh159/tailwind-react-native-classnames](https://github.com/jaredh159/tailwind-react-native-classnames)
- React Navigation - [https://reactnavigation.org/docs/getting-started](https://reactnavigation.org/docs/getting-started)

<br />

## Getting Started
`This project is not designed for production use. Some refactoring will be required if used for production.`
<br />
<br />

First, install and log into the Expo CLI:

```bash
npx expo register
# or
npx expo login
```

Next, install the dependencies:

```bash
npm install
# or
yarn install
```

<br>
<br>

## Environmental Variables and Sensored Information

Some inormation will be unique to the user for this project and is not to be shared publicly such as the GOOGLE_MAPS_APIKEY.

<br />

Create the `.env` file in root directory of your project.

<br />

I have included a template (`.env.template`) to help you get started.

<br />

To allow the Google APIs to work the `.env` file with a valid Google API key are requried to be added to the root directory. This can be obtained once a new project has been created on Google Cloud and the APIs have been added to that project. Google Cloud -> Credentials and then by clicking SHOW KEY.

<br>

## Acknowledgments

This project was inspired by Sonny Sangha's Uber clone. If you have any questions check out his YouTube video here: https://www.youtube.com/watch?v=AkEnidfZnCU.