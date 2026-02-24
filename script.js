// ============================================================
//  STEP 1: Paste your deployed Apps Script Web App URL below.
//  (Deploy > New deployment > Web App > Anyone > Deploy > Copy URL)
// ============================================================
var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyi8e9vk4ZkqkhK7spkO1MDLlrz58edperXn9BbZCPUebv7RgPWPvcVi-sKx8PQPakN/exec';

// ── Question bank ─────────────────────────────────────────────
var questions = [
  {
    q: "Which of the following companies is a Nidhi Company?",
    opts: ["SML Nidhi Finance", "Vanchinad Finance Nidhi", "Sangeeth Nidhi", "All of the above"],
    a: "Sangeeth Nidhi"
  },
  {
    q: "Which of the following statements is true about NBFCs and Nidhi companies?",
    opts: [
      "NBFCs are regulated by the MCA, and Nidhi Companies are regulated by the RBI.",
      "NBFCs are regulated by the RBI, and Nidhi Companies are regulated by the MCA.",
      "Both NBFCs and Nidhi Companies are regulated by the RBI.",
      "Both NBFCs and Nidhi Companies are regulated by the MCA."
    ],
    a: "NBFCs are regulated by the RBI, and Nidhi Companies are regulated by the MCA."
  },
  {
    q: "What is the full form of NCD?",
    opts: ["Non-Convertible Deposit", "Non-Cash Debenture", "Non-Convertible Debenture", "National Credit Deposit"],
    a: "Non-Convertible Debenture"
  },
  {
    q: "What does a 'put option' in an NCD mean?",
    opts: [
      "The company has the option to buy back the NCD before maturity.",
      "The investor has the right to sell back / Redeem the NCD to the company after lock in but before maturity.",
      "The company has the right to sell the NCD to another investor.",
      "The investor must hold the NCD until the maturity date."
    ],
    a: "The investor has the right to sell back / Redeem the NCD to the company after lock in but before maturity."
  },
  {
    q: "What does it mean for an NCD to be 'secured'?",
    opts: [
      "The company guarantees a fixed interest rate for the entire period.",
      "The company promises to repay the investors with gold.",
      "The company pledges specific assets as collateral to back the debenture / NCD.",
      "The NCD is protected by a government-backed insurance policy."
    ],
    a: "The company pledges specific assets as collateral to back the debenture / NCD."
  },
  {
    q: "What is the interest cut if a Vanchinad Finance NCD is closed between 1 and 2 years?",
    opts: ["1%", "2%", "0.50%", "No cut"],
    a: "2%"
  },
  {
    q: "What is the closure remark for SML Finance NCDs?",
    opts: [
      "Closure allowed after 3 months.",
      "Closure allowed after 2 years.",
      "Closure allowed after 1 year with conditions.",
      "No premature closing allowed."
    ],
    a: "Closure allowed after 1 year with conditions."
  },
  {
    q: "Which product from SML Finance Ltd and Vanchinad Finance does NOT allow premature closing?",
    opts: ["NCD", "Sub Debt", "Fixed Deposit", "All of the above"],
    a: "Sub Debt"
  },
  {
    q: "For a Sub Debt investment of 25 Lakhs or above with SML Finance, what is the yearly interest rate?",
    opts: ["12.50%", "13.50%", "14.50%", "13.00%"],
    a: "14.50%"
  },
  {
    q: "What is the period for a Doubling Scheme Golden Bond?",
    opts: ["66 Months", "60 Months", "72 Months", "70 Months"],
    a: "70 Months"
  },
  {
    q: "What is the reason given for the high-interest rates offered by our companies?",
    opts: [
      "The loans are provided to government institutions.",
      "The loans are for long periods, which allows for higher interest collection.",
      "The company primarily lends short-term, secured loans against liquid assets like gold.",
      "The companies have a high NPA, which they compensate for with higher interest rates."
    ],
    a: "The company primarily lends short-term, secured loans against liquid assets like gold."
  },
  {
    q: "Which document is required for a Sangeeth Nidhi Fixed Deposit but NOT for an NCD?",
    opts: ["PAN Card", "Aadhaar Card", "Client Master Report (CMR)", "Share Form"],
    a: "Share Form"
  },
  {
    q: "Which category of customer has to submit Form 15H?",
    opts: [
      "Normal Category (age below 60 years)",
      "Senior Citizen Category (age above 60 years)",
      "Super Senior Citizen Category (age above 80 years)",
      "Both Senior and Super Senior Citizen categories"
    ],
    a: "Both Senior and Super Senior Citizen categories"
  },
  {
    q: "What is the annual interest threshold above which Normal Category customers (below 60) submit Form 15G?",
    opts: ["₹2,50,000", "₹4,00,000", "₹5,000", "₹5,00,000"],
    a: "₹4,00,000"
  },
  {
    q: "What is the incentive percentage for SML Finance and Vanchinad Finance on a Golden Bond?",
    opts: ["0.50%", "1% PA", "2%", "5%"],
    a: "2%"
  },
  {
    q: "How often is the incentive for NCDs paid out by SML Finance?",
    opts: ["One Time", "Yearly", "Monthly", "Quarterly"],
    a: "Monthly"
  },
  {
    q: "What is the total incentive income for a 10 Lakhs NCD that closes in 3 years?",
    opts: ["₹8,333", "₹10,000", "₹30,000", "₹55,000"],
    a: "₹30,000"
  },
  {
    q: "What is the incentive percentage for Sangeeth Nidhi Fixed Deposits?",
    opts: ["5%", "0.50%", "1%", "2%"],
    a: "0.50%"
  },
  {
    q: "For a Sangeeth Nidhi Fixed Deposit with a period of 2 years, what is the yearly interest rate?",
    opts: ["9%", "12%", "12.5%", "11.50%"],
    a: "11.50%"
  },
  {
    q: "Which is a key reason why an investor's money is considered safe with SML and Vanchinad Finance?",
    opts: [
      "They only lend to large corporations with excellent credit scores.",
      "Their main business is lending against gold, which is a liquid asset.",
      "They are government-owned and therefore have state backing.",
      "They offer government-backed insurance on all investments."
    ],
    a: "Their main business is lending against gold, which is a liquid asset."
  },
  {
    q: "What is the yearly interest rate for a SML Finance NCD with an amount of 15 lakhs and above?",
    opts: ["12.5%", "13%", "13.5%", "14.5%"],
    a: "13%"
  },
  {
    q: "What is the penalty for a customer who closes a Vanchinad NCD after 3 years?",
    opts: ["2% interest cut", "1% interest cut", "9% interest cut for the last 6 months", "No cut if closed on Anniversary Dates"],
    a: "No cut if closed on Anniversary Dates"
  },
  {
    q: "If a customer says 'I don't have a Demat account,' which is a valid statement?",
    opts: [
      "Demat Support is provided by us",
      "Customer can invest through NSDL account",
      "Customer has to open CDSL account by their own"
    ],
    a: "Demat Support is provided by us"
  },
  {
    q: "What is the yearly interest rate for Sangeeth Nidhi Recurring Deposit (RD), for a period of 2 years?",
    opts: ["5%", "9%", "10%", "12.5%"],
    a: "10%"
  },
  {
    q: "Which of the following is NOT required for a Sangeeth Nidhi FD/RD?",
    opts: ["Aadhaar Card", "Client Master Report (CMR)", "Share Money", "KYC Form"],
    a: "Client Master Report (CMR)"
  },
  {
    q: "Which are the 3 financial Institutions of SML Group?",
    opts: [
      "SML Finance, Vanchinad Finance, Sangeeth Nidhi",
      "SML Finance, Vanchinad Finance, SML Solar",
      "SML Finance, Vanchinad Finance, Ayur Bethaniya"
    ],
    a: "SML Finance, Vanchinad Finance, Sangeeth Nidhi"
  },
  {
    q: "For Sangeeth Nidhi Recurring Deposits, what is the incentive for an employee?",
    opts: [
      "5% of first EMI & 2% of first EMI from 2nd year onwards",
      "5% of first EMI & 10% of first EMI from 2nd year onwards",
      "10% of first EMI & 5% of first EMI from 2nd year onwards",
      "2% PA"
    ],
    a: "10% of first EMI & 5% of first EMI from 2nd year onwards"
  },
  {
    q: "A Senior Citizen has annual interest income above ₹4,00,000. Which form to avoid TDS, and is it accepted?",
    opts: [
      "Form 15G; it is accepted.",
      "Form 15H; it is accepted.",
      "Form 15G; it is not accepted.",
      "Form 15H; it is not accepted, and 10% TDS will be applied."
    ],
    a: "Form 15H; it is not accepted, and 10% TDS will be applied."
  },
  {
    q: "What is the meaning of redeemable NCD?",
    opts: [
      "Redeemable NCDs are repaid by the issuing company at maturity along with agreed interest",
      "Redeemable NCDs can be freely sold back to the company at any time after lock in & before maturity",
      "Redeemable NCDs mean the investor can withdraw the principal in parts whenever needed"
    ],
    a: "Redeemable NCDs can be freely sold back to the company at any time after lock in & before maturity"
  },
  {
    q: "What are the interest payment modes in SML Finance NCD?",
    opts: ["Monthly", "Annual", "Quarterly", "All of the above"],
    a: "Monthly"
  },
  {
    q: "What is the correct statement about a Demat account and investing in SML Finance NCD?",
    opts: [
      "A Demat account is not required for SML Finance NCD.",
      "Demat is required; the company can help open a Demat account for free.",
      "A Demat account is only required for amounts above 15 Lakhs.",
      "Only Vanchinad NCD requires a Demat account."
    ],
    a: "Demat is required; the company can help open a Demat account for free."
  },
  {
    q: "What is a key difference between NCDs and FDs?",
    opts: [
      "NCDs are accepted by Nidhi Companies, while FDs are accepted by NBFCs.",
      "NCDs are debt instruments that can be converted into equity, while FDs cannot.",
      "NCDs are issued by NBFCs and FDs are accepted by Nidhi Companies.",
      "NCDs are regulated by the MCA, and FDs are regulated by the RBI."
    ],
    a: "NCDs are issued by NBFCs and FDs are accepted by Nidhi Companies."
  }
];

// ── State ─────────────────────────────────────────────────────
var testQuestions = [];
var currentIndex  = 0;
var userAnswers   = {};
var isSubmitting  = false;

// ── Shuffle helper ────────────────────────────────────────────
function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
  }
  return arr;
}

// ── Start test on form submit — checks backend first ──────────
document.getElementById('detailsForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var code    = document.getElementById('code').value.trim();
  var btn     = this.querySelector('button[type="submit"]');
  btn.disabled    = true;
  btn.textContent = 'Checking...';

  fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    body:   JSON.stringify({ action: 'check', code: code })
  })
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if (res.status === 'duplicate') {
      alert('This Employee Code has already submitted the test. You cannot appear again.');
      btn.disabled    = false;
      btn.textContent = 'Start Test';
      return;
    }
    // new — proceed to test
    startTest();
  })
  .catch(function(err) {
    console.error('Check failed:', err);
    alert('Could not connect to server. Please check your internet and try again.');
    btn.disabled    = false;
    btn.textContent = 'Start Test';
  });
});

function startTest() {
  // Reset
  currentIndex = 0;
  userAnswers  = {};
  isSubmitting = false;

  // Pick 20 random questions
  testQuestions = shuffle(questions.slice()).slice(0, 20);

  // Build question blocks
  var form = document.getElementById('testForm');
  form.innerHTML = '';

  testQuestions.forEach(function(q, i) {
    var opts = shuffle(q.opts.slice());
    var div  = document.createElement('div');
    div.className = 'question-block';
    div.innerHTML = '<p>' + (i + 1) + '. ' + q.q + '</p>' +
      opts.map(function(o) {
        return '<label><input type="radio" name="q' + i + '" value="' + o + '"> ' + o + '</label>';
      }).join('');
    form.appendChild(div);
  });

  var nextBtn = document.getElementById('nextBtn');
  nextBtn.disabled    = false;
  nextBtn.textContent = 'Next';

  document.getElementById('detailsForm').style.display    = 'none';
  document.getElementById('testContainer').style.display  = 'block';
  showQuestion(0);
}

// ── Display one question ──────────────────────────────────────
function showQuestion(idx) {
  var blocks = document.querySelectorAll('.question-block');
  blocks.forEach(function(b) { b.style.display = 'none'; });
  blocks[idx].style.display = 'block';

  // Restore saved answer
  var saved = userAnswers['q' + idx];
  if (saved) {
    var radios = document.getElementsByName('q' + idx);
    for (var i = 0; i < radios.length; i++) {
      if (radios[i].value === saved) { radios[i].checked = true; break; }
    }
  }

  document.getElementById('questionCounter').textContent =
    'Question ' + (idx + 1) + ' of ' + testQuestions.length;
  document.getElementById('prevBtn').style.display =
    idx > 0 ? 'inline-block' : 'none';
  document.getElementById('nextBtn').textContent =
    idx === testQuestions.length - 1 ? 'Submit Answers' : 'Next';
}

// ── Save current answer ───────────────────────────────────────
function saveAnswer(idx) {
  var radios = document.getElementsByName('q' + idx);
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) { userAnswers['q' + idx] = radios[i].value; return; }
  }
}

// ── Next / Submit button ──────────────────────────────────────
document.getElementById('nextBtn').addEventListener('click', function() {
  if (isSubmitting) return;

  var radios   = document.getElementsByName('q' + currentIndex);
  var answered = false;
  for (var i = 0; i < radios.length; i++) { if (radios[i].checked) { answered = true; break; } }
  if (!answered) { alert('Please select an answer before proceeding.'); return; }

  saveAnswer(currentIndex);

  if (currentIndex === testQuestions.length - 1) {
    this.disabled    = true;
    this.textContent = 'Submitting...';
    isSubmitting     = true;
    submitTest();
  } else {
    currentIndex++;
    showQuestion(currentIndex);
  }
});

// ── Previous button ───────────────────────────────────────────
document.getElementById('prevBtn').addEventListener('click', function() {
  saveAnswer(currentIndex);
  currentIndex--;
  showQuestion(currentIndex);
});

// ── Calculate grade ───────────────────────────────────────────
function getGrade(score) {
  if (score >= 45) return 'Excellent';
  if (score >= 40) return 'Good';
  if (score >= 30) return 'Average';
  return 'Poor';
}

// ── Submit test → Apps Script ─────────────────────────────────
function submitTest() {
  var score = 0;
  testQuestions.forEach(function(q, i) {
    if ((userAnswers['q' + i] || '') === q.a) score += 2.5;
  });

  var grade = getGrade(score);
  var name        = document.getElementById('name').value.trim();
  var code        = document.getElementById('code').value.trim();
  var designation = document.getElementById('designation').value.trim();
  var branch      = document.getElementById('branch').value.trim();

  var payload = JSON.stringify({
    action:      'submit',
    name:        name,
    code:        code,
    designation: designation,
    branch:      branch,
    score:       score,
    grade:       grade
  });

  // Send to Apps Script (no-cors fetch)
  fetch(APPS_SCRIPT_URL, {
    method:  'POST',
    body:    payload
  })
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if (res.status === 'duplicate') {
      console.warn('Already submitted:', res.message);
    } else {
      console.log('Saved:', res.message);
    }
  })
  .catch(function(err) {
    console.error('Network error (result still shown):', err);
  });

  // ── Show results immediately — never blocked by network ──
  showResults(score, grade, name, code, designation, branch);
}

// ── Show result screen ────────────────────────────────────────
function showResults(score, grade, name, code, designation, branch) {
  document.getElementById('testContainer').style.display    = 'none';
  document.getElementById('resultsContainer').style.display = 'block';
  document.getElementById('scoreDisplay').textContent = 'Your score: ' + score + ' / 50';
  document.getElementById('gradeDisplay').textContent = 'Grade: ' + grade;

  if (score >= 30) {
    document.getElementById('certificateMessage').textContent =
      '🎉 Congratulations! You have passed the test.';
    var certBtn = document.getElementById('downloadCertificateBtn');
    certBtn.style.display = 'inline-block';
    certBtn.onclick = function() { printCertificate(name, code, designation, branch, score, grade); };
  } else {
    document.getElementById('certificateMessage').textContent =
      'You scored ' + score + '/50. Minimum 30 required to pass. Please re-attempt after further training.';
  }

  var dlBtn = document.getElementById('downloadResponseBtn');
  dlBtn.style.display = 'inline-block';
  dlBtn.onclick = function() {
    var rows = testQuestions.map(function(q, i) {
      var ans = userAnswers['q' + i] || '';
      return (i+1) + '. ' + q.q + '\n   Your answer : ' + (ans || '(none)') +
             '\n   Correct     : ' + q.a + '\n   Result      : ' + (ans === q.a ? '✓' : '✗');
    }).join('\n\n');

    var txt  = 'SML Finance — Investment Products Test Results\n' +
               '==============================================\n' +
               'Name: ' + name + '  |  Code: ' + code + '\n' +
               'Designation: ' + designation + '  |  Branch: ' + branch + '\n' +
               'Score: ' + score + '/50  |  Grade: ' + grade + '\n\n' + rows;

    var blob = new Blob([txt], { type: 'text/plain' });
    var a    = document.createElement('a');
    a.href   = URL.createObjectURL(blob);
    a.download = 'response_' + code + '.txt';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
  };
}

// ── Print certificate ─────────────────────────────────────────
function printCertificate(name, code, designation, branch, score, grade) {
  var date = new Date().toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' });
  var win  = window.open('', '_blank', 'width=950,height=720');
  win.document.write('<!DOCTYPE html><html><head><title>Certificate</title></head><body>' +
'<style>' +
'body{font-family:"Times New Roman",serif;background:#eef2f7;margin:0;padding:30px}' +
'.cert{width:820px;min-height:560px;margin:auto;background:#fff;border:18px solid #004d80;' +
'      padding:40px 50px 100px;text-align:center;box-shadow:0 4px 20px rgba(0,0,0,.2);' +
'      position:relative;box-sizing:border-box}' +
'.logo{position:absolute;top:22px;left:22px;width:80px}' +
'h1{font-size:38px;color:#004d80;text-transform:uppercase;letter-spacing:3px;margin-top:30px}' +
'h2{font-size:16px;color:#555;margin-top:4px;font-weight:normal}' +
'.line{width:60%;border:none;border-top:1px solid #ccc;margin:18px auto}' +
'.emp{font-size:28px;font-weight:bold;color:#007bff;margin:14px 0}' +
'p{font-size:16px;line-height:1.9;margin:6px 0}' +
'.sigs{display:flex;justify-content:space-around;position:absolute;bottom:30px;' +
'      left:10%;width:80%}' +
'.sigs div{text-align:center}' +
'.sigs span{display:block;border-top:1px solid #333;padding-top:6px;width:130px;font-size:14px}' +
'</style>' +
'<div class="cert">' +
'<img src="v.png" class="logo" alt="Logo">' +
'<h1>Certificate of Completion</h1>' +
'<h2>SML Finance Class Room &mdash; Investment Products Training</h2>' +
'<hr class="line">' +
'<p>This certifies that</p>' +
'<p class="emp">' + name + '</p>' +
'<p>has successfully completed the <strong>Investment Products Training Validation Test</strong>.</p>' +
'<p><strong>Employee Code:</strong> ' + code +
'  &bull; <strong>Designation:</strong> ' + designation +
'  &bull; <strong>Branch:</strong> ' + branch + '</p>' +
'<p><strong>Score:</strong> ' + score + ' / 50 &bull; <strong>Grade:</strong> ' + grade + '</p>' +
'<p><strong>Date:</strong> ' + date + '</p>' +
'<div class="sigs">' +
'  <div><span>HR Head</span></div>' +
'  <div><span>Training Head</span></div>' +
'</div></div>' +
'</body></html>');
  win.document.close();
  win.focus();
  win.print();
}
