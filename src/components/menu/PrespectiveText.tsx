
export default function PrespectiveText({ label }: { label: string }) {
    return (
        <div className="group relative flex h-full w-full items-center justify-center">
            <p className="transform-style-preserve-3d absolute h-fit translate-y-0 opacity-100 duration-200 group-hover:-translate-y-[50%] group-hover:-rotate-x-90 group-hover:opacity-0">
                {label}
            </p>
            <p className="transform-style-preserve-3d absolute h-fit translate-y-[50%] rotate-x-90 opacity-0 duration-200 group-hover:translate-y-0 group-hover:rotate-x-0 group-hover:opacity-100">
                {label}
            </p>
        </div>
    );
}
