interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return (subject1.credits + subject2.credits) as unknown as MajorCredits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return (subject1.credits + subject2.credits) as unknown as MinorCredits;
}


console.log(sumMajorCredits({credits: 1, brand: 'major'}, {credits: 2, brand: 'major'}))
console.log(sumMinorCredits({credits: 1, brand: 'minor'}, {credits: 2, brand: 'minor'}))