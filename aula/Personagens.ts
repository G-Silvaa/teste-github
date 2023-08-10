

export default class Personagens {
  
    constructor(
      public nome: string,
      public energia: number ,
      public ataque: number ,
      public defesa:number 
    
    ){}

    status(): void {
      console.log("sansa");
      console.log("Nome: ",this.nome);
      console.log("Energia: ",this.energia.toFixed(1));
      console.log("Ataque: ",this.ataque.toFixed(1));
      console.log("Defesa: ",this.defesa.toFixed(1));
    }

    atacar(): void {
      this.ataque += Math.random() * 7;
      this.energia -= Math.random() * 10;

        this.semEnergia()
      
          if(this.ataque > 100){
            this.ataque = 100;
              console.log("==========================")
              console.log("Seu ataque esta no maximo ")
              console.log("==========================")

              
              
              
          }
      
    }

    defender():void {
      this.defesa += Math.random() * 5;
      this.energia -= Math.random() * 10;
      this.semEnergia();
          
    
          if(this.defesa > 100){
            this.defesa = 100;
              console.log("==========================")
              console.log("Sua defesa esta no maximo ")
              console.log("==========================")
              
          }
      
    }

    descansar():void {
      this.energia += Math.random() * 10;
      if(this.energia>100){ 
        this.energia = 100;
          console.log("==========================")
          console.log('Sua energia esta no maximo')
          console.log("==========================")
          
          
      }
    }

   batalhar():void{
    this.energia -= Math.random() * 100;
                if(this.energia<=0){
                  this.energia = 0;
                console.log("==========================")
                console.log("sansa perdeu a batalha");
                console.log("==========================")
                
                
            }else{
                if(this.energia !=0){
                    console.log("==========================")
                    console.log('Sansa ganhou a batalha')
                    console.log("==========================")
                   
                }
            }
   }

   semEnergia(): void {
    if(this.energia < 0){
      this.energia = 0;
      
        console.log("==========================")
        console.log("Energia insuficiente      ")
        console.log("==========================")
         
    }
   }

}

