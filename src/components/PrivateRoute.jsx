import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';

function PrivateRoute() {
    const data = useSelector((e) => e.UserReducer);
    const navigate = useNavigate()
    if(!data.user){
        return navigate('/')
    }
}

export default PrivateRoute