import Personagens from "./Personagens";
import prompt from "prompt-sync"

let sansa: Personagens = new Personagens("Sansa Stark", 100, 40, 20)

let teclado = prompt();
let option: number = 0;
while(option != 9) {
    console.log('+||||||||||||||| Personagem ||||||||||||||||+');
    console.log('|1.  Treinar ataque                          ');
    console.log('|2.  Treinar defesa                          ');
    console.log('|3.  Descansar                               ');
    console.log('|4.  Entrar em batalha                       ');
    console.log('|8.  imprimir atributos                      ');
    console.log('|9.  Sair                                    ');
    console.log('+|||||||||||||||||||||||||||||||||||||||||||+');

    option = +teclado('escolha uma ação:  ')

    switch (option) {
        case 1:
           sansa.atacar();
           sansa.status();
        
            break;

        case 2:
           sansa.defender();
           sansa.status();
            break;

        case 3:
            sansa.descansar();
            sansa.status();
            break

        case 4:
            
            sansa.batalhar();
            sansa.status();
                break

        case 8:
            sansa.status();;
            break;

        default:
            break;
    }

}

