import personService from "../services/person.service.js";
import responseHandler from "../handlers/response.handler.js";

const personDetail = async (req, res) => {
  try {
    const person = await personService.getPersonDetail(req.params);
    return responseHandler.ok(res, person);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

const personMedias = async (req, res) => {
  try {
    const medias = await personService.getPersonMedias(req.params);
    return responseHandler.ok(res, medias);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

export default { personDetail, personMedias };
