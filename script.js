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

let count = 0;
const handleDonation = () => {
  const donInput = document.getElementById("don-input");
  let donAmount = document.getElementById("don-amount");

  const donationValue = parseInt(donInput.value);
  if (isNaN(donationValue)) {
    alert("Please enter a valid number");
    return;
  }

  count = count + donationValue;
  donAmount.innerText = count;
  donInput.value = "";

  const totalAmount = document.getElementById("total-amount");
  const totalAmountInt = parseInt(totalAmount.innerText);
  totalAmount.innerText = totalAmountInt - donationValue;
};
