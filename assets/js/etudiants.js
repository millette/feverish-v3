/* globals $ */
$(function () {
  'use strict'

  $('table#studentlist tbody').on('click', 'button.confirm', function (ev) {
    $(this).parents('.dropdown-pane').foundation('close')
    const $row = $(this).parents('tr').addClass('callout alert')
    const uid = $row.data('uid')
    // const rev = $row.data('rev')
    // TODO: delete rendus de référence
    $.ajax({
      url: '/etudiant/org.couchdb.user:' + uid,
      method: 'DELETE',
      error: function (e) {
        // console.log('ERROR:', e, uid)
        $row.removeClass('alert').addClass('secondary')
      },
      success: function () {
        // console.log('SUCCESS:', uid)
        $row.fadeOut(500, function () { $row.remove() })
      }
    })
  })
})
