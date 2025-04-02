import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/gmezan" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/gmezan/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>My page - <a href="https://github.com/gmezan/me" target="_blank" rel="noreferrer">Gustavo Meza</a></p>
    </footer>
  );
}

export default Footer;