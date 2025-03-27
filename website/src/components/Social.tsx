import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaInstagram, FaDribbble } from 'react-icons/fa'


const socials = [
    { icon: <FaGithub /> , path: "" },
    { icon: <FaLinkedinIn /> , path: "" },
    { icon: <FaInstagram /> , path: "" },
    { icon: <FaDribbble /> , path: "" },
]

const Social = ({containerStyles, iconsStyles}) => {
  return (
    <div
    className={containerStyles}>
        {socials.map((item, index)=> {
            return (
                <Link key={index} href={item.path} className={iconsStyles} >
                    {item.icon}
                </Link>
            )
        })}
    </div>
  )
}

export default Social
