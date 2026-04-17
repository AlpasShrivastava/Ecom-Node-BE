import * as authService from "./auth.service.js";

export const signup = async (req, res) => {
  try {
    console.log("enter");
    const user = await authService.register(req.body);

    res.status(201).json({
      message: "User created successfully",
      data: user
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    const data = await authService.login(req.body);

    res.status(200).json({
      message: "Login successful",
      ...data
    });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// REFRESH TOKEN
export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    const data = await authService.refreshToken(refreshToken);

    res.status(200).json(data);

  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};