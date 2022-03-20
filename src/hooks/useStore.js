import { useDispatch, useSelector } from 'react-redux'

const useStore = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)

    return { dispatch, state }
}

export default useStore