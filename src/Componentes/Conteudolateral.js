
import img  from './imagens/Instagram-Logo-PNG-Image-1.png' ;
import logo from './imagens/Instagram-Logo.png';
import Listitem from './Listitem';
import { FaHouse } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SiAzuredataexplorer } from "react-icons/si";
import { GiTalk } from "react-icons/gi";

import { GrConfigure } from "react-icons/gr";
export default function Conteudolateral() {
    return (


        <div className='Conteudolateral'>

           <img src={img} className='i'  alt='i' height='40' width='40'/>
            <img src={logo} className='logo'   alt='logo' height="60" />
      
            <div>
                <ul className='menulateral'>
                   
                    <Listitem texto='Home' icone={<FaHouse  style={{color:'black'}} /> } />
                    <Listitem texto='Pesquisar' icone={<IoIosSearch />}/>
                    <Listitem texto='Explorar' icone={< SiAzuredataexplorer/>}/>
                    <Listitem texto='Mensagens' icone={<GiTalk />} />
                    <Listitem texto='Configurações' icone={<GrConfigure />} />

                </ul>
            </div>
        </div>

    );
}