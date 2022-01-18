import Container from '@mui/material/Container'
import { makeStyles } from '@material-ui/core'

import Header from "../partials/Header/Header"


const useStyles = makeStyles(() => ({
    container: {
        padding: '10px 0'
    }
}))

const Default = ({ children }) => {
    const classes = useStyles()

    return (
        <>
            <Header />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    )
}

export default Default