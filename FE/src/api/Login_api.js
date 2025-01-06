import axios from 'axios';

export const login = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:8000/api/auth/login', {
            email,
            password
        });
        localStorage.setItem('username', response.data.user.username);
        localStorage.setItem('token', response.data.token);
        return response.data.user.role;
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message);
        throw new Error('Failed to log in');
    }
};