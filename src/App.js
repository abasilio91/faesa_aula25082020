import React, {useState} from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

//JSX - Javascript XML

const App = () => {

    const [students, setStudents] = useState([
        {
            id: 0,
            name: 'otávio',
            email: 'otavio.lube@faesa.br',
            institution: 'FAESA'
        },
        {
            id: 1,
            name: 'Dimitri',
            email: 'dimitri@gmail.com',
            institution: 'ESTACIO'
        },
        {
            id: 2,
            name: 'Adam',
            email: 'adam@gmail.com',
            institution: 'UFU'
        }
    ])                                                   //colchetes = array

    function insertRandomStudent(){
        const randomNumber = Math.random()*100;
        let newStudent = {
            id: randomNumber,
            name: `student${randomNumber}`,
            email: `student${randomNumber}@gmail.com`,
            institution: `institution ${randomNumber}`
        }
        console.log('Student Created',newStudent);
        setStudents([...students, newStudent]); //mutabilidade
        // students.push(newStudent);
    }

    return (
        <>
            <Header text = "Meu cabeçalho personalizado"/>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Instituição</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map(s=> {
                        return(
                            <tr key={s.id}>
                                <td>{s.name}</td>
                                <td>{s.email}</td>
                                <td>{s.institution}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <button type="button" onClick={insertRandomStudent}>
                Inserir aluno aleatório
            </button>

            <Footer text = "Meu rodapé personalizado"/>
        </>
    );
}

export default App

{/* {                <ul>
                    <li>Home</li>
                    <li>Contato</li>
                    <li>Mapa</li>
                </ul>} */}
