export default function Fotoavatar(props) {
    return (
        <div className="Pictureavatar">
            <img src={props.avatar} alt={props.nome} />
        </div>
    )
}