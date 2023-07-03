import {createContext,useContext,Dispatch,SetStateAction,useState} from 'react';

interface ITheme {
  name: string;
  description: string;
  color: {
    base: string;
    inverted: string;
  };
  background: {
    fill: string,
    image: string,
  };
  button: {
    action: string,
    success: string,
    size: string,
  };
}


export const emptyTheme : ITheme = { 
name: "", 
description: "",
color: {
  base: "",
  inverted: ""
}, background: {
  fill: "",
  image: "" },
button: {
  action: "",
  success: "",
  size: "" }
}



interface IThemeContext {
  themeId: string;
  setThemeId: Dispatch<SetStateAction<string>>;
  data: ITheme;
  setData: Dispatch<SetStateAction<ITheme>>;
}

const ThemeContext = createContext<IThemeContext>({
  themeId: "",
  setThemeId: (): string => "",
  data: emptyTheme,
  setData: () : ITheme => (emptyTheme),
});

export const ThemeContextProvider = ({
  children, }:
  {
    children: React.ReactNode,
  }) => {

  const [themeId, setThemeId] = useState("");
  const [data, setData] = useState<ITheme>(emptyTheme);

  return (
    <ThemeContext.Provider value={{
      themeId,
      setThemeId,
      data,
      setData,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);