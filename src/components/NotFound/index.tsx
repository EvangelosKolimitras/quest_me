
import notFoundImage from '../../images/404.png'
import { useStyles } from './style';
export const NotFound:React.FC = () => {
    const classes = useStyles();
    return (
        <img src={notFoundImage} className={classes.img} alt="404 - Page not found"/>
    )
}