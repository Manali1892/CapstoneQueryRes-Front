   import React,{useEffect} from "react";
   import { useSelector, useDispatch } from "react-redux";
    import {Navigate, Outlet} from "react-router-dom";
    import { DefaultLayout } from "../../layout/DafaultLayout";
    import { loginSuccess } from "../login/loginSlice";
    import { getUserProfile } from "../../page/dashboard/userAction";
    
    import { fetchNewAccessJWT } from "../../api/userApi";


    export function PrivateRoute()  {
        const dispatch = useDispatch();
        const { isLogged=true } = useSelector(state => state.login);
        const { user } = useSelector(state => state.user);
    
        useEffect(() => {
            const updateAccessJWT = async () => {
                const result = await fetchNewAccessJWT();
                result && dispatch(loginSuccess());
            };
    
            !user._id && dispatch(getUserProfile());
    
            !sessionStorage.getItem("accessJWT") &&
                localStorage.getItem("queryresSite") &&
                updateAccessJWT();
    
            !isLogged && sessionStorage.getItem("accessJWT") && dispatch(loginSuccess());
        }, [dispatch, isLogged, user._id]);
       return isLogged ? <DefaultLayout><Outlet /></DefaultLayout>: <Navigate to="/" />;
  
  
  
    }

  