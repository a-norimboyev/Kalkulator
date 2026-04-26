import { createContext, useContext, useState } from 'react';

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

  const login = (username, password, role) => {
    if (username && password) {
      setUser({
        username,
        role,
        teacherName: role === 'teacher' ? 'Sardor Xolmatov' : null,
        // O'quvchi profili
        firstName: role === 'student' ? 'Azizjon' : null,
        lastName:  role === 'student' ? 'Norimboyev' : null,
        group:     role === 'student' ? 'Foundation-N12' : null,
        course:    role === 'student' ? 'Python' : null,
        teacher:   role === 'student' ? 'Sardor Xolmatov' : null,
      });
      return true;
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
