console.log("Hello world")

let birthday = ["when", "taeyoung", "birthday"]

console.log(birthday[2]);

function chatting() {
    input = document.getElementById("user").value.toLowerCase();
    console.log("This is user input: " + input);
    console.log("Converted to lowercase: " + input);
    runChatbot();
}


const chatbot = {
    respondTo(message) {
        const bestMatch = calculate(message, [
            {keywords: birthday, response: "November 8th"}
        ])
        return bestMatch ? bestMatch.response : defaultResponse;
    }
}

function calculate(input, keywordSets) {
    let bestMatches = [];
    let highestMatch = 0;

    // keywordSets.forEach(set => {
    //     const matchCount = set.keywords.filter(keyword => input.includes(keyword)).length;
    //     const matchPercentage = (matchCount / set.keywords.length) * 100;
    //     if (matchPercentage > highestMatch) {
    //         highestMatch = matchPercentage;
    //         bestMatches = [set];
    //     } else if (matchPercentage === highestMatch) {
    //         bestMatches.push(set);
    //     }
    // });
    // Loop through each set in keywordSets
for (let i = 0; i < keywordSets.length; i++) {
    // Access the current set
    const set = keywordSets[i];

    // console.log("Keywords size: " + keywordSets.length);
    // console.log("Counter of For Loop (Keywords): " + i);
    
    // Count how many keywords in the set match words in the input
    const matchCount = set.keywords.filter(keyword => input.includes(keyword)).length;
    
    // Calculate the percentage of keywords that matched
    const matchPercentage = (matchCount / set.keywords.length) * 100;

    // Check if this match percentage is higher than the highest we've seen
    if (matchPercentage > highestMatch) {
        // Update highestMatch with the new best percentage
        highestMatch = matchPercentage;
        // Set bestMatches to include only this current set
        bestMatches = [set];
    } else if (matchPercentage === highestMatch) {
        // If it's the same as the highest, add this set to bestMatches
        bestMatches.push(set);
    }
}


   
    if (highestMatch < 50 || (highestMatch === 100 && bestMatches.length > 1)) {
        return null;
    }
    return bestMatches[0];
}


function runChatbot() {
    const response = chatbot.respondTo(input);
    let answer = document.getElementById("answer");
    answer.textContent = response;
}
