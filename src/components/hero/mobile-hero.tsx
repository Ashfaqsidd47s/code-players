

export default function MobileHero() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="w-full p-4 lg:max-w-[80%]">
                <div className="flex w-full flex-wrap items-center justify-center gap-4 text-center text-4xl">
                    <p>Hi I am</p>
                    <div className="bg-primary/10 h-[70px] w-[70px] flex-none overflow-hidden rounded-full">
                        <img
                            src="/profile.jpg"
                            alt="Profile Picture"
                            width={70}
                            height={70}
                            className="rounded-full object-cover grayscale-100"
                        />
                    </div>{" "}
                    <p className="text-primary w-full text-center font-semibold">
                        Mohammad Ashfaq
                    </p>
                </div>
                <h1 className="md:text-8x text-center text-6xl font-bold">
                    Building Reliable
                </h1>
                <h1 className="text-center text-6xl font-bold md:text-8xl">
                    <span className="text-primary">Digital</span> Experiences,
                </h1>
                <h1 className="text-center text-6xl font-bold md:text-8xl">
                    End to End.
                </h1>
                <p className="py-2 text-center text-4xl">
                    Full-stack developer
                </p>
                <button className="bg-primary mt-6 flex w-full cursor-pointer items-center justify-center rounded-full p-4 px-6 md:max-w-[220px]">
                    Let&apos;s connect
                </button>
            </div>
        </div>
    );
}
