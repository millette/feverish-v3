/* globals $ */
$(function () {
  'use strict'
  const $login = $('#titre-label')
  const $firstname = $('#firstname-label')
  const $lastname = $('#lastname-label')
  const makeLogin = function (firstname, lastname) {
    const parts0 = firstname.split(' ')
    const parts1 = lastname.split(' ')
    return parts0[0] + ' ' + parts1[0]
  }
  $('.keyed').keyup(function (ev) { $login.val(makeLogin($firstname.val(), $lastname.val())) })
  $('.keyed').on('blur', function (ev) { $login.val(makeLogin($firstname.val(), $lastname.val())) })
})
