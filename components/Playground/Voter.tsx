import React from 'react'
import Table from '../Table/Table'
import { useGetVoters } from '@/hooks/useGetVoters'
import { useSelector } from 'react-redux'
import { ApplicationState } from '@/store/reducers/rootReducer'




export default function Voter() {
    let user_state = useSelector((state: ApplicationState) => state.user_state)

    let { isLoading, isFetching, isError, data, error } = useGetVoters(user_state.token)



    return (
        <Table />
    )
}
