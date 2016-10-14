/* globals $ */
$(function () {
  'use strict'

  $('table#studentlist tbody').on('click', 'button.confirm', function (ev) {
    $(this).parents('.dropdown-pane').foundation('close')
    const $row = $(this).parents('tr').addClass('callout alert')
    const uid = $row.data('uid')
    const rev = $row.data('rev')
    // TODO: delete rendus de référence
    $.ajax({
      url: '/_users/org.couchdb.user:' + uid + '?rev=' + rev,
      method: 'DELETE',
      error: function () { $row.removeClass('alert').addClass('secondary') },
      success: function () { $row.fadeOut(500, function () { $row.remove() }) }
    })
  })
})
