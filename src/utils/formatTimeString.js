/**
strings = [  ]
strings = [ '22.03.2022' ]
strings = [ '22.03.2022', '25.03.2022' ]
*/

export function formatTimeStrings(strings) {
  if (strings.length > 1) {
    return `${strings[0]} - ${strings[strings.length - 1]}`
  }

  if (strings.length) {
    return `${strings[0]} - Till tomorrow`
  }

  return `None`;
}

