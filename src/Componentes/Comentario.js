        export default function Comentario(props) {
            return (
                <div className="Comentário">
                    <div className="Comentário-nome">{props.nome}</div>
                    <div className="Comentário-conteudo">{props.conteudo}</div>
                </div>
            );
        }