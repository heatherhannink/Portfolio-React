const Footer = () => {
    return (
      <footer style={{ backgroundColor: '#DD6B20', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <a href='https://github.com/heatherhannink'>
              <img src="images/github Logo.webp" alt="Github" style={{ width: '50px', height: '50px' }} />
            </a>
            <a href='https://www.linkedin.com/in/heather-hannink-1b0b56282/'>
              <img src="images/LinkedIn logo.png" alt="LinkedIn" style={{ width: '50px', height: '50px' }} />
            </a>
            
        </ul>
      </footer>
    );
  };
  export default Footer;