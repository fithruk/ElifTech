const eventShema = require("../models/eventModel");
const participantService = require("../servises/participantsService");

class EvensService {
  async getAllEvents() {
    return await eventShema.find();
  }

  async addNewUserToEvent({ fullName, email, dateOfBirth, whereDidFound, id }) {
    try {
      const tergetEvent = await eventShema.findById(id);
      const { msg, candidate } = await participantService.addEvent(
        fullName,
        email,
        dateOfBirth,
        whereDidFound,
        id
      );
      tergetEvent.participantsIds.push(candidate._id);
      await tergetEvent.save();
      return { msg };
    } catch (error) {
      return error.message;
    }
  }

  async getEvenstGuests(id) {
    try {
      const targetEvent = await eventShema
        .findById(id)
        .populate("participantsIds");

      return targetEvent.participantsIds;
    } catch (error) {
      return error.message;
    }
  }
}

module.exports = new EvensService();
