<template>
    <div>  
     <v-card class="center">
     
      <v-icon x-large @click="play" >mdi-play</v-icon>
      
      <v-form >
        <v-row><v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field v-model="palavraDigitada"
            label=""
            solo
            class="red"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-btn
    elevation="4"
     x-large
     @click="enviar"
   >Enviar</v-btn>


     <v-btn
    elevation="4"
     x-large
     @click="palavraAleatoria"
   >nova palavra</v-btn>
    </v-form >

   </v-card>
   
    </div>

</template>
<script >
export default{


data(){
   return{
   palavra:"",
   palavraDigitada:""





   }
},

methods:{



palavraAleatoria(){
  const palavralista = ["assado", "assadura", "assobio", "massa","missa","nosso","osso","passado","passagem","pássaro"];
  const palavranumero = Math.floor(Math.random() * palavralista.length);
  this.palavra=palavralista[palavranumero]

  return this.palavra},
play(){var audio = new Audio(require('../assets/'+this.palavra+'.mp3'));
return audio.play();
},
enviar(){
  if(this.palavra == this.palavraDigitada){
    return this.acerto()
  }else{
    return this.erro()
  }
},
acerto()
{ const somacerto="bell"
  var audio = new Audio(require('../assets/'+somacerto+'.wav'));
return audio.play()},
erro(){return console.log(this.palavraDigitada)}
}





}


</script>
<style >

</style>