import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#01579b',
		},
	}
})

export const Theme = (props: { children: JSX.Element }) =>
	<ThemeProvider theme={theme}>
		{props.children}
	</ThemeProvider>

