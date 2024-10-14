
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { TbLocationShare } from "react-icons/tb";
import { CiSaveDown2 } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";

export default function Post(props) {
    return (


        <div className="Post">
            <div className="Post-cabeçalho">


                
                <div className="Post-avatar">
                   <img className="IMG" src={props.foto} />
                
                    <div className="Post-nome">{props.nome}</div>
                    <div className="Post-mais">{<FiMoreHorizontal />}
                </div>
                </div>
                <div className="Post-conteudo">
                    <img src={props.foto} />
               
                </div>
                <div className='Post-rodape'>
                    <div className='Post-curtida'>{ < FaRegHeart />}  { < FaRegComment />} { < TbLocationShare />}   </div> <div className='Post-save'>{ < CiSaveDown2 />}</div>*
                    <div className="Post-like">
                    <div className="Post-nome"> </div>

                        <div className="Post-comentario">{props.nome} <p>"Din Din Don faz meu violão"</p></div>

                    </div>


                </div>

            </div>

        </div>


    );

}