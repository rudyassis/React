import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(() => ({
    container: {
        padding: '10px 0'
    }
}))

const Page = ({ title, Component }) => {
    const classes = useStyles()

    return (
        <>
            <Typography variant='h3'>
                {title}
            </Typography>
            <Component />
        </>
    )
}

export default Page