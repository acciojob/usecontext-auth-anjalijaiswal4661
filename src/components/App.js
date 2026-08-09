import React, { createContext, useContext, useState } from "react";

// Create the authentication context
const AuthContext = createContext();

// Provider component
function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle authentication status
  const toggleAuth = (checked) => {
    setIsAuthenticated(checked);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// Component that consumes the context
function Auth() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Mock Authentication</h1>

      <label>
        <input
          type="checkbox"
          checked={isAuthenticated}
          onChange={(e) => toggleAuth(e.target.checked)}
        />
        I am not a robot
      </label>

      <div style={{ marginTop: "20px" }}>
        {isAuthenticated ? (
          <p style={{ color: "green", fontWeight: "bold" }}>
            User is authenticated ✅
          </p>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>
            User is not authenticated ❌
          </p>
        )}
      </div>
    </div>
  );
}

// Main App component
export default function App() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}