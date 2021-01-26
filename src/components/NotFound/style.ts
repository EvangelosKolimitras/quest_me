import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme:Theme) => ({
    img:{
        width:"50vw", 
        height:"50vh",
        position:"absolute",
        left: "50%",
        top:"50%",
        transform: `translate("-150%","-50%")`
    }
}))