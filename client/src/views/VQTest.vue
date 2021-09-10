<template lang="html">

<h1>Vitality Quotient Test</h1>
<h3>Test radi: {{user.name}}</h3>
<div class="row">
  <div class="card mx-auto">
<div class="card-body">

<form @submit.prevent="submitVQTest">
    <div class="form-group">
      <h3>Question 1</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans1a" id="ans1a" v-model="ans1" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
        Uvek tražim nove mogućnosti
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans1b" id="ans1b" v-model="ans1" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Оno u čemu najviše uživam je da budem u miru sa samim sobom
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 2</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans2a" id="ans2a" v-model="ans2" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Cenim ono što imam
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans2b" id="ans2b" v-model="ans2" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Kreiram sam svoj pritisak
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 3</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans3a" id="ans3a" v-model="ans3" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Ја sam često zabrinut i zaokupljen
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans3b" id="ans3b" v-model="ans3" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Ja se nerviram u odnosu sa agresivnim ljudima
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 4</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans4a" id="ans4a" v-model="ans4" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Јеdno od mojih najvećih zadovoljstva dolazi u postizanju (ostvarenju) rezultata
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans4b" id="ans4b" v-model="ans4" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Strpljenje je ključ uspeha
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 5</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans5a" id="ans5a" v-model="ans5" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Vreme rešava većinu problema
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans5b" id="ans5b" v-model="ans5" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Uživam u radu veoma mnogo
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 6</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans6a" id="ans6a" v-model="ans6" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Uživanje u ispunjavajućem životu je jedan od mojih prioriteta
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans6b" id="ans6b" v-model="ans6" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Sebe ,,guram dalje’’
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 7</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans7a" id="ans7a" v-model="ans7" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Izazivam sve što se može uzeti zdravo za gotovo (pretpostavke)
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans7b" id="ans7b" v-model="ans7" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Prihvatanje sebe je važno za mene
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 8</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans8a" id="ans8a" v-model="ans8" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Ја sam u оsnovi samozahtevna osoba
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans8b" id="ans8b" v-model="ans8" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Slažem se da postoje stvari koje ne mogu da čekaju sutra
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 9</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans9a" id="ans9a" v-model="ans9" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Verujem da, sve u svemu, život nije fer
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans9b" id="ans9b" v-model="ans9" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Ја vidim svoj život kao stalni poziv za više
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 10</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans10a" id="ans10a" v-model="ans10" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Često se osećam da nisam uradio dovoljno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans10b" id="ans10b" v-model="ans10" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Da živim i pustim da se stvari dešavaju je dobar moto
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 11</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans11a" id="ans11a" v-model="ans11" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Stalno treba da se krećem napred sa svojim projektima
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans11b" id="ans11b" v-model="ans11" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Uopšte, zadovoljan sam onim što sam Ja i šta radim
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 12</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans12a" id="ans12a" v-model="ans12" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Retko se osećam krivim
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans12b" id="ans12b" v-model="ans12" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Verujem da je život borba
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 13</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans13a" id="ans13a" v-model="ans13" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Lako se mogu osećati zabrinuto
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans13b" id="ans13b" v-model="ans13" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          ,,Prepustiti se’’ je znak inteligencije
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 14</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans14a" id="ans14a" v-model="ans14" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Mogu biti vrlo tvrdoglav
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans14b" id="ans14b" v-model="ans14" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Ne volim da budem u centru pažnje
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 15</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans15a" id="ans15a" v-model="ans15" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Volim da učinim da se stvari dese
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans15b" id="ans15b" v-model="ans15" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Iritiraju me Ljudi koji nikad nisu zadovoljni
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 16</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans16a" id="ans16a" v-model="ans16" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Kad sam na odmoru, volim da se opustim i uživam
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans16b" id="ans16b" v-model="ans16" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Ja sam privučen ,,intenzivno živim ljudima’’
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 17</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans17a" id="ans17a" v-model="ans17" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Uvek želim više od života
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans17b" id="ans17b" v-model="ans17" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Verujem da nismo uvek slobodni da odlučujemo
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 18</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans18a" id="ans18a" v-model="ans18" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Uživam u društvu ljudi koji cene život
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans18b" id="ans18b" v-model="ans18" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Na odmoru, ne mogu baš da se ,,isključim’’
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 19</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans19a" id="ans19a" v-model="ans19" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Sanjam o mogućnostima i alternativama svo vreme
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans19b" id="ans19b" v-model="ans19" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Poštujem lekcije iz prošlosti
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 20</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans20a" id="ans20a" v-model="ans20" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Uživam samo da osetim svet oko mene
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans20b" id="ans20b" v-model="ans20" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Cenim ono što je novo
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 21</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans21a" id="ans21a" v-model="ans21" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Uživam da ,,rastem’’ i ,,postajem’’
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans21b" id="ans21b" v-model="ans21" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Ja sam uveren da ,,suštinski’’ život ne može da se menja
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 22</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans22a" id="ans22a" v-model="ans22" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Verujem da raditi treba biti zabavno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans22b" id="ans22b" v-model="ans22" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Moram biti deo onoga što se dešava u svetu
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 23</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans23a" id="ans23a" v-model="ans23" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Stvari bi bile bolje ako bi ljudi naučili da efikasnije rade zajedno
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans23b" id="ans23b" v-model="ans23" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Ja sam ubeđen da se volja nikad ne menja
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 24</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans24a" id="ans24a" v-model="ans24" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Verujem da je nekad bolje ,,uzdržati se od glume’’
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans24b" id="ans24b" v-model="ans24" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Često se osećam nestrpljivo
        </label>
      </div>
    </div>
    <div class="form-group">
      <h3>Question 25</h3>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans25a" id="ans25a" v-model="ans25" value="A">
        <label class="form-check-label" for="flexRadioDefault1">
          Ljudi treba da uče da vole jedni druge više
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="ans25b" id="ans25b" v-model="ans25" value="B">
        <label class="form-check-label" for="flexRadioDefault2">
          Preferiram više rad nego zabavu
        </label>
      </div>
    </div>

  <button class="btn btn-primary">Submit</button>

</form>
</div>
  </div>
  </div>

</template>

<script>
import {mapActions,mapGetters} from 'vuex';

export default {
  computed: mapGetters(['user']),
  data(){
    return{
      ans1:"A",
      ans2:"A",
      ans3:"A",
      ans4:"A",
      ans5:"A",
      ans6:"A",
      ans7:"A",
      ans8:"A",
      ans9:"A",
      ans10:"A",
      ans11:"A",
      ans12:"A",
      ans13:"A",
      ans14:"A",
      ans15:"A",
      ans16:"A",
      ans17:"A",
      ans18:"A",
      ans19:"A",
      ans20:"A",
      ans21:"A",
      ans22:"A",
      ans23:"A",
      ans24:"A",
      ans25:"A",
      name:""
    };
  },
  methods:{
    ...mapActions(['submitVQ','getProfile']),
    submitVQTest(){
    //  console.log(this.username,this.password)
      // eslint-disable-next-line no-unused-vars
    let vqData = {
      ans1:this.ans1,
      ans2:this.ans2,
      ans3:this.ans3,
      ans4:this.ans4,
      ans5:this.ans5,
      ans6:this.ans6,
      ans7:this.ans7,
      ans8:this.ans8,
      ans9:this.ans9,
      ans10:this.ans10,
      ans11:this.ans11,
      ans12:this.ans12,
      ans13:this.ans13,
      ans14:this.ans14,
      ans15:this.ans15,
      ans16:this.ans16,
      ans17:this.ans17,
      ans18:this.ans18,
      ans19:this.ans19,
      ans20:this.ans20,
      ans21:this.ans21,
      ans22:this.ans22,
      ans23:this.ans23,
      ans24:this.ans24,
      ans25:this.ans25,
      name:this.user.name
    };
    this.submitVQ(vqData)
    .then(res=>{
      if(res.data.success){
        this.$router.push('/profile');
      }
    }).catch(err =>{
      console.log(err);
    });
    }
  },
  created(){
    this.getProfile();
  }
};
</script>

<style lang="css" scoped>
</style>
