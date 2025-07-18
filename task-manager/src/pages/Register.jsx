import { useState } from 'react';
import { register } from '../api';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({  firstName:'', lastName:'',email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register(form);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch {
      alert('Registration failed');
    }
  };

  return (
 <div className="min-h-screen flex items-center justify-center">
  <form onSubmit={handleSubmit} className="card w-96 bg-base-100 shadow-xl p-6">
    <fieldset className="bg-base-200 border border-base-300 rounded-box p-4 w-full max-w-sm mx-auto">
      <legend className="text-lg font-bold">Register</legend>

      <div className="form-control mb-3">
        <label htmlFor="firstName" className="label">
          <span className="label-text">First Name</span>
        </label>
        <input
          id="firstName"
          type="text"
          className="input input-bordered"
          placeholder="First Name"
          onChange={e => setForm({ ...form, firstName: e.target.value })}
        />
      </div>

      <div className="form-control mb-3">
        <label htmlFor="lastName" className="label">
          <span className="label-text">Last Name</span>
        </label>
        <input
          id="lastName"
          type="text"
          className="input input-bordered"
          placeholder="Last Name"
          onChange={e => setForm({ ...form, lastName: e.target.value })}
        />
      </div>

      <div className="form-control mb-3">
        <label htmlFor="email" className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          type="email"
          className="input input-bordered"
          placeholder="Email"
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
      </div>

      <div className="form-control mb-4">
        <label htmlFor="password" className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          id="password"
          type="password"
          className="input input-bordered"
          placeholder="Password"
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
      </div>

      <div className="mt-6">
        <button type="submit" className="btn btn-neutral w-full">Register</button>
      </div>
    </fieldset>

    <p className="mt-4 text-sm text-center">
      Already have an account? <Link to="/login" className="link link-primary">Login</Link>
    </p>
  </form>
</div>
  );
}

export default Register;
