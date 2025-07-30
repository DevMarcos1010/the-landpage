
const app = document.getElementById('app');

const StartApp = () => {
    const content = `
        <div class="form">
            <h2>Login</h2>
            <form action="" id="form"> 
                <div class="inputBox">
                    <input type="text" name="" required="">
                    <label>Username</label>
                </div>
                <div class="inputBox">
                    <input type="password" name="" required="">
                    <label>Password</label>
                    <span><a class="forgotten" href="#" onclick="ForgotApp()">Forgot your password?</a></span>
                </div>
                <input class="submit" type="submit" name="" value="Submit">
                <p class="account-back">Don't have an account? <a href="#" onclick="SignUpApp()">Sign up</a></p>
            </form>
        </div>
        <div class="div-footer">
            <footer class="footer">
                <p>Created by <a href="/Projetos/codepen/linkedTree2/linkedTree.html" target="_blank">Marcos</a> | <a href="#" onclick="PrivacyApp()">Privacy Policy</a> | <a
                        href="#">Terms of Service</a>
                    | <a href="#" onclick="HelpApp()">Help</a></p>
                <span class="themeToggle" onclick="ThemeToggle()">
                    <p>Trocar tema</p>
                </span>
            </footer>
        </div>
    `;

    const container = document.getElementsByClassName('container')[0];
    container.setAttribute('id', 'start-app');
    app.innerHTML = content;
}
StartApp();

const ForgotApp = () => {
    const content = `
    <div class="form">
            <h2>Forgot your password?</h2>
            <p class="subtitle">Enter a new password to gain acess =D</p>
            <br>
            <form action="/Projetos/THE landpage/login landpage/loginIndex.html">
                <div class="inputBox">
                    <input type="password" name="" required="">
                    <label>New password</label>
                </div>
                <div class="inputBox">
                    <input type="password" name="" required="">
                    <label>Confirm password</label>
                </div>
                <input class="submit" type="submit" name="" value="Submit" onclick="alert('Password changed!')">
                <span class="go-back" onclick="StartApp()" style="cursor: pointer;">Go back</span>
            </form>

        </div>
        <div class="div-footer">
            <footer class="footer">
                <p>Created by <a href="/Projetos/codepen/linkedTree2/linkedTree.html">Marcos</a> | <a href="#" onclick="PrivacyApp()">Privacy Policy</a> | <a
                        href="#">Terms of Service</a>
                    | <a href="#" onclick="HelpApp()">Help</a></p>
                <span class="themeToggle" onclick="ThemeToggle()">
                    <p>Trocar tema</p>
                </span>
            </footer>
        </div>
    `;

    
    app.innerHTML = content;
}

const PrivacyApp = () => {
    const content = `
    <div class="form" id="privacyBox">
        <h1>Políticas de Privacidade</h1>
        <br>
        <p><strong>ATENÇÃO:</strong> Este site e qualquer outra página associada a ele
            não possui nenhuma funcionalidade prática de aplicação cotidiana, seu
            desenvolvimento se restringe apenas à mesura dos conhecimentos sobre as
            linguagens de programação do desenvolvedor deste projeto</p>
        <p>O desenvolvedor pede encarecidamente para não colocar nenhum dado real nos
            campos de preenchimento deste projeto, sinta-se à vontade para explorar
            os recursos desenvolvidos com tanta dedicação usando emails, nicknames
            e senhas fictícias. Apesar deste projeto não coletar nenhum dado do que
            for preenchido pelo usuário, é apenas uma medida de segurança para
            garantir a integridade de seus dados e evitar quaisquer inconvenientes
            futuros.</p>
        <br>
        <p>Este site não coleta nenhum tipo de dado pessoal, seja ele sensível ou não,
            de seus usuários, não havendo a necessidade de uma política de privacidade
            mais detalhada.</p>
        <span class="signature"><p>Atenciosamente, o desenvolvedor</p></span>
        <br>
        <p class="go-back" onclick="StartApp()" style="cursor: pointer;">Go back</p>
        </div>
    `;
    const container = document.getElementsByClassName('container')[0];
    container.setAttribute('id', 'privacyContainer');
    app.innerHTML = content;
}

const SignUpApp = () => {
    const content = `
    <div class="form">
            <h2>Sign Up</h2>
            <form action="/Projetos/THE landpage/login landpage/loginIndex.html">
                <div class="inputBox">
                    <input type="text" placeholder="abcde@signup.com" required="">
                    <label>Email</label>
                </div>
                <div class="inputBox">
                    <input type="text" placeholder="Abcde" name="" required="">
                    <label>Username</label>
                </div>
                <div class="inputBox">
                    <input type="password" name="" required="">
                    <label>Password</label>
                </div>
                <div class="inputBox">
                    <input type="password" name="" required="">
                    <label>Confirm Password</label>
                </div>
                <input class="submit" type="submit" name="" value="Submit">
                <p class="account-back" id="login">Already have an account? <a href="#" onclick="StartApp()">Log in</a></p>
            </form>
        </div>
        <div class="div-footer">
            <footer class="footer">
                <p>Created by <a href="/Projetos/codepen/linkedTree2/linkedTree.html">Marcos</a> | <a href="#" onclick="PrivacyApp()">Privacy Policy</a> | <a
                        href="#">Terms of Service</a>
                    | <a href="#" onclick="HelpApp()">Help</a></p>
                <span class="themeToggle" onclick="ThemeToggle()">
                    <p>Trocar tema</p>
                </span>
            </footer>
        </div>
    `;

    app.innerHTML = content;
}

const HelpApp = () => {
    const content = `
    <div class="form" id="privacyBox">
        <h1>Precisa de ajuda?</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZNahS3OHPwA?si=-MeNHBPfXKOEs4ZW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>        <br>
        <br>
        <p class="go-back" onclick="StartApp()" style="cursor: pointer;">Go back</p>
        </div>
    `;

    const container = document.getElementsByClassName('container')[0];
    container.setAttribute('id', 'privacyContainer');
    app.innerHTML = content;
}

function ThemeToggle() {
    document.body.classList.toggle("dark");
}
