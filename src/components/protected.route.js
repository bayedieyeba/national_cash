import React from "react";
import Auth from "./Auth";
import { Route ,Navigate} from "react-router-dom";

export const ProtectedRoute  = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={
            (props) => {
                if(Auth.isAuthentificated()){

                    return <Component {...props} />
                }
                else {
                    return <Navigate to= {
                        {
                            pathname : "/upload-image",
                            state : {
                                from : props.location
                            }
                        }
                    } />
                }
            }
        } />
    )
}