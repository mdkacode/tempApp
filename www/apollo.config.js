module.exports = {
  client: {
    name: "React Next App",
    includes: ["pages/**","Modules/**", "lib/**"],
    service: {
      name: "api",
      url: "http://202.21.35.120:4000/api",
      // optional disable SSL validation check
      skipSSLValidation: true
    }
  }
};
