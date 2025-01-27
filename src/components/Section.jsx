const Section = ({children}) => {
    return(
        <section className="bg-custom-radial font-barto  h-auto min-h-[100vh] lg:min-h-[120vh] w-full overflow-hidden flex flex-col justify-center gap-10">
            {children}
        </section>
    )
}

export default Section