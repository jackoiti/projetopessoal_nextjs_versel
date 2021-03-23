function Tempo(props) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toUTCString();

    return (
        <div>
            <div>{dynamicDateString}   (Dinâmico)</div>
            <div>{props.staticDateString}   (Estático)</div>
        </div>
    )
}

export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toUTCString();

    return {
        props: {
            staticDateString
        },
        revalidate: 10
    }

}

export default Tempo;