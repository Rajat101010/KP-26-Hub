import Logo from '../images/logo.png'

function NormalBody() {
    return (
        <main>
            <center>
                <div className="normal_body_parent">
                    <img src={Logo} alt="logo" className="normal_body_watermark" />
                </div>
            </center>
        </main>
    );
}

export default NormalBody;
