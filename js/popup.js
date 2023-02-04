$(document).ready(function () {
  /*Открыть модальное окно*/
  $(".main-btn").click(function () {
    $(".btn-overlay").css({ visibility: "visible", opacity: 1 });
    $(".btn-modal").css({ visibility: "visible", opacity: 1 });
  });
});
/*Закрыть модальное окно*/
$(".btn-close").click(function () {
  $(".btn-overlay").css({ visibility: "hidden", opacity: 0 });
  $(".btn-modal").css({ visibility: "hidden", opacity: 0 });
});
