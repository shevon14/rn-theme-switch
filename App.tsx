import React, {createContext, useContext, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// theme styles
const lightTheme = {
  backgroundColor: '#f7f7f7',
  textColor: '#1f1e1e',
};

const darkTheme = {
  backgroundColor: '#1f1e1e',
  textColor: '#f7f7f7',
};

const ThemeContext = createContext(lightTheme); // default theme

const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const Screen = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <StatusBar
        barStyle={theme === lightTheme ? 'dark-content' : 'light-content'}
      />
      <Text style={{color: theme.textColor}}>
        Current Theme: {theme === lightTheme ? 'Light' : 'Dark'}
      </Text>
      <TouchableOpacity
        onPress={toggleTheme}
        style={[styles.button, {borderColor: theme.textColor}]}>
        <Text style={{color: theme.textColor}}>Click to Change the Theme</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Screen />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default App;
