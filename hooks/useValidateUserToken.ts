import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useDispatch } from "react-redux"

import { CheckUserSuccessPayload } from "@/store/reducers/user/types"
import * as UserActions from "../store/reducers/user/actionTypes"


const checkUserToken = async (token: string, dispatch) => {
    console.log("token", token)
    if (!token.length) {
        console.log("no lenth", token.length)
        return
    }
    console.log("url", `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/me`)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/me`
        )
        console.log("response ---->", response)
        if (response.data.status == "failed") {
            console.log("response.data.status ---->", response.data.status)
            let payload: CheckUserSuccessPayload = {
                status: false
            }
            dispatch({
                type: UserActions.CHECK_USER_SUCCESS, payload: payload
            })
        }
        if (response.data.status == "success") {
            console.log("response.data.status ---->", response.data.status)
            let payload: CheckUserSuccessPayload = {
                status: true
            }
            dispatch({
                type: UserActions.CHECK_USER_SUCCESS, payload: payload
            })
        }
        return response
    } catch (error) {
        console.log("error", error)
        let payload: CheckUserSuccessPayload = {
            status: false
        }
        dispatch({
            type: UserActions.CHECK_USER_SUCCESS, payload: payload
        })
    }



}

export const useValidateUserToken = (token: string) => {
    console.log("token -> ", token)
    const dispatch = useDispatch()
    return useQuery(
        {
            queryKey: ["validate_user_token"],
            queryFn: () => checkUserToken(token, dispatch),

        }
    )
}