$(document).ready(function() {
  var clicks = 0;
  var res = "pair";
  $(".box").click(function() {
    clicks += 1;
    if (clicks % 2 == 0) {
      res = "pair";
      $(this).unbind("click");
    } else {
      res = "impair";
      $(this).unbind("click");
    }
  });
  $(".box").click(function() {
    if (res == "pair") {
      $(this).html('O');
      $(this).addClass("rond");
      $(this).unbind("click");
    } else {
      $(this).html('X');
      $(this).addClass("croix");
      $(this).unbind("click");
    }
    if ($('#1').hasClass('croix') && $('#2').hasClass('croix') && $('#3').hasClass('croix')) {
      alert("croix gagne");
      $(".box").unbind("click");
    }
    if ($('#4').hasClass('croix') && $('#5').hasClass('croix') && $('#6').hasClass('croix')) {
      alert("croix gagne");
      $(".box").unbind("click");
    }
    if ($('#7').hasClass('croix') && $('#8').hasClass('croix') && $('#9').hasClass('croix')) {
      alert("croix gagne");
      $(".box").unbind("click");
    }
    if ($('#1').hasClass('croix') && $('#4').hasClass('croix') && $('#7').hasClass('croix')) {
      alert("croix gagne");
      $(".box").unbind("click");
    }
    if ($('#2').hasClass('croix') && $('#5').hasClass('croix') && $('#8').hasClass('croix')) {
      alert("croix gagne");
      $(".box").unbind("click");
    }
    if ($('#1').hasClass('croix') && $('#5').hasClass('croix') && $('#9').hasClass('croix')) {
      alert("croix gagne");
      $(".box").unbind("click");
    }
    if ($('#3').hasClass('croix') && $('#5').hasClass('croix') && $('#7').hasClass('croix')) {
      alert("croix gagne");
      $(".box").unbind("click");
    }
    if ($('#1').hasClass('rond') && $('#2').hasClass('rond') && $('#3').hasClass('rond')) {
      alert("rond gagne");
      $(".box").unbind("click");
    }
    if ($('#4').hasClass('rond') && $('#5').hasClass('rond') && $('#6').hasClass('rond')) {
      alert("rond gagne");
      $(".box").unbind("click");
    }
    if ($('#7').hasClass('rond') && $('#8').hasClass('rond') && $('#9').hasClass('rond')) {
      alert("rond gagne");
      $(".box").unbind("click");
    }
    if ($('#1').hasClass('rond') && $('#4').hasClass('rond') && $('#7').hasClass('rond')) {
      alert("rond gagne");
      $(".box").unbind("click");
    }
    if ($('#2').hasClass('rond') && $('#5').hasClass('rond') && $('#8').hasClass('rond')) {
      alert("rond gagne");
      $(".box").unbind("click");
    }
    if ($('#1').hasClass('rond') && $('#5').hasClass('rond') && $('#9').hasClass('rond')) {
      alert("rond gagne");
      $(".box").unbind("click");
    }
    if ($('#3').hasClass('rond') && $('#5').hasClass('rond') && $('#7').hasClass('rond')) {
      alert("rond gagne");
      $(".box").unbind("click");
    }
  });
  $('#rejouer').click(function() {
    location.reload();
});
});
