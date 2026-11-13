$('#acc-jq').on('click', '.acc-btn', function () {
  var $item = $(this).parent(), open = !$item.hasClass('open');
  $item.siblings().removeClass('open').children('.acc-btn').attr('aria-expanded', false);
  $item.toggleClass('open', open);
  $(this).attr('aria-expanded', open);
});

$('#tabs-jq').on('click', '[role=tab]', function () {
  var $tab = $(this);
  $tab.addClass('on').attr('aria-selected', true)
      .siblings().removeClass('on').attr('aria-selected', false);
  $tab.closest('.tabs').find('[role=tabpanel]').removeClass('on');
  $('#' + $tab.attr('aria-controls')).addClass('on');
});
