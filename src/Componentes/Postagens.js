import Post from './Post' ;
import foto from './imagens/unnamed.jpg';
import foto2 from './imagens/black-sabbath6289.jpg';
export default function Postagens() {
    return (
        <div className="postagens">
            
            <Post nome="joao" foto={foto} />
            <Post nome="davi" foto={foto} />
            <Post nome="Luis" foto={foto2} />
        </div>
    );
}