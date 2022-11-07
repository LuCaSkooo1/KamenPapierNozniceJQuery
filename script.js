let username = "username"
let computerPoints = 0
let result = ""
let userPoints = 0
let round = 1

class game {
	computerChoice() {
		let random = Math.floor(Math.random() * 3)
		if (random == 0) {
			return "kamen"
		} else if (random == 1) {
			return "papier"
		} else {
			return "noznice"
		}
	}

	gameStart() {
		this.opponentChoice = this.computerChoice()
		$("#modal").show()
	}

	rockPick() {
		result = this.compare("kamen", this.opponentChoice)
		$("#modal").hide()
		$("#resultModal").show()
		$("#resultMsg").text(result)
		$("#happening").text(
			`Zvolil si kameň zatiaľ čo počítač zvolil ${this.opponentChoice}`
		)
	}
	paperPick() {
		result = this.compare("papier", this.opponentChoice)
		$("#modal").hide()
		$("#resultModal").show()
		$("#resultMsg").text(result)
		$("#happening").text(
			`Zvolil si papier zatiaľ čo počítač zvolil ${this.opponentChoice}`
		)
	}
	scissorsPick() {
		result = this.compare("noznice", this.opponentChoice)
		$("#modal").hide()
		$("#resultModal").show()
		$("#resultMsg").text(result)
		$("#happening").text(
			`Zvolil si nožnice zatiaľ čo počítač zvolil ${this.opponentChoice}`
		)
	}
	compare(me, opponent) {
		if (me === "kamen") {
			if (opponent === "kamen") {
				return "Remíza"
			} else if (opponent === "papier") {
				computerPoints++
				$("#botScore").text(`BOT : ${computerPoints}`)
				return "Prehral si!"
			} else if (opponent === "noznice") {
				userPoints++
				$("#userScore").text(`${username} : ${userPoints}`)
				return "Vyhral si!"
			}
		} else if (me === "papier") {
			if (opponent === "papier") {
				return "Remíza"
			} else if (opponent === "kamen") {
				userPoints++
				$("#userScore").text(`${username} : ${userPoints}`)
				return "Vyhral si!"
			} else if (opponent === "noznice") {
				computerPoints++
				$("#botScore").text(`BOT : ${computerPoints}`)
				return "Prehral si!"
			}
		} else if (me === "noznice") {
			if (opponent === "noznice") {
				return "Remíza"
			} else if (opponent === "papier") {
				userPoints++
				$("#userScore").text(`${username} : ${userPoints}`)
				return "Vyhral si!"
			} else if (opponent === "kamen") {
				computerPoints++
				$("#botScore").text(`BOT : ${computerPoints}`)
				return "Prehral si!"
			}
		}
	}

	gameClose() {
		$("#modal").hide()
	}
	resultClose() {
		$("#resultModal").hide()
		let lastRound = result
		let html = "<li><span>" + "kolo: " + lastRound + "</span></li>"
		$(".historyText").append(html)
	}

	usernameChange() {
		$("input").prop("disabled", false)
		$("#usernameChange").hide()
		$(".saveBtn").show()
	}

	usernameSave() {
		$("input").prop("disabled", true)
		$(".saveBtn").hide()
		$("#usernameChange").show()
		username = $("input").val()
		$("#userScore").text(`${username} : ${userPoints}`)
	}
}

const Game = new game()
