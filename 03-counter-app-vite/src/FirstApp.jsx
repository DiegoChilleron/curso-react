import PropTypes from 'prop-types';

// const getResult = (a, b) => {
//     return a + b;
// }

const Parrafo = 'Esto es un párrafo';

// export const FirstApp = () => {
//     return (
//         <>
//             <h2>{ getResult(4,3) }</h2>
//             {/* <code>{JSON.stringify(newMessage)}</code>*/}
//             <h3>Soy un subtitulo</h3>
//             <p>{Parrafo}</p>
//         </>
//     )
// }

export const FirstApp = ({ title, subTitle, name }) => {

    return (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subTitle: 123,
    name: 'Diego Chilleron',
}