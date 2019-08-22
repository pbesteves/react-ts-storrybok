import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    buttonPadding: string

    colors: {
      main: string
      secondary: string
    }
  }
}