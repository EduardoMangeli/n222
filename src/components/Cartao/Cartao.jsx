import { ContainerCartao, Titulo } from "./style";

const Cartao = ( props ) => (
    <ContainerCartao>
        <Titulo>{props.titulo}</Titulo>
        <p>{props.letra}</p>
    </ContainerCartao>
);

export default Cartao;