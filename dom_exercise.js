// Define a function named createList that takes one argument.
//   sites (object)
//
// The object has the following structure:
//    {
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      'TITLE': 'URL',
//      ...
//    }
// The function must return an <ul> element that contains <li> elements that
// each contain an <a> element. For example, given:
//    {
//      'Google': 'https://www.google.com',
//      'Facebook': 'https://www.facebook.com',
//      'GitHub': 'https://github.com',
//      'Galvanize': 'https://www.galvanize.com'
//    }
// It returns the following:
//    <ul>
//      <li><a href="https://www.google.com">Google</a></li>
//      <li><a href="https://www.facebook.com">Facebook</a></li>
//      <li><a href="https://github.com">GitHub</a></li>
//      <li><a href="https://www.galvanize.com">Galvanize</a></li>
//    </ul>
function createList(obj) {
  var unorderedList = document.createElement('ul');
  var list = document.createElement('li');
  var anchor = document.createElement('a');
  for (var keys in obj) {
    anchor.setAttribute('href', obj[keys]);
    anchor.innerHTML = keys;
    list.appendChild(anchor);
    unorderedList.appendChild(list).appendChild(anchor);
    console.log(anchor);
  }

  console.log(unorderedList);
  return unorderedList;
}

createList({
      Google: 'https://www.google.com',
      Facebook: 'https://www.facebook.com',
      GitHub: 'https://github.com',
      Galvanize: 'https://www.galvanize.com',
    });
