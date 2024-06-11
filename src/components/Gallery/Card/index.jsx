function Card({ data, fav, expand }) {

    const {titulo, fuente, id, path} = data;

    return (
        <figure id={id}>
            <img src={path} alt={titulo} />
            <figcaption>
                <h4>{titulo}</h4>
                <footer>{fuente}</footer>
                <div>
                    <button>
                        <i>{fav}</i>
                    </button>
                    <button>
                        <i>{expand}</i>
                    </button>
                </div>
            </figcaption>
        </figure>
    )
};

export default Card;