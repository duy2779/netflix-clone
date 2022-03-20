import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Grid from '../grid'

const MoviesSkeleton = () => {
    return (

        <Grid>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {
                    new Array(6).fill(0).map((_, i) => <Skeleton key={i} height={163} />)
                }
            </SkeletonTheme>
        </Grid>
    )
}

export default MoviesSkeleton