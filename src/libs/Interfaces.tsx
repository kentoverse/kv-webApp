

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

export type {
    ITheme,
}

