const { Router } = require("express");
const evensService = require("../servises/eventsService");
const { registerMiddleWare } = require("../middleWares/registerMiddleWare");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const events = await evensService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = id.substring(1, id.length);
    const guests = await evensService.getEvenstGuests(id);
    res.status(200).json(guests);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

router.post("/:id", registerMiddleWare, async (req, res) => {
  try {
    let id = req.params.id;
    id = id.substring(1, id.length);
    const resp = await evensService.addNewUserToEvent({ ...req.body, id });

    res.status(200).json(resp);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("An error occurred");
  }
});

module.exports = router;
