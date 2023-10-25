import Cartao from "../../components/Cartao/Cartao";
import { ContainerListagem, TituloListagem } from "./style";

const dados = [
    {
        'titulo': 'ananais',
        'letra': 'z'
    },
    {
        'titulo': 'banana',
        'letra': 'w'
    },
    {
        'titulo': 'cenoura',
        'letra': 'y'
    },
    {
        'titulo': 'casa',
        'letra': 'a'
    },
    {
        'titulo': 'felpudo',
        'letra': 'k'
    }
]

const cartoes = dados.map(
    (el, i) => (
        <Cartao
            key={i}
            titulo={el.titulo}
            letra={el.letra}
        />
    )
)

const Listagem = () => (
    <>
    <TituloListagem>Listagem</TituloListagem>
    <ContainerListagem>
        {cartoes}
    </ContainerListagem>
    </>
);

export default Listagem;