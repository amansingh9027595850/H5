function claimReward() {
    const progress = document.getElementById("pointsProgress");
    const pointsValue = document.getElementById("pointsValue");
  
    if (progress.value >= 100) {
      alert("🎉 Congratulations! You've claimed your reward!");
      progress.value = 0;
      pointsValue.textContent = "0 / 100 Points";
    } else {
      alert("You need 100 points to claim your reward.");
    }
  }
  