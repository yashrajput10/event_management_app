import { useState } from 'react';
import { register } from '../services/api';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
    setFormData({ username: '', password: '' });
  };

  return (
   <>
    <form onSubmit={handleSubmit}>
     
     
    </form>

    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form>
        <h3>Register Here</h3>
        <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

          <button type="submit">Register</button>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i> <a href="/login">Log in</a></div>
        </div>
    </form>


   </>
  );
};

export default RegisterPage;
