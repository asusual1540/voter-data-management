import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useDispatch } from "react-redux"


import * as VoterActions from "../store/reducers/voter/actionTypes"
import { SetVotersPayload, Voter } from "@/store/reducers/voter/types"

const mergeArrayElements = (array) => {
    return array.map((element) => {
        const { area, ...rest } = element;
        return { ...rest, ...area };
    });
}

const getVoters = async (token: string, dispatch) => {
    console.log("token", token)
    if (!token.length) {
        console.log("no lenth", token.length)
        return
    }
    console.log("url", `${process.env.NEXT_PUBLIC_API_URL}/api/v1/voter/`)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    try {
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/v1/voter/`
        )
        console.log("response ---->", response)
        let modified_voters = mergeArrayElements(response.data.voters)
        let payload: SetVotersPayload = {
            voters: modified_voters
        }
        dispatch({
            type: VoterActions.SET_VOTERS, payload: payload
        })
        return modified_voters
    } catch (error) {
        console.log("error", error)
        return {}
    }
}

export const useGetVoters = (token: string) => {
    console.log("token -> ", token)
    const dispatch = useDispatch()
    return useQuery(
        {
            queryKey: ["get_voters"],
            queryFn: () => getVoters(token, dispatch),

        }
    )
}