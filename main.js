$(document).ready(function () {
    $(".btn1").click(function () {
        $("#fa-in").fadeOut();
    })

    const tex = "when the button is clicked will see text here";
    const ele = `<p>${tex}</p>`;
    $(".btn2").click(function () {
        $(".app").append(ele)
    })

    $(".btn3").click(function () {
        $(".colo").css("color", "red");
    })

});