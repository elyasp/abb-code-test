const {
  Router
} = require("express");
const router = new Router();


const randomDev = () => {
  return (Math.floor(Math.random() * 20)).toString()
}

router.get("/", (req, res, next) => {
  res.json({
    xDev: randomDev(),
    yDev: randomDev(),
    zDev: randomDev(),
    diameter: randomDev()
  });
  console.log("DATA SUCCESFULLY FETCHED");
});

module.exports = router;