function Verificarentrada() {
    NomeConvidado = document.getElementById('nome').Value;
    ConvidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innertext = 'voçe pode entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Voçê não pode Entrar !'
    }

}