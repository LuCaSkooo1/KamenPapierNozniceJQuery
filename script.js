$(document).ready(function () {
	let username = "username"
	let userPoints = 0

	$(".startBtn").click(function () {
		$("#modal").show()
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
