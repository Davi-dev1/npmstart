import img  from './imagens/Instagram-Logo-PNG-Image-1.png' ;
import logo from './imagens/Instagram-Logo.png';
import Listitem from './Listitem';
import { FaHouse } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SiAzuredataexplorer } from "react-icons/si";
import { BsFillCameraReelsFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { RiVideoAddFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

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
                    <Listitem texto='Pesquisar' icone={<IoIosSearch style={{color:'black'}} />}/>
                    <Listitem texto='Explorar' icone={< SiAzuredataexplorer   style={{color:'black'}}  />}/>
                    <Listitem texto='Reels' icone={<BsFillCameraReelsFill  style={{color:'black'}}   />} />
                    <Listitem texto='Mensagens' icone={<GiTalk  style={{color:'black'}}   />     } />
                    <Listitem texto='Notificacões' icone={<FaHeart  style={{color:'black'}}   />} />
                    <Listitem texto='Criar' icone={<RiVideoAddFill  style={{color:'black'}}   />} />
                    <Listiitem texto='Perfil' icone={ <CgProfile  style={{color:'black'}} />} />

                    <Listitem texto='Configurações' icone={<GrConfigure  style={{color:'black'}}   />} />

                </ul>
            </div>
        </div>

    );
}
