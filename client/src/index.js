import _ from 'lodash';

 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', 'from Eric'], ' ');

   return element;
 }

 document.body.appendChild(component());