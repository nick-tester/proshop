

const login = (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
};

const register = (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body);
};

export { login, register }