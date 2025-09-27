import { ONE_DAY } from '../constants/index.js';
import { loginUser, registerUser, logoutUser } from '../services/auth.js';
import { refreshUserSession } from '../services/auth.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

const setupSession = (res, session) => {
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('accessToken', session.accessToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
};


// ../controllers/auth.js

export const refreshUserSessionController = async (req, res) => {
 // --- ДОДАЄМО ЛОГУВАННЯ ДЛЯ ДІАГНОСТИКИ ---
 console.log('=================================');
 console.log('1. Вхідні дані для refreshUserSession:');
 console.log('   - Cookies (повністю):', req.cookies);
 console.log('   - sessionId:', req.cookies.sessionId);
 console.log('   - refreshToken:', req.cookies.refreshToken);
 console.log('=================================');

  // Ми дозволяємо помилці з сервісу "пройти" до ctrlWrapper
 const session = await refreshUserSession({
//  sessionId: req.cookies.sessionId,
 refreshToken: req.cookies.refreshToken,
 });

 // Якщо код доходить до цього місця, refresh УСПІШНИЙ
 console.log('2. Refresh СЕСІЇ УСПІШНИЙ. Відправка відповіді.');
 setupSession(res, session);

 res.json({
 status: 200,
 message: 'Successfully refreshed a session!',
 data: {
 accessToken: session.accessToken,
 },
 });
};

// export const refreshUserSessionController = async (req, res) => {

//    // --- ДОДАЄМО ЛОГУВАННЯ ДЛЯ ДІАГНОСТИКИ ---
//  console.log('=================================');
//  console.log('1. Вхідні дані для refreshUserSession:');
//  console.log('   - Cookies (повністю):', req.cookies); // Перевіряємо, чи бачимо ми кукі
//  console.log('   - sessionId:', req.cookies.sessionId);
//  console.log('   - refreshToken:', req.cookies.refreshToken);
//  console.log('=================================');

//  if (!sessionId || !refreshToken) {
//         // Якщо токенів немає, кидаємо помилку, яку ctrlWrapper перетворить на 401
//         throw createHttpError(401, 'Session ID or Refresh Token missing.');
//     }

// try {
//   const session = await refreshUserSession({
//     sessionId: req.cookies.sessionId,
//     refreshToken: req.cookies.refreshToken,
//   });
//  console.log('2. Refresh СЕСІЇ УСПІШНИЙ.');
//   setupSession(res, session);

//   res.json({
//     status: 200,
//     message: 'Successfully refreshed a session!',
//     data: {
//       accessToken: session.accessToken,
//     },
//   });

// } catch (error) {
//  // Якщо сервіс кинув помилку (наприклад, 401)
//  console.error('3. !!! ПОМИЛКА ОНОВЛЕННЯ СЕСІЇ !!!');
// const errorMessage = error instanceof Error ? error.message: 'Unknown error';
//  console.error('   - Тип/Повідомлення помилки:', error.message); // Логуємо причину
//  console.error('   - Статус помилки:', error.status || 500);
//     // eslint-disable-next-line
//     throw: error; // Проброс помилки далі, щоб її обробив глобальний обробник
//   }
// };

export const logoutController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logoutUser(req.cookies.sessionId);
  } // checking for sessionId

  // clear cookie
  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');

  // send answer to client
  res.status(204).send();
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
