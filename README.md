# React Native Theme Switcher: Light and Dark Themes

A basic example of a theme switcher in React Native. This example assumes you have two theme styles (light and dark) defined in your styles, and it uses the React Context API to manage the theme state.

In this example:
<ul>
  <li>The ThemeContext is created using the createContext function.</li>
  <li>The ThemeProvider component manages the theme state and provides it to its children through the context provider.</li>
  <li>The useTheme hook is used within the ThemedComponent to access the current theme and the toggleTheme function.</li>
  <li>The ThemedComponent renders content with styles based on the current theme and includes a button to toggle between themes.</li>
  <li>The StatusBar component is used to set the status bar style based on the current theme.</li>
</ul>

Screen -

<div>
<img src="https://github.com/shevon14/rn-theme-switch/blob/main/thumbnail.png" alt="screen1" width="800"/>
</div>

## Tech Stack -

* React Native
* React Native Context API

## Contact

Shevon Soyza - [https://www.linkedin.com/in/shevon-soyza/](https://www.linkedin.com/in/shevon-soyza/)


<p align="right">(<a href="#top">back to top</a>)</p>
