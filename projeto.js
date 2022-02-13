function Verificarentrada() {
    NomeConvidado = document.getElementById('nome').Value;
    convidadosCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan']
    if (ConbidadosCristian.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innertext = 'voçe pode entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Voçê não pode Entrar !'
    }

}