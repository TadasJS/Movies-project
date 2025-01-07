import { useParams } from "react-router-dom"



export function CardInfo (props) {
    const {id} = useParams()

    console.log('cia use params id...',id)

    return(
        <>
       <div>cia bus card info id {props.id}</div> 
        <div>card info title {props.title}</div> 
        
        
        </>
    )
}