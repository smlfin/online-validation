const questions = [
    {
        question: "Which of the following companies is a Nidhi Company?",
        options: ["SML Nidhi Finance", "Vanchinad Finance Nidhi", "Sangeeth Nidhi", "All of the above"],
        answer: "Sangeeth Nidhi"
    },
    {
        question: "Which of the following statements is true about NBFCs and Nidhi companies?",
        options: [
            "NBFCs are regulated by the Ministry of Corporate Affairs (MCA), and Nidhi Companies are regulated by the RBI.",
            "NBFCs are regulated by the RBI, and Nidhi Companies are regulated by the Ministry of Corporate Affairs (MCA).",
            "Both NBFCs and Nidhi Companies are regulated by the RBI.",
            "Both NBFCs and Nidhi Companies are regulated by the Ministry of Corporate Affairs (MCA)."
        ],
        answer: "NBFCs are regulated by the RBI, and Nidhi Companies are regulated by the Ministry of Corporate Affairs (MCA)."
    },
    {
        question: "What is the full form of NCD?",
        options: ["Non-Convertible Deposit", "Non-Cash Debenture", "Non-Convertible Debenture", "National Credit Deposit"],
        answer: "Non-Convertible Debenture"
    },
    {
        question: "What does a 'put option' in an NCD mean?",
        options: [
            "The company has the option to buy back the NCD from the investor before the maturity date.",
            "The investor has the right to sell back (Redeem/Close) the NCD to the company before the maturity date.",
            "The company has the right to sell the NCD to another investor.",
            "The investor must hold the NCD until the maturity date."
        ],
        answer: "The investor has the right to sell back (Redeem/Close) the NCD to the company before the maturity date."
    },
    {
        question: "What does it mean for an NCD to be 'secured'?",
        options: [
            "The company guarantees a fixed interest rate for the entire period.",
            "The company promises to repay the investors with gold.",
            "The company pledges specific assets, as collateral to back the debenture, which can be used to repay investors if anything goes wrong.",
            "The NCD is protected by a government-backed insurance policy."
        ],
        answer: "The company pledges specific assets, as collateral to back the debenture, which can be used to repay investors if anything goes wrong."
    },
    {
        question: "What is the interest cut if a Vanchinad Finance NCD is closed between 1 and 2 years?",
        options: ["1%", "2%", "0.50%", "No cut"],
        answer: "2%"
    },
    {
        question: "What is the closure remark for SML Finance NCDs?",
        options: [
            "Closure allowed after 3 months.",
            "Closure allowed after 2 years.",
            "Closure allowed after 1 year.",
            "No premature closing allowed."
        ],
        answer: "Closure allowed after 1 year."
    },
    {
        question: "Which of the following products from SML Finance Ltd and Vanchinad Finance (P) Ltd does NOT allow premature closing?",
        options: ["NCD", "Sub Debt", "Fixed Deposit", "All of the above"],
        answer: "Sub Debt"
    },
    {
        question: "For a Sub Debt (SD) investment of 25 Lakhs or above with SML Finance, what is the yearly interest rate?",
        options: ["12.50%", "13.50%", "14.50%", "13.00%"],
        answer: "14.50%"
    },
    {
        question: "What is the period for a Doubling Scheme Golden Bond?",
        options: ["66 Months", "60 Months", "72 Months", "70 Months"],
        answer: "70 Months"
    },
    {
        question: "What is the reason given for the high-interest rates offered by the companies?",
        options: [
            "The loans are provided to government institutions.",
            "The loans are for long periods, which allows for higher interest collection.",
            "The company primarily lend short-term, secured loans against liquid assets like gold.",
            "The companies have a high NPA, which they compensate for with higher interest rates."
        ],
        answer: "The company primarily lend short-term, secured loans against liquid assets like gold."
    },
    {
        question: "Which of the following documents is required for a Sangeeth Nidhi Fixed Deposit but not for an NCD?",
        options: ["PAN Card", "Aadhaar Card", "Client Master Report (CMR)", "Share Form"],
        answer: "Share Form"
    },
    {
        question: "Which category of customer has to submit Form 15H?",
        options: [
            "Normal Category (age below 60 years)",
            "Senior Citizen Category (age above 60 years)",
            "Super Senior Citizen Category (age above 80 years)",
            "Both Senior and Super Senior Citizen categories"
        ],
        answer: "Both Senior and Super Senior Citizen categories"
    },
    {
        question: "What is the annual interest threshold above which Normal Category customers (age below 60) have to submit Form 15G?",
        options: ["₹2,50,000", "₹3,00,000", "₹5,000", "₹5,00,000"],
        answer: "₹2,50,000"
    },
    {
        question: "What is the incentive percentage for SML Finance and Vanchinad Finance on a Golden Bond?",
        options: ["0.50%", "1% PA", "2%", "5%"],
        answer: "2%"
    },
    {
        question: "How often is the incentive for NCDs paid out by SML Finance?",
        options: ["One Time", "Yearly", "Monthly", "Quarterly"],
        answer: "Monthly"
    },
    {
        question: "What is the total incentive income for a 10 Lakhs NCD that closes in 3 years?",
        options: ["₹8,333", "₹10,000", "₹30,000", "₹55,000"],
        answer: "₹30,000"
    },
    {
        question: "What is the incentive percentage for Sangeeth Nidhi Fixed Deposits?",
        options: ["5%", "0.50%", "1%", "2%"],
        answer: "0.50%"
    },
    {
        question: "For a Sangeeth Nidhi Fixed Deposit with a period of 2 years, what is the yearly interest rate?",
        options: ["9%", "12%", "12.5%", "11.50%"],
        answer: "11.50%"
    },
    {
        question: "Which of the following is a key reason why an investor's money is considered safe with SML and Vanchinad Finance?",
        options: [
            "They only lend to large corporations with excellent credit scores.",
            "Their main business is lending against gold, which is a liquid asset.",
            "They are government-owned and therefore have state backing.",
            "They offer government-backed insurance on all investments."
        ],
        answer: "Their main business is lending against gold, which is a liquid asset."
    },
    {
        question: "What is the monthly interest rate for a SML Finance NCD with an amount of 15 lakhs and above?",
        options: ["12.5%", "13%", "13.5%", "14.5%"],
        answer: "13%"
    },
    {
        question: "What is the penalty for a customer who closes a Vanchinad NCD after 3 years?",
        options: ["2% interest cut", "1% interest cut", "9% interest cut for the last 6 months", "No cut"],
        answer: "No cut"
    },
    {
        question: "If a customer says, 'I don't have a Demat account,' which of the following is a valid statement?",
        options: [
            "Demat Support is provided by us",
            "Customer can invest through NSDL account",
            "Customer has to open CDSL account by their own"
        ],
        answer: "Demat Support is provided by us"
    },
    {
        question: "What is the yearly interest rate for Sangeeth Nidhi Recurring Deposit (RD), for a period of 2 years?",
        options: ["5%", "9%", "10%", "12.5%"],
        answer: "10%"
    },
    {
        question: "Which of the following is NOT required for a Sangeeth Nidhi FD/RD?",
        options: ["Aadhaar Card", "Client Master Report (CMR)", "Share Money", "KYC Form"],
        answer: "Client Master Report (CMR)"
    },
    {
        question: "Which are the 3 financial Institutions of SML Group?",
        options: [
            "SML Finance, Vanchinad Finance, Sangeeth Nidhi",
            "SML Finance, Vanchinad Finance, SML Solar",
            "SML Finance, Vanchinad Finance, Ayur Bethaniya"
        ],
        answer: "SML Finance, Vanchinad Finance, Sangeeth Nidhi"
    },
    {
        question: "For Sangeeth Nidhi Recurring Deposits, what is the incentive for an employee?",
        options: [
            "5% of first EMI & 2% of first EMI from 2nd year onwards",
            "5% of first EMI & 10% of first EMI from 2nd year onwards",
            "10% of first EMI & 5% of first EMI from 2nd year onwards",
            "2% PA"
        ],
        answer: "10% of first EMI & 5% of first EMI from 2nd year onwards"
    },
    {
        question: "A customer with an annual interest income of above ₹3,50,000 is a Senior Citizen. Which form should they submit to avoid TDS, and is it accepted?",
        options: [
            "Form 15G; it is accepted.",
            "Form 15H; it is accepted.",
            "Form 15G; it is not accepted.",
            "Form 15H; it is not accepted, and 10% TDS will be applied."
        ],
        answer: "Form 15H; it is not accepted, and 10% TDS will be applied."
    },
    {
        question: "What is the meaning of redeemable NCD?",
        options: [
            "Redeemable NCDs are those that the issuing company repays to investors at the end of the maturity period along with the agreed interest",
            "Redeemable NCDs can be freely sold back to the company at any time before maturity",
            "Redeemable NCDs mean the investor can withdraw the principal amount in parts whenever needed"
        ],
        answer: "Redeemable NCDs are those that the issuing company repays to investors at the end of the maturity period along with the agreed interest"
    },
    {
        question: "What are the interest payment modes in SML Finance NCD?",
        options: ["Monthly", "Annual", "Quarterly", "All of the above"],
        answer: "Monthly"
    },
    {
        question: "What is the correct statement about a Demat account and investing in SML Finance NCD?",
        options: [
            "A Demat account is not required for SML Finance NCD.",
            "Demat is required, the company can help a customer open a Demat account for free to invest in SML Finance NCD.",
            "A Demat account is only required for amounts above 15 Lakhs.",
            "Only Vanchinad NCD requires a Demat account."
        ],
        answer: "Demat is required, the company can help a customer open a Demat account for free to invest in SML Finance NCD."
    },
    {
        question: "What is a key difference between NCDs and FDs according to the training material?",
        options: [
            "NCDs are accepted by Nidhi Companies, while FDs are accepted by NBFCs.",
            "NCDs are debt instruments that can be converted into equity, while FDs cannot.",
            "NCDs are issued by NBFCs and FDs are accepted by Nidhi Companies.",
            "NCDs are regulated by the MCA, and FDs are regulated by the RBI."
        ],
        answer: "NCDs are issued by NBFCs and FDs are accepted by Nidhi Companies."
    }
];

let testQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let isSubmitting = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ── START TEST: No backend call at start. Test launches immediately. ──
// Duplicate prevention is enforced server-side at submission time only.
document.getElementById('detailsForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset state
    currentQuestionIndex = 0;
    userAnswers = {};
    isSubmitting = false;

    // Pick 20 random shuffled questions
    const pool = [...questions];
    shuffle(pool);
    testQuestions = pool.slice(0, 20);

    // Build question blocks
    const testForm = document.getElementById('testForm');
    testForm.innerHTML = '';

    testQuestions.forEach((q, index) => {
        const opts = [...q.options];
        shuffle(opts);

        const div = document.createElement('div');
        div.classList.add('question-block');
        div.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${opts.map(opt => `
                <label>
                    <input type="radio" name="question${index}" value="${opt}">
                    ${opt}
                </label>
            `).join('')}
        `;
        testForm.appendChild(div);
    });

    // Reset navigation buttons
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.disabled = false;
    nextBtn.textContent = 'Next';

    // Switch views
    document.getElementById('detailsForm').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';

    displayQuestion(0);
});

function displayQuestion(index) {
    const blocks = document.querySelectorAll('.question-block');
    blocks.forEach(b => b.style.display = 'none');
    blocks[index].style.display = 'block';

    // Restore saved answer when navigating back
    const saved = userAnswers[`question${index}`];
    if (saved) {
        document.getElementsByName(`question${index}`)
            .forEach(r => { if (r.value === saved) r.checked = true; });
    }

    document.getElementById('questionCounter').textContent =
        `Question ${index + 1} of ${testQuestions.length}`;
    document.getElementById('prevBtn').style.display = index > 0 ? 'inline-block' : 'none';
    document.getElementById('nextBtn').textContent =
        index === testQuestions.length - 1 ? 'Submit Answers' : 'Next';
}

document.getElementById('nextBtn').addEventListener('click', async function () {
    if (isSubmitting) return;

    const radios = document.getElementsByName(`question${currentQuestionIndex}`);
    if (!Array.from(radios).some(r => r.checked)) {
        alert('Please select an answer before proceeding.');
        return;
    }

    saveAnswer(currentQuestionIndex);

    if (currentQuestionIndex === testQuestions.length - 1) {
        this.disabled = true;
        this.textContent = 'Submitting...';
        isSubmitting = true;
        await submitTest();
    } else {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
});

document.getElementById('prevBtn').addEventListener('click', function () {
    saveAnswer(currentQuestionIndex);
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
});

function saveAnswer(index) {
    document.getElementsByName(`question${index}`)
        .forEach(r => { if (r.checked) userAnswers[`question${index}`] = r.value; });
}

async function submitTest() {
    let score = 0;
    const userResponses = {};

    testQuestions.forEach((q, index) => {
        const ans = userAnswers[`question${index}`] || '';
        const correct = ans === q.answer;
        if (correct) score += 2.5;
        userResponses[`Q${index + 1}`] = {
            question: q.question,
            your_answer: ans,
            correct_answer: q.answer,
            is_correct: correct
        };
    });

    const details = {
        name:        document.getElementById('name').value.trim(),
        code:        document.getElementById('code').value.trim(),
        designation: document.getElementById('designation').value.trim(),
        branch:      document.getElementById('branch').value.trim()
    };

    const grade = score >= 45 ? 'Excellent'
                : score >= 40 ? 'Good'
                : score >= 30 ? 'Average'
                : 'Poor';

    // ── Save to Google Sheet ──
    try {
        const res = await fetch('/.netlify/functions/submit-test', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ details, score, grade, userResponses })
        });
        const result = await res.json();
        if (res.status === 409) {
            console.warn('Duplicate submission:', result.error);
        } else if (!res.ok) {
            console.error('Backend error:', result.error);
        } else {
            console.log('Saved:', result.message);
        }
    } catch (err) {
        console.error('Network error — could not reach backend:', err);
    }

    // ── Always show results ──
    document.getElementById('testContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    document.getElementById('scoreDisplay').textContent = `Your score is: ${score} out of 50`;
    document.getElementById('gradeDisplay').textContent = `Your grade is: ${grade}`;

    if (score >= 30) {
        document.getElementById('certificateMessage').textContent =
            'Congratulations! You have passed the test.';
        document.getElementById('downloadCertificateBtn').style.display = 'block';

        document.getElementById('downloadCertificateBtn').addEventListener('click', () => {
            const examDate = new Date().toLocaleDateString('en-IN',
                { year: 'numeric', month: 'long', day: 'numeric' });

            const win = window.open('', 'Certificate', 'width=900,height=700');
            win.document.write(`<!DOCTYPE html><html><head><title>Certificate</title></head><body>
<style>
  body{font-family:'Times New Roman',serif;background:#f0f2f5;margin:0;padding:20px}
  .cert{width:800px;min-height:580px;border:20px solid #004d80;padding:30px;text-align:center;
        background:#fff;box-shadow:0 0 10px rgba(0,0,0,.5);margin:auto;position:relative;
        box-sizing:border-box;padding-bottom:100px}
  .cert-logo{position:absolute;top:20px;left:20px;width:90px}
  .cert h1{font-size:38px;color:#004d80;margin-top:40px;text-transform:uppercase;letter-spacing:2px}
  .cert h2{font-size:17px;color:#555;margin-top:5px}
  .cert p{font-size:17px;line-height:1.8;margin-top:12px}
  .emp-name{font-size:30px;font-weight:bold;color:#007bff;margin:15px 0}
  .sigs{display:flex;justify-content:space-around;position:absolute;bottom:25px;left:10%;width:80%}
  .sigs p{font-size:14px;margin:0;border-top:1px solid #343a40;padding-top:5px;width:130px;text-align:center}
</style>
<div class="cert">
  <img src="v.png" alt="Logo" class="cert-logo">
  <h1>Certificate of Completion</h1>
  <h2>SML Finance Class Room — Investment Products Training</h2>
  <p>This certifies that</p>
  <p class="emp-name">${details.name}</p>
  <p>has successfully completed the Investment Products Training Validation Test.</p>
  <p><strong>Employee Code:</strong> ${details.code} &bull;
     <strong>Designation:</strong> ${details.designation} &bull;
     <strong>Branch:</strong> ${details.branch}</p>
  <p><strong>Score:</strong> ${score} / 50 &bull; <strong>Grade:</strong> ${grade}</p>
  <p><strong>Date:</strong> ${examDate}</p>
  <div class="sigs">
    <div><p>HR Head</p></div>
    <div><p>Training Head</p></div>
  </div>
</div></body></html>`);
            win.document.close();
            win.print();
        });
    } else {
        document.getElementById('certificateMessage').textContent =
            `You scored ${score}/50. A minimum score of 30 is required to pass. Please re-attempt after further training.`;
    }

    document.getElementById('downloadResponseBtn').style.display = 'block';
    document.getElementById('downloadResponseBtn').addEventListener('click', () => {
        const blob = new Blob(
            [JSON.stringify({ employee: details, score, grade, responses: userResponses }, null, 2)],
            { type: 'application/json' }
        );
        const url = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement('a'),
            { href: url, download: `response_${details.code}.json` });
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}
