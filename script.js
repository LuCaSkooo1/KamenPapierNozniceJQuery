$(document).ready(function () {
	let username = "username"
	let userPoints = 0
	let result = ""

	$(".startBtn").click(function () {
		$("#modal").show()

		function computerChoice() {
			let random = Math.floor(Math.random() * 3)
			if (random == 0) {
				return "kamen"
			} else if (random == 1) {
				return "papier"
			} else {
				return "noznice"
			}
		}

		$("#objectBtn1").click(function () {
			result = compare("noznice", computerChoice())
			alert(result)
		})

		$("#objectBtn2").click(function () {
			result = compare("kamen", computerChoice())
			alert(result)
		})

		$("#objectBtn3").click(function () {
			result = compare("papier", computerChoice())
			alert(result)
		})

		function compare(me, opponent) {
			if (me === "kamen") {
				if (opponent === "kamen") {
					return "Remíza"
				} else if (opponent === "papier") {
					return "Prehral si!"
				} else if (opponent === "noznice") {
					return "Vyhral si!"
				}
			} else if (me === "papier") {
				if (opponent === "papier") {
					return "Remíza"
				} else if (opponent === "kamen") {
					return "Vyhral si!"
				} else if (opponent === "noznice") {
					return "Prehral si!"
				}
			} else if (me === "noznice") {
				if (opponent === "noznice") {
					return "Remíza"
				} else if (opponent === "papier") {
					return "Vyhral si!"
				} else if (opponent === "kamen") {
					return "Prehral si!"
				}
			}
		}
	})
	$("#close").click(function () {
		$("#modal").hide()
	})

	$("#usernameChange").click(function () {
		$("input").prop("disabled", false)
		$("#usernameChange").hide()
		$(".saveBtn").show()
	})

	$(".saveBtn").click(function () {
		$("input").prop("disabled", true)
		$(".saveBtn").hide()
		$("#usernameChange").show()
		username = $("input").val()
		$("#userScore").text(`${username} : ${userPoints}`)
	})
})
