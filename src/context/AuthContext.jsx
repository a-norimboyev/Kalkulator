import { createContext, useContext, useState } from 'react';
import { usersDataFull } from '../pages/Users';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const CREDENTIALS = {
    admin:   { password: 'admin123',   role: 'admin' },
    teacher: { password: 'teacher123', role: 'teacher' },
  };

  const login = (username, password, role) => {
    // Admin va teacher uchun
    const cred = CREDENTIALS[username];
    if (cred && cred.password === password && cred.role === role) {
      setUser({
        username,
        role,
        teacherName: role === 'teacher' ? 'Sardor Xolmatov' : null,
        firstName: null,
        lastName: null,
      });
      return true;
    }

    // O'quvchilar uchun — usersData dan login/parol tekshirish
    if (role === 'student') {
      const found = usersDataFull.find(
        u => u.login === username && u.password === password && u.status === 'Faol'
      );
      if (found) {
        const names = found.name.split(' ');
        setUser({
          username: found.login,
          role: 'student',
          firstName: names[0] || '',
          lastName: names[1] || '',
          group: found.group,
          course: found.course,
          teacher: 'Sardor Xolmatov',
        });
        return true;
      }
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
