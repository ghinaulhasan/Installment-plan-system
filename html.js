

// ======================

// function calculateInstallment() {
//   // Get the form values
//   let productPrice = parseFloat(document.getElementById('productPrice').value);
//   let interestRate = parseFloat(document.getElementById('interest').value);
//   let duration = parseInt(document.getElementById('duration').value);

//   // Validate input
//   if (!productPrice || !interestRate || !duration) {
//     alert("Please fill Out All Value!");
//     return;
//   }

// Calculate the interest and total cost monthly cost
//   let interestAmount = (productPrice * interestRate) / 100;
//   let totalCost = productPrice + interestAmount;
//   let monthlyInstallment = totalCost / duration;

// Display the results
//   document.getElementById('totalAmount').textContent = productPrice.toFixed(2);
//   document.getElementById('interestAmount').textContent = interestAmount.toFixed(2);
//   document.getElementById('totalCost').textContent = totalCost.toFixed(2);
//   document.getElementById('monthlyInstallment').textContent = monthlyInstallment.toFixed(2);

// Show the result section
//   document.getElementById('result').style.display = 'block';
// }


// Function to refresh the page
// function refreshPage() {
//   document.getElementById('installmentForm').reset(); // Reset form fields
//   document.getElementById('result').style.display = 'none'; // Hide result section
// }




// ================


// function calculateInstallment() {
//     // Get the form values
//     let productPrice = parseFloat(document.getElementById('productPrice').value);
//     let interestRate = parseFloat(document.getElementById('interest').value);
//     let duration = parseInt(document.getElementById('duration').value);

//     // Validate input
//     if (!productPrice || !interestRate || !duration) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     // Calculate the interest and total cost
//     let interestAmount = (productPrice * interestRate) / 100;
//     let totalCost = productPrice + interestAmount;
//     let monthlyInstallment = totalCost / duration;
//     let dailyInstallment = monthlyInstallment / 30;

//     // Display the results
//     document.getElementById('totalAmount').textContent = productPrice.toFixed(2);
//     document.getElementById('interestAmount').textContent = interestAmount.toFixed(2);
//     document.getElementById('totalCost').textContent = totalCost.toFixed(2);
//     document.getElementById('monthlyInstallment').textContent = monthlyInstallment.toFixed(2);
//     document.getElementById('dailyInstallment').textContent = dailyInstallment.toFixed(2);

//     // Show the result section
//     document.getElementById('result').style.display = 'block';
//    }

// //    =========================

//   function refreshPage() {
//     document.getElementById('installmentForm').reset(); // Reset form fields
//     document.getElementById('result').style.display = 'none'; // Hide result section
//     document.getElementById('breakdownTable').style.display = 'none'; // Hide breakdown table
//   }


// =======================

function calculateInstallment() {
  // Get the form values
  let productPrice = parseFloat(document.getElementById('productPrice').value);
  let interestRate = parseFloat(document.getElementById('interest').value);
  let duration = parseInt(document.getElementById('duration').value);

  // Validate input
  if (isNaN(productPrice) || productPrice <= 0) {
    alert("Please enter a valid product price!");
    return;
  }
  if (isNaN(interestRate) || interestRate < 0) {
    alert("Please enter a valid interest rate!");
    return;
  }
  if (isNaN(duration) || duration <= 0) {
    alert("Please enter a valid duration (greater than 0)!");
    return;
  }

  // Calculate the interest and total cost
  let interestAmount = (productPrice * interestRate) / 100;
  let totalCostWithInterest = productPrice + interestAmount;
  let monthlyInstallment = totalCostWithInterest / duration;
  let dailyInstallment = monthlyInstallment / 30;

  // Display the results
  document.getElementById('interestAmount').textContent = interestAmount.toFixed(2); // Show only interest
  document.getElementById('totalCost').textContent = totalCostWithInterest.toFixed(2); // Show total cost with interest
  document.getElementById('totalAmount').textContent = productPrice.toFixed(2); // Show original product price
  document.getElementById('monthlyInstallment').textContent = monthlyInstallment.toFixed(2);
  document.getElementById('dailyInstallment').textContent = dailyInstallment.toFixed(2);

  // Show the result section
  document.getElementById('result').style.display = 'block';

  // Scroll to the result section
  document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}


function refreshPage() {
  document.getElementById('installmentForm').reset(); // Reset form fields
  document.getElementById('result').style.display = 'none'; // Hide result section
  document.getElementById('breakdownTable').style.display = 'none'; // Hide breakdown table

  // Reload the page to reset everything
  window.location.reload();
}

