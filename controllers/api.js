class ApiController {
  static getDate(req, res) {
    try {
      const dateParam = req.params.date;
      let date = null;
      if (isNaN(+dateParam) === true) {
        date = new Date(dateParam);
      } else {
        date = new Date(+dateParam);
      }
      if (isNaN(date.getTime())) throw new Error("Invalid Date");
      res.status(200).send({
        unix: date.getTime(),
        utc: date.toUTCString(),
      });
    } catch (error) {
      res.status(500).send({
        error: error.message,
      });
    }
  }
}

module.exports = ApiController;
