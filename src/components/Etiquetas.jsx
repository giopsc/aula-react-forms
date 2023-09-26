import { useState } from 'react'
import './Etiquetas.scss'

export default function Etiquetas(){

    const [cliente, setCliente] = useState(
        {
            nome: '',
            email: '',
            cpf: ''
        }
    )

    const [listaClientes, setListaClientes] = useState([])

    const inserirCliente = (e)=> {
        e.preventDefault() // Comportamento padrão do submit é redirecionar o forms para algum lugar
        setListaClientes([...listaClientes, cliente])
        // console.log(listaClientes);
        setCliente(
            {
                nome: '',
                email: '',
                cpf: ''
            }    
        )
    }

    const cadastrarCliente = (e)=> {
        setCliente({...cliente, [e.target.name]: e.target.value}) // Pegando o nome evento que está ocorrendo no input, e atualizando o valor dele com o value 
    }

    return(
        <div className="divEtiqueta">
            <form onSubmit={inserirCliente}>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <label>Nome:
                        <input type="text" name="nome"
                        onChange={cadastrarCliente} value={cliente.nome}/>
                    </label>
                    <label>E-mail:
                        <input type="text" name="email"
                        onChange={cadastrarCliente} value={cliente.email}/>
                    </label>
                    <label>CPF:
                        <input type="text" name="cpf"
                        onChange={cadastrarCliente} value={cliente.cpf}/>
                    </label>
                    <button type="submit">Criar</button>
                </fieldset>
            </form>
            <div className="painel">

                {
                    listaClientes.map((cli, i) => 
                    <div className="etiqueta" key={i}>
                        <p>Nome: {cli.nome}</p>
                        <p>E-mail: {cli.email}</p>
                        <p>CPF: {cli.cpf}</p>
                    </div>    
                    )
                }    
            </div>
        </div>
    )
}