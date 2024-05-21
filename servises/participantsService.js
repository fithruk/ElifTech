const participantsShema = require("../models/participatedUsers");

class participantService {
  async addEvent(fullName, email, dateOfBirth, whereDidFound, id) {
    const candidate = await participantsShema.findOne({ email });
    console.log(candidate);
    if (!candidate) {
      const newUser = new participantsShema({
        fullName,
        email,
        dateOfBirth,
        whereDidFound,
      });
      newUser.eventIds.push(id);
      await newUser.save();
      return { msg: "You are successfully registered", candidate: newUser };
    }
    if (candidate && !candidate.eventIds.includes(id)) {
      candidate.eventIds.push(id);
      await candidate.save();
      return { msg: "You are successfully registered", candidate };
    } else {
      return { msg: "You has been arready registered", candidate };
    }
  }
}

module.exports = new participantService();
