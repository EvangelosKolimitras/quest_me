import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { blue, lightBlue, lightGreen, purple, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#222"
		},
		background: {
			default: blue["400"],
		},
		text: {
			primary: "#fefefe",
			secondary: "#212121"
		},
		success: {
			main: lightGreen['A400']
		},
		error: {
			main: red[500]
		}
	}
})

export const Theme = (props: { children: JSX.Element }) =>
	<ThemeProvider theme={theme}>
		{props.children}
	</ThemeProvider>

