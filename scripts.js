$('.logo').click(function () {
    window.location.href = "index.html"
})

$('#contact-form').submit(function (e) {
    e.preventDefault()
    alert('Dziękujemy, twoja wiadomość została wysłana')
    $(this).trigger("reset")
})

$('#form-signin').submit(function (e) {
    e.preventDefault()
    window.location.href = "index.html"
})