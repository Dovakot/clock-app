enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  CUSTOM = 'custom',
}

const getTheme = (theme: string) => {
  switch (theme) {
    case Theme.DARK:
      return Theme.DARK;

    case Theme.CUSTOM:
      return Theme.CUSTOM;

    default:
      return Theme.LIGHT;
  }
};

export { Theme, getTheme }
