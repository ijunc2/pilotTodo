import User from '../../models/User'

export default (req, res) => User.findOne({
    _id: req.headers.token
  }).then(sess => {
    if(!sess) {
      res.status(500).send({
        message: 'session has expired'
      });
    }
    console.log(`session user' number is ${sess._id}`)
    return sess;
  })
  .catch(e => {
    res.status(500).send({
      message: 'session has expired'
    });
  });
