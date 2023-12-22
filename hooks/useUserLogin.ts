import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"
import { UserLoginData } from "@/store/reducers/user/types"

const loginUser = async (user: UserLoginData) => {
    console.log("got user", user)
    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('password', user.password);
    console.log("url", `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/login`)

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/login`, formData
        )
        console.log("response ---->", response)

        return response
    } catch (error) {
        console.log("error", error)
        return { "status": "failed", "error": "User does not exists." }
    }



}

export const useUserLogin = () => {
    return useMutation({ mutationFn: loginUser })
}