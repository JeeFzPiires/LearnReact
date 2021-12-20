import './App.css'
import React from "react";

import DiretaPai from './components/comunicacao/DiretaPai';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmentos';

export default (_) => (
    <div className="App">
        <h1>Fundamentos React</h1>



        <div className="Cards">
            <Card titulo="#09 - Comunicação Direta" color="#982595">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982595">
                <ParOuImpar numero={20}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Ronaldo' }}></UsuarioInfo>
                <UsuarioInfo usuario={{ email: 'fer@nando.com' }}></UsuarioInfo>
            </Card>
            
            <Card titulo="#07 - Desafio Repeticao" color="#3a9ad9">
                <TabelaProdutos></TabelaProdutos>

            </Card>

            <Card titulo="#06 - Componente com Filhos" color="#ff4c65">
                <ListaAlunos>

                </ListaAlunos>

            </Card>
            <Card titulo="#05 - Componente com Filhos" color="#00c8f8">
                <Familia sobrenome="Piires">
                    <FamiliaMembro nome="Jeferson" />
                    <FamiliaMembro nome="Wemerson" />
                    <FamiliaMembro nome="Robson" />
                </Familia>

            </Card>

            <Card titulo="#04 - Desafio Aleatorio" color="#d9d9d9">
                <Aleatorio min={1} max={60} />

            </Card>

            <Card titulo="#03 - Fragmento" color="#e94c6f">
                <Fragmento />

            </Card>

            <Card titulo="#02 - Com Parametro" color="#fa6900">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Jeferson"
                    nota="9.6"
                />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#e8b71a">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
);
