import "dotenv";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = { id: decoded.id }
            next();
        } catch (err) {
            console.log(err.message);
            res.status(401)
            throw new Error("Invalid credentials!")
        }
    }

    if (!token) {
        res.status(401)
        throw new Error("Invalid credentials!")
    }

});

export default protect;