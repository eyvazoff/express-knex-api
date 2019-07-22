exports.Login = (req, res, next) => {
    if(req.body.username === '' || req.body.password === '') {
        res.status(400).json({
           error: ['İstifadəçi adı və ya şifrə boş ola bilməz']
        });
    }
    database('admin').select('*').where({
        username: req.body.username,
        password: md5(req.body.password)
    }).then(json => {
        if(json[0]) {
            json[0].token = md5(json[0].username + json[0].secret);
            res.json({result: json[0]});
        } else {
            res.status(400).json({error: ['Username or password incorrect']});
        }
    }).catch((error) => {
        res.status(500).json({error: error});
    });
};