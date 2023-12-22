/* eslint-disable no-unused-vars */
export interface ImageProps {
    id: number
    original_location: string
    annotated_location: string
    format: string
    completed: string
    height: string
    width: string
    created_at: string
    updated_at: string
}


export interface OraclePayload {
    pretext: string;
    context: string;
    prompt: string;
}



export interface TabData {
    index: number;
    label: string;
    slug: string;
    data: string;
}

export enum Status {
    'SUCCESS' = "SUCCESS",
    'PENDING' = "PENDING",
    'FAILED' = "FAILED",
    'UNNECESSARY' = "UNNECESSARY",
}


export interface SharedModalProps {
    index: number
    images?: ImageProps[]
    currentPhoto?: ImageProps
    changePhotoId: (newVal: number) => void
    closeModal: () => void
    navigation: boolean
    direction?: number
}


