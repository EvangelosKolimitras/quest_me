import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { blue, lightGreen, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: blue["400"]
		},
		background: {
			default: "#222",
		},
		text: {
			primary: "#ffffff",
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

