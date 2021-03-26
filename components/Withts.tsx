
interface Props {
    title: number
    subtitle?: string | undefined
}


export default function Withts({title, subtitle}: Props) {

    return (
        <div>With JS : {title} </div>
    )
}