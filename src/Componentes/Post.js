
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa6";
import { TbLocationShare } from "react-icons/tb";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { IconContext } from "react-icons";
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
                    <div className="Elementos">
                    <div className="Curtida">
                
                        { < FaRegHeart />}  
                        </div>
                        <div className="Comentário">
                        { < FaRegComment />} 
                        </div>
                        <div className="Compartilhar">
                        { < TbLocationShare />}
                        </div>
                        </div>
                        <div className="Salvar">
                         { < BsBookmark />}
                         </div>
                         </div>
                         <section className="like"> 
                        <span>61 curtidas</span>

                           </section>
                    <div className="Post-like">
                    <div className="Post-nome"> </div>

                        <div className="Post-comentario"> 
                            
                           
                            
                            <strong>{props.nome} </strong> {props.conteudo}
                        
                            </div>
                         <div className="horas">

                <time>Há 1 hora</time>

                         </div>
                         <div classname="comment">

                 <div className="fake-comment">
                
                <IconContext.Provider value={{size:'25px'}}>
                    <div className="comment-icon"  >
                    <BsEmojiSmile />
                    </div>
                </IconContext.Provider>
                <input placeholder="Adicionar um comentário..." />
                <button>Publicar</button>
                </div>

</div>

                         </div>
                    </div>


    

            </div>

    
    );

}