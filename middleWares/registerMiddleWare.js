function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

const registerMiddleWare = async (req, res, next) => {
  const errors = [];
  const { fullName, email, dateOfBirth, whereDidFound } = req.body;

  if (
    typeof fullName !== "string" ||
    typeof email !== "string" ||
    typeof dateOfBirth !== "string"
  ) {
    errors.push({ msg: "invalid data" });
  }
  if (whereDidFound === null) {
    errors.push({ msg: "radioData is required" });
  }
  if (!validateEmail(email)) {
    errors.push({ msg: "incorrent email" });
  }
  if (fullName.split(" ").length < 2) {
    errors.push({ msg: "for proceed you need to in full name" });
  }
  if (!dateOfBirth) {
    errors.push({ msg: "date of birth has invalid format" });
  }

  if (errors.length === 0) {
    next();
  } else {
    console.log(errors);
    await res.json(errors);
  }
};

module.exports = { registerMiddleWare };
