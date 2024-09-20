import { useState } from 'react';
import { login } from '../services/api';
import useAuth from '../hooks/useAuth';
import '../App.css'

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login: setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login(formData);
    setUser(data);
  };

  return (
    <>
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>
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
      <button type="submit">Login</button>
      <div></div>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i> <a href="/register">Register</a></div>
        </div>
    </form>
    </>

    
  );
};

export default LoginPage;
