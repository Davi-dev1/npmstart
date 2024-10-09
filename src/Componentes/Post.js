import  { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";



export default function Post(props) {
    return (


        <div className="Post">
            <div className="Post-cabeçalho">
                <div className="Post-avatar">
                    <div className="Post-nome">{props.nome}</div>
                </div>
                <div className="Post-conteudo">
                    <img src={props.foto} />
                </div>
                <div className='Post-rodape'>
                    <div className='Post-curtida'>{ < FaHeart />}</div>
                    <div className="Post-like">
                        <div className="Post-comentario">Comentários..</div>

                    </div>


                </div>

            </div>

        </div>


    );

}