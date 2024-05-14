import bcrypt from "bycrpt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log(hashedPassword);

        // Push in Database
        const newUser = await prisma.user.create({
            data: {
              username,
              email,
              password: hashedPassword,
            },
        });

        console.log(newUser);

        res.status(201).json({message: "User created successfully"});
        
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to create user!" });
    }
};