let candidateNum = +prompt("Enter the number of candidates: ");
let candidateList = [];

for (let i = 0; i < candidateNum; i++) {
    let candidate = prompt(`Enter the name of candidate ${i + 1}: `);
    candidateList.push({ name: candidate, votes: 0 });
}

let voterNum = +prompt("Enter the number of voters: ");

for (let i = 0; i < voterNum; i++) {
    let vote = prompt(`Enter the name of candidate you want to vote for: `);
    let candidate = candidateList.find((c) => c.name === vote);
    if (candidate) {
        candidate.votes++;
    } else {
        alert("Invalid candidate name");
    }
}

candidateList.sort((a, b) => b.votes - a.votes);
let winner = candidateList[0];

console.log(`The winner is ${winner.name} with ${winner.votes} votes`);
console.log("Candidates list: ");
candidateList.forEach((c) => console.log(`${c.name}: ${c.votes} votes`));
