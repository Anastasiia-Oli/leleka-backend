//
import { ONE_DAY } from '../constants/index.js';
import { loginUser, registerUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};


export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  res.json({
    status: 200,
    message: 'Successfully logged in a user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};


// import { registerUser } from '../services/auth.js';

// export const registerUserController = async (req, res) => {
//   try {
//     const { user, token } = await registerUser(req.body);

//     res.status(201).json({
//       status: 201,
//       message: 'Successfully registered a user!',
//       data: { user, token },
//     });
//   } catch (error) {
//     res.status(error.status || 500).json({
//       status: error.status || 500,
//       message: error.message || 'Server error',
//     });
//   }
// };

