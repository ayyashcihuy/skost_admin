import { convertAmountToIDRString } from "../../../model/transactions";

export default function SmallContainer({ props }: { props: {title: string, subtitle: number, description: string} }) {
    return (
        <div className="bg-white p-8 px-10 rounded-md shadow-md w-full flex flex-col max-h-[100px] justify-center">
            <span>{props.title}</span>
            <h1 className="sm:text-3xl text-xl">{props.description === "Amount" ? `${convertAmountToIDRString(props.subtitle)}` : `${props.subtitle} ${props.description}`}</h1>
        </div>
    )
}