import axios from "axios";
import { useEffect, useState } from "react";


const useToken = (user) => {

    const [token, setToken] = useState('');

    // console.log(user




    useEffect(() => {

        const email = user?.user?.email

        console.log(email)



        if (email) {
            const url = `https://fathomless-bayou-46911.herokuapp.com/user/${email}`;
            axios.post(url)

                .then(function (response) {
                    console.log(response);

                    if (response.status === 200) {
                        const accessToken = response.data

                        localStorage.setItem('accessToken', accessToken)
                        setToken(accessToken)
                    }


                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }, [user])

    return [token];


}

export default useToken;