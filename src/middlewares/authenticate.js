export default (req, res, next) => {
  // Тимчасово пропускаємо всі запити без авторизації
  console.log('Тимчасовий middleware authenticate пропускає запит');
  next();
};
