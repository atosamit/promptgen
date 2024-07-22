document.getElementById('questionButton').addEventListener('click', () => {
    document.getElementById('questionSection').style.display = 'block';
    document.getElementById('customInputSection').style.display = 'none';
    generateQuestionList(questions);
});

document.getElementById('customInputButton').addEventListener('click', () => {
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('customInputSection').style.display = 'block';
});

function generateQuestionList(questions) {
    const questionList = document.getElementById("questionList");
    questionList.innerHTML = ""; // Clear existing list items

    questions.forEach((item, index) => {
        // Part 1: Display item.prompt with arrow up and down icon
        const part1Li = document.createElement("li");
        part1Li.classList.add("question-item");

        const part1TitleDiv = document.createElement("div");
        part1TitleDiv.classList.add("question-title");
        part1TitleDiv.textContent = item.prompt;
        part1TitleDiv.addEventListener('click', () => togglePart2(part1Li)); // Toggle part2 on click

        const part1IconDiv = document.createElement("div");
        part1IconDiv.classList.add("question-icon");
        part1IconDiv.innerHTML = '<span class="up-icon">▲</span><span class="down-icon">▼</span>';

        part1TitleDiv.appendChild(part1IconDiv);
        part1Li.appendChild(part1TitleDiv);

        // Part 2: Display item.prompt and item.question with copy icon
        const part2Li = document.createElement("li");
        part2Li.classList.add("question-item", "part2"); // Added 'part2' class

        const part2TitleDiv = document.createElement("div");
        part2TitleDiv.classList.add("question-title");
        part2TitleDiv.textContent = item.prompt;

        const part2DescriptionDiv = document.createElement("div");
        part2DescriptionDiv.classList.add("question-description");
        part2DescriptionDiv.innerHTML = `<h5>Generated Prompt:</h5> ${item.question}`;

        const part2IconDiv = document.createElement("div");
        part2IconDiv.classList.add("question-icon");
        part2IconDiv.innerHTML = '<span class="copy-icon"><img src="copy.png" alt="Copy"></span>';
        part2IconDiv.onclick = function() {
            copyQuestion(item.question, this);
        };

        part2TitleDiv.appendChild(part2IconDiv);
        part2Li.appendChild(part2TitleDiv);
        part2Li.appendChild(part2DescriptionDiv);

        part2Li.style.display = 'none'; // Hide part 2 initially
        questionList.appendChild(part1Li); // Add part 1
        questionList.appendChild(part2Li); // Add part 2
    });
}

function toggleQuestions() {
    const panel = document.getElementById("questionPanel");
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
}

function filterQuestions() {
    const searchBox = document.getElementById("searchBox");
    const filter = searchBox.value.toLowerCase();
    const questionList = document.getElementById("questionList");
    const questions = questionList.getElementsByTagName("li");

    Array.from(questions).forEach(function(question) {
        const text = question.textContent || question.innerText;
        const part2 = question.querySelector('.part2');
        if (text.toLowerCase().indexOf(filter) > -1) {
            question.style.display = "";
            if (filter) {
                question.querySelector('.part2').style.display = 'block';
                question.querySelector('.up-icon').style.display = 'inline';
                question.querySelector('.down-icon').style.display = 'none';
            }
        } else {
            question.style.display = "none";
        }
    });
}

function togglePart2(part1Li) {
    const part2Li = part1Li.nextElementSibling; // Get part 2

    if (part2Li.classList.contains('part2')) {
        if (part2Li.style.display === 'none') {
            part2Li.style.display = 'block';
            part1Li.querySelector('.up-icon').style.display = 'inline';
            part1Li.querySelector('.down-icon').style.display = 'none';
        } else {
            part2Li.style.display = 'none';
            part1Li.querySelector('.up-icon').style.display = 'none';
            part1Li.querySelector('.down-icon').style.display = 'inline';
        }
    }
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function copyFormattedPrompt() {
    const formattedPrompt = document.getElementById("formattedPrompt").innerText;
    copyToClipboard(formattedPrompt);
    showPopup(document.getElementById("copyButton"), "Copied!");
}

function copyQuestion(question, element) {
    copyToClipboard(question);
    showPopup(element, "Copied!");
}

function showPopup(element, message) {
    const popup = element.nextElementSibling;
    popup.textContent = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}

function handlePrompt3Change() {
    const prompt3Value = document.getElementById("prompt3").value;
    const prompt4Container = document.getElementById("prompt4Container");

    // Show/hide prompt4 based on prompt3 value
    prompt4Container.style.display = (prompt3Value === "true") ? "block" : "none";
}

function submitForm() {
    const project = document.getElementById("project").value;
    const prompt1 = document.getElementById("prompt1").value;
    const prompt2 = document.getElementById("prompt2").value;
    const prompt3 = document.getElementById("prompt3").value;
    const prompt4 = document.getElementById("prompt4").value;
    const prompt5 = document.getElementById("prompt5").value;
    
    let formattedPrompt = `I'm working as a ${prompt2} developer and working on ${project}. Can you please provide a solution for ${prompt1} in ${prompt2} technology?`;
    
    if (prompt3 === 'true') {
        formattedPrompt += ` Also, please write CSS code for the same. ${prompt4 ? `Follow these instructions: ${prompt4}` : '' }`;
    }
    
    formattedPrompt += prompt5 ? ` Also add functionality for: ${prompt5}` : '';

    document.getElementById("formattedPrompt").innerText = formattedPrompt;
}

document.getElementById("prompt3").addEventListener("change", handlePrompt3Change);

document.addEventListener('DOMContentLoaded', (event) => {
    handlePrompt3Change();
    generateQuestionList(questions);
});