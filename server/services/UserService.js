import User from '../models/User';
export const login = (req, res) => {
  let id = req.body.name;
  if(id === undefined || id === ''){
    res.status(500).send({
      message: 'no name'
    })
  }
  User.findOne({
    name: id
  }, (err, user) => {
    if(err) return res.status(500).send({
      message: 'error'
    });
    if(!user){
      user = new User()
      user.name = id;
      user.save(e => {
        if(e) {
          res.status(500).send({
            message: 'error happens'
          })
        }else res.send({user})
      });

    }else{
      user.updatedDate = Date.now();
      user.save(err => {
        if(!err)
          res.send({
            user
          })
      })
    }
  })
}