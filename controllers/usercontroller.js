const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const { UserModel } = require("../models");
const { UniqueConstraintError } = require("sequelize/lib/errors");
const validateSession = require("../middleware/validate-session");
const validateAdmin = require("../middleware/validate-admin");

const router = Router();

/*
======================
   Register Account
======================
*/

router.post("/register", async function (req, res) {
  try{

  }catch(e){
    res.status(500).json({message: e.message})
  }
 
});

/*
======================
        Login
======================
*/

router.post("/login", async function (req, res) {
  try{

  }catch(e){
    res.status(500).json({message: e.message})
  }
});

module.exports = router;
