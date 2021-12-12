import bcrypt from "bcryptjs";

const users = [
    { name: "Admin User", email: "admin@exp.com", password: bcrypt.hashSync("123456", 10), isAdmin: true },
    { name: "John Doe", email: "j.doe@exp.com", password: bcrypt.hashSync("123456", 10) },
    { name: "Jane Smith", email: "j.smith@exp.com", password: bcrypt.hashSync("123456", 10) },
    { name: "Joe Bloggs", email: "j.bloggs@exp.com", password: bcrypt.hashSync("123456", 10) },
    { name: "Delete User", email: "delete@exp.com", password: bcrypt.hashSync("123456", 10) }
];

export default users;