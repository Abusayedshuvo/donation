const donation = () => {
  const history = document.getElementById("history");
  history.classList.add("hidden");

  const donation = document.getElementById("donation");
  donation.classList.remove("hidden");

  const donationBtn = document.getElementById("donation-btn");
  donationBtn.classList =
    "bg-[#B4F461] text-white font-semibold w-[150px] h-[49px] rounded-xl";
  const historyBtn = document.getElementById("history-btn");
  historyBtn.classList = "border-2 font-semibold w-[150px] h-[49px] rounded-xl";
};

const history = () => {
  const donation = document.getElementById("donation");
  donation.classList.add("hidden");

  const history = document.getElementById("history");
  history.classList.remove("hidden");

  const donationBtn = document.getElementById("donation-btn");
  donationBtn.classList =
    "border-2 font-semibold w-[150px] h-[49px] rounded-xl";
  const historyBtn = document.getElementById("history-btn");
  historyBtn.classList =
    "bg-[#B4F461] text-white font-semibold w-[150px] h-[49px] rounded-xl";
};

const allButtons = document.querySelectorAll("#donation button");
for (let btn of allButtons) {
  btn.addEventListener("click", function (event) {
    const btnId = btn.id;
    const inputId = event.target.parentNode.querySelector("input").id;
    const donAmount = event.target.parentNode.querySelector(".don-amount");
    let donAmountNum = parseInt(donAmount.innerText);
    handleDonation(donAmount, inputId, donAmountNum, event);
  });
}

const handleDonation = (donAmount, inputId, donAmountNum, event) => {
  const donInput = document.getElementById(inputId);
  const donationValue = parseInt(donInput.value);
  if (isNaN(donationValue)) {
    alert("Please enter a valid number");
    return;
  }

  donAmountNum = donAmountNum + donationValue;
  donAmount.innerText = donAmountNum;
  donInput.value = "";

  const totalAmount = document.getElementById("total-amount");
  const totalAmountInt = parseInt(totalAmount.innerText);
  totalAmount.innerText = totalAmountInt - donationValue;

  const history = document.getElementById("history");
  const card = document.createElement("div");
  card.classList = "border p-10 rounded-xl mb-5";
  const title = event.target.parentNode.querySelector("h4").innerText;
  card.innerHTML = `
    <p class="text-2xl mb-5 font-semibold">
          ${donAmountNum} Taka is ${title}
        </p>
        <p>
      Date :  ${new Date()}
        </p>
        `;
  history.appendChild(card);
};
