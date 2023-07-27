// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



//Factory Functions
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) { 
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
    },
    compareDNA(pAequor) {
      let count = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          count++;
        }
      }
      const percentage = Math.floor((count / this.dna.length) * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage}% DNA in common`);
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === 'C' || el === 'G');
      return cOrG.length / this.dna.length >= 0.6;
    },
    complementStrand() {
      const complement = [];
      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A':
            complement.push('T');
            break;
          case 'T':
            complement.push('A');
            break;
          case 'C':
            complement.push('G');
            break;
          case 'G':
            complement.push('C');
            break;
        }
      }
      return complement;
    }
  }    
}

//Create 30 instances of pAequor that can survive
const create30Instances = () => {
  const instances = [];
  let i = 1;
  while (instances.length < 30) {
    let instance = pAequorFactory(i, mockUpStrand());
    if (instance.willLikelySurvive()) {
      instances.push(instance);
    }
    i++;
  }
  return instances;
}

//console.log(create30Instances()); 
let new1 = pAequorFactory(1, mockUpStrand());
let new2 = pAequorFactory(2, mockUpStrand());
let new3 = pAequorFactory(3, mockUpStrand());
new1.compareDNA(new2);
new1.compareDNA(new3);








