const paragraphs = [
    "Web development is a dynamic and ever-evolving field that encompasses the creation and maintenance of websites and web applications. It involves a combination of programming, design, and problem-solving skills to build interactive and user-friendly digital experiences. Web developers use a variety of technologies, such as HTML, CSS, and JavaScript, to structure and style web content, as well as to make it interactive and responsive. ",
    "Web development transforms pixels into functionality, a digital symphony. Innovations unravel as codes converse, creating virtual realms. Frameworks empower, a scaffold for creativity and precision dance. Design elements harmonize, orchestrating a user-friendly ballet. Collaboration unfolds in git repositories, where version control conducts symmetrical progress. Browser compatibility, the silent conductor, ensures seamless performances.",
    "Computer science, the algorithmic maestro, orchestrates the symphony of digital intelligence. Algorithms, the mathematical notes, compose the logic that guides computational performances. Data structures, the architectural frameworks, organize information in the grand database of computational memory. Programming languages, the expressive dialects, translate human ideas into executable code choreographies. Software development, the collaborative.",
    "Computer Science esemble and brings digital solutions to life in the software symphony. Cybersecurity, the vigilant guardian, defends against malicious actors in the digital theater. Artificial intelligence, the futuristic sonnet, explores machines emulating human cognitive functions. Machine learning, the adaptive dancer, refines its movements through experience and data interaction. Computer networks, the interconnected ballet, facilitate seamless communication.",
    "JavaScript, the virtuoso, orchestrates dynamic interactions on the web stage. APIs, the collaborative scripts, let different platforms perform a unified dance. Front-end aesthetics, the visual poetry, captivate audiences with pixel-perfect verses. Back-end logic, the behind-the-scenes maestro, orchestrates the server symphony. Content delivery networks, the swift messengers, ensure web pages perform a seamless ballet. Responsive images.",
    "Technology, the ever-advancing overture, conducts a transformative symphony in the human narrative. Innovation, the avant-garde movement, propels society forward with new technological crescendos. Digitalization, the electronic ballad, turns analog experiences into data-driven melodies. Connectivity, the networked ballet, intertwines global communities in a virtual dance of information exchange. Automation, the mechanical sonnet, introduces.",
    "Efficiency to tasks, orchestrating a seamless workflow. Emerging technologies, the futuristic prelude, beckon towards uncharted territories of possibility. Ethical considerations, the moral libretto, harmonize technology with societal values and responsibilities. User experience, the interactive poetry, shapes how individuals engage with the digital compositions of technology. Accessibility, the inclusive rhythm, ensures that the benefits of.",
    "Technology reach all corners of the human stage. Sustainable design, the ecological interlude, conducts technology's footprint to harmonize with environmental stewardship. Technology, an ongoing symphony, resonates across time, shaping the past, present, and future of human existence.Cybersecurity, the digital vigilante, stands as a guardian against the dark notes of cyber threats in the technological score. Cloud computing, the virtual ensemble.",
    "harmonizes vast computational power accessible from anywhere on the digital stage. Big data, the voluminous concerto, orchestrates insights from massive datasets, shaping informed decisions. Augmented reality, the immersive sonata, layers digital elements upon the physical world, blending reality and virtuality. Internet of Things (IoT), the interconnected minuet, choreographs smart devices to dance in a synchronized symphony. Quantum computing.",
    "the subatomic rhapsody, explores the potential of processing information beyond classical limits. Technological ethics, the moral compass, navigates the complexities of responsible innovation and usage. Disruptive technologies, the revolutionary cadenza, challenge traditional paradigms, birthing new landscapes of possibility. Tech entrepreneurship, the innovative solo, introduces bold ideas to the technological repertoire, shaping industries.",
    "HTML, the foundational script, structures the web canvas with elemental precision. Tags, the language artisans, sculpt content into a semantic masterpiece. Hyperlinks, the interconnected passages, weave a navigational tapestry across pages. Forms, the interactive dialogues, capture user input with orchestrated elegance. Attributes, the modifiers in HTML's sonnet, enhance elements with nuanced expressions. Validation, the code critic, ensures HTML.",
    "Problem-solving, the cognitive maestro, orchestrates mental acrobatics with analytical finesse. Identification, the opening movement, reveals the contours of the challenge on the problem-solving stage. Analysis, the intricate ballet, dissects the issue into its constituent elements for deeper understanding. Creativity, the avant-garde solo, introduces innovative leaps and bounds in search of solutions. Critical thinking, the discerning partner.",
    "Evaluates options with a discerning eye for effectiveness. Decision-making, the decisive finale, selects the most fitting resolution from the repertoire of possibilities. Implementation, the coordinated ensemble, brings the chosen solution to life on the practical stage. Adaptability, the improvisational solo, adjusts the approach when unexpected variations alter the problem-solving score. Collaboration, the group choreography, leverages collective intelligence.",
    "Compositions adhere to syntactic harmony. Semantic elements, the contextual poets, convey meaning through a structural verse. Document Object Model (DOM), the interpretive dancer, renders HTML dynamically on the browser stage. HTML5, the modern sonneteer, introduces multimedia elements to the web poetry. Accessibility attributes, the inclusive annotations, open the gates for a diverse audience. Metadata, the descriptive prologue, provides context and guidance for the HTML narrative.",
    "Communication, the linguistic ballet, weaves threads of understanding in the human tapestry. Verbal expression, the spoken sonnet, articulates thoughts with melodic clarity in the communication symphony. Nonverbal cues, the silent choreography, add nuance and depth to the conversation's dance. Active listening, the responsive partner, harmonizes the exchange with attentive engagement. Clarity, the communication conductor, ensures messages resonate without distortion in the conversational.",
    "Networks, the interconnected sonnet, weave a digital tapestry connecting the world in a symphony of communication. Internet protocols, the data conductors, facilitate the harmonious exchange of information across the global stage. Wireless connectivity, the untethered ballet, allows devices to pirouette seamlessly through the airwaves. Network topologies, the structured choreography, define the arrangement and communication patterns of interconnected devices. Routing algorithms.",
    "The navigational overture, guide data on its journey through the intricate pathways of the network. Bandwidth, the data flow crescendo, determines the volume of information that can traverse the network at any given time. Network security, the vigilant guardian, safeguards against unauthorized access and cyber intruders in the digital ensemble. Cloud networking, the virtual symphony, extends the capabilities of traditional networks into scalable and flexible realms. Internet of Things (IoT).",
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);