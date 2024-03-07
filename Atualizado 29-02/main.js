const Botões = document.querySelectorAll(".Botão");
const Textos = document.querySelectorAll(".Aba-conteúdo");

for(let i=0;i <Botões.length;i++){
    Botões[i].onclick = function(){

        for(let j=0;j<Botões.length;j++){
            Botões[j].classList.remove("ativo");
            Textos[j].classList.remove("ativo");
        }

        Botões[i].classList.add("ativo");
        Textos[i].classList.add("ativo");
    }
}
const Contadores = document.querySelectorAll(".Contador");
const TempoObjetivo1 = new Date("2024-08-05T00:00:00");
const TempoObjetivo2 = new Date("2024-10-05T00:00:00");
const TempoObjetivo3 = new Date("2024-12-05T00:00:00");
const TempoObjetivo4 = new Date("2024-11-05T00:00:00");

const Tempos = [TempoObjetivo1,TempoObjetivo2,TempoObjetivo3,TempoObjetivo4];



function CalculaTempo(TempoObjetivo){
    let TempoAtual = new Date();
    let TempoFinal = TempoObjetivo - TempoAtual;
    let Segundos = Math.floor (TempoFinal/1000);
    let Minutos = Math.floor (Segundos/60);
    let Horas = Math.floor (Minutos/60);
    let Dias = Math.floor (Horas/24);
    
    Segundos %= 60;
    Minutos %= 60;
    Horas %= 24;

    if (TempoFinal > 0){
        return [Dias,Horas,Minutos,Segundos];
        
    } else {
        return [0,0,0,0];
    }
}


    function AtualizaCronômetro (){
        for (let i=0; i<Contadores.length;i++){
            document.getElementById("Dias"+i).textContent = CalculaTempo(Tempos[i])[0];
            document.getElementById("Horas"+i).textContent = CalculaTempo (Tempos[i])[1];
            document.getElementById("Minutos"+i).textContent = CalculaTempo (Tempos[i])[2];
            document.getElementById("Segundos"+i).textContent = CalculaTempo (Tempos[i])[3];
            console.log("segundos"+i)
        }
    }
    function ComeçaCronômetro(){
        AtualizaCronômetro();
        setInterval (AtualizaCronômetro,1000)

    }
     
    ComeçaCronômetro();