export default function SmallContainer({ props }: { props: {title: string, subtitle: string} }) {
    return (
        <div className="bg-white p-8 px-10 rounded-md shadow-md w-full flex flex-col max-h-[100px] justify-center">
            <span>{props.title}</span>
            <h1 className="sm:text-3xl text-xl">{props.subtitle}</h1>
        </div>
    )
}