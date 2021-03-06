/* globals $ */
$(function () {
  'use strict'
  $('button.confirm-delete[data-exid]').click(function (ev) {
    const $but = $(this)
    const exid = $but.data('exid')
    // const rev = $but.data('exrev')
    const $row = $but.parents('tr')
    console.log('exid:', exid, $row)
    $row.addClass('callout alert')
    // TODO: delete user references to exercice
    $.ajax({
      url: '/delete/' + exid,
      method: 'DELETE',
      error: function () {
        $row.removeClass('alert').addClass('secondary')
      },
      success: function () {
        $row.fadeOut(500, function () { $row.remove() })
      }
    })
  })
})
