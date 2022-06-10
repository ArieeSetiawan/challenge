exports.status = (req, res) => {
    return res.status(201).json({
      message: 'Status pesanan abcd',
    })
  }

exports.buat = (req, res) => {
    return res.status(201).json({
      message: 'Membuat pesanan abcd',
    })
  }

exports.perbarui = (req, res) => {
    return res.status(201).json({
      message: 'memperbarui pesanan abcd',
    })
  }