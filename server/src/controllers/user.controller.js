import expressAsyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/user.js';

const getToken = (user, exp = null) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        fullName: user.fullName
    }, process.env.JWT_SECRET,
        {
            expiresIn: exp ?exp : '10d'
        }
    )


}


 
export const registerUser = expressAsyncHandler(async (req, res) => {
    const { email, password, fullName ,role } = req.body;
    if (!email || !password || !fullName || !role)
        return res.status(400).json({ message: "All Fields are required" });
    const getUser = await User.findOne({ email ,role});
    if (getUser)
        return res.status(400).json({ message: "Account already exists, Kindly login" });

    const newUser = new User({ email, password, fullName ,role});
    await newUser.save();

    if (!newUser)
        return res.status(500).json({ message: "Invalid User Data" });

    const token = getToken(newUser);

    const userObject = newUser.toObject();
    delete userObject.password;
    res.status(201).json({ message: "Account created 🤩", token: token, user: newUser });

});


export const loginUser = expressAsyncHandler(async (req, res) => {
    const { email, password ,role } = req.body;

    if (!email || !password || !role)
        return res.status(400).json({ message: "All Fields are required" });
    const finduser = await User.findOne({ email: email ,role});
    if (!finduser)
        return res.status(400).json({ message: "Account does not exist" });

    const match = await finduser.comparePassword(password);

    if (!match)
        return res.status(401).json({ message: "Invalid credentials" });
    const token = getToken(finduser);

    const userObject = finduser.toObject();
    delete userObject.password;

    res.status(200).json({ message: "Welcome Back 🎉", token: token, user: userObject });

});



export const verifyUserToken = expressAsyncHandler(async (req, res) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")

        if (!token) {
            res.status(401).json({ message: "Unauthorized request" });
        }
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            console.log(error)
            return res.status(401).json({ message: "Your Session has been expired", expiredSession: true });
        }
        if (!decodedToken) {
            return res.status(401).json({ message: "Your Session has been expired", expiredSession: true });
        }

        const user = await User.findById(decodedToken._id).select("-password");

        if (!user) {
            res.status(401).json({ message: "Invalid token" });
        }

        res.status(200).json({ user: user })
    } catch (error) {
        res.status(500).json({ message: "Invalid access token" });
    }

})