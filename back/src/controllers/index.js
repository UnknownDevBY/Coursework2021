const mainService = require('../services');


const fetchInitialData =  async (req, res) => {
  try {
    const initialResponse = await mainService.getInitialData();
    res.status(200).json(initialResponse);
  } catch (e) {
    console.error("fetchInitialData", e);
    res.status(500).send();
  }
};

const depotCarAdd = async (req, res) => {
  try {
    const {body} = req;
    if(!mainService.isAddDepotCarPayloadValid(body)) {
      return res.status(400).send();
    }
    await mainService.addDepotCar(body);
    res.status(204).send();
  } catch (e) {
    console.error("carAdd", e);
    res.status(500).send();
  }
};

const depotCarDelete = async (req, res) => {
  try {
    const {id} = req.params;
    if(!Number.isInteger(+id)) {
      return res.status(400).send({message: "Please provide a number as an id"});
    }
    await mainService.deleteDepotCarById(id);
    res.status(204).send();
  } catch (e) {
    console.error("carDelete", e);
    res.status(500).send();
  }
};


module.exports = {
  fetchInitialData,
  depotCarAdd,
  depotCarDelete
};
