// export default {
//   transform: {
//     "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
//   },
// };

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   moduleNameMapper: {
//     "\\.(css|scss)$": "identity-obj-proxy",
//     "^.+\\.svg$": "<rootDir>/src/assets/$1",
//   },

//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//     "^.+\\.jsx?$": "babel-jest",
//   },
// };

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",

    "^.+\\.svg$": "jest-svg-transformer",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
};

//"^.+\\.svg$": "<rootDir>/src/assets/$1",
