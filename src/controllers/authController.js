import bcrypt from 'bcryptjs';
import authService from '../services/authService.js';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authService.login(email);

    if (!user) {
      return res.status(400).send({ message: 'Invalid user or password' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(400).send({ message: 'Invalid user or password' });
    }

    res.send("Login okay");
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
}

export default { login }
