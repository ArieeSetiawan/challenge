exports.register = (req, res) => {
  
    return res.status(201).json({
      message: 'Berhasil mendaftarkan user baru',
    })
  }
  
  exports.login = (req, res) => {
    const email = req.body.email;
  
    return res.status(201).json({
      message: 'Login Berhasil!',
    })
  }