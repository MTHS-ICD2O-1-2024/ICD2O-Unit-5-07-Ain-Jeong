// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function does math by using given formula
 */
// eslint-disable-next-line no-unused-vars
function doMath () {
  let answer = 0

  // input
  const userNumber = parseFloat(document.getElementById('user-number').value)

  // process
  for (let counter = 1; counter <= userNumber; counter++) {
    answer += counter
  }

  // output
  document.getElementById('answer').innerHTML = 'Your answer is: ' + answer
}
