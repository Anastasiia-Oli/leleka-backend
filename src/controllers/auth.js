//
import { registerUser } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
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
