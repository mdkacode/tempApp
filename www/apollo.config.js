module.exports = {
  client: {
    name: "React Next App",
    includes: ["pages/**","Modules/**", "lib/**"],
    service: {
      name: "api",
      url: "http://127.0.0.1:4000/api",
      // optional disable SSL validation check
      skipSSLValidation: true
    }
  }
};
