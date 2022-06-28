const axios = require('axios');
const controller = {}

controller.getAll = async function (req, res) {
  axios.get('https://covid19.mathdro.id/api/confirmed')
  .then(function(response){
    res.status(200).json({
      message: 'data API',
      data: response.data
    })
  })
  .catch(function(error){
    res.status(404).json({
      message: error.message,
    })
  })
}

export default controller