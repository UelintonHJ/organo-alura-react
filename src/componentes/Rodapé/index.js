import './Rodapé.css'

const Rodapé = () => {
    return (
        <footer className='footer'>
            <div className='social-media-imgs'>
                <ul>
                    <li>
                        <a href='https://www.facebook.com/AluraCursosOnline/?locale=pt_BR'
                            target='_blank'>
                            <img src='/imagens/fb.png' alt='Link facebook da Alura' /></a>
                    </li>
                    <li>
                        <a href='https://twitter.com/AluraOnline?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
                            target='_blank'>
                            <img src='/imagens/tw.png' alt='Link twitter da Alura' /></a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/aluraonline/'
                            target='_blank'>
                            <img src='/imagens/ig.png' alt='Link instagram da Alura' /></a>
                    </li>
                </ul>
            </div>
            <div className='logo-app'>
                <img src='/imagens/logo.png' alt='Logo do Organo' />
            </div>
            <div className='text-footer'>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}

export default Rodapé