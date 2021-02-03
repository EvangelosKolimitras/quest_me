import { ReactComponent as Logo } from '../../images/raise-hand.svg'
import SvgIcon from '@material-ui/core/SvgIcon'
import { useStyles } from './styles'

export const LogoIcon = (props: any) => {
	const classes = useStyles()
	return (
		<SvgIcon className={classes.root} component={Logo} viewBox="-100 0 800 476.6" />
	)
}
