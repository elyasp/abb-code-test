const {
  Router
} = require("express");
const router = new Router();


const randomDev = () => {
  return (Math.floor(Math.random() * 50)).toString()
}

router.get("/", (req, res, next) => {
  res.json({
    xDev: randomDev(),
    yDev: randomDev(),
    zDev: randomDev(),
    diameter: randomDev()
  });
  console.log("IT WORKED");
});

module.exports = router;