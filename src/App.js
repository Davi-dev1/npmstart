import Conteudolateral from './Componentes/Conteudolateral';

// importar uma imagem para o projeto
import logo from './logo.svg';
import lobo from './165138-conceito-de-para-hipnose-vetor.jpg';

// importar estilos ao projeto
import './App.css';
import Conteudoprincipal from './Componentes/Conteudoprincipal';
import Conteudoladodireito from './Componentes/Conteudoladodireito';
export default function App() { // essa funçãpo é exportada para ser usada em outros arquivos
  //O componente é App retorna um JSX(html do javascript) que é renderizado na tela (Só pode usar uma unica tag(<div></div>))
  return (
    <div className="App">
    
      <Conteudolateral />
     <Conteudoprincipal/>
     <Conteudoladodireito/>
      </div>

  );
}


