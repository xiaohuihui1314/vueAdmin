const getParents = (startTag, parentTagList = []) => {
  if (!(startTag instanceof HTMLElement)) return console.error('receive only HTMLElement');
  if ('BODY' !== startTag.parentElement.nodeName) {
    const nodeName = startTag.nodeName.toLocaleLowerCase()
    const classNameStr = startTag.className.trim();
    let className = ''
    if(classNameStr){
      className = classNameStr.split(' ').map(i=>'.'+i).join('')
    }
    // parentTagList.push(startTag.parentNode)
    parentTagList.push(nodeName+className)

    return getParents(startTag.parentNode, parentTagList)
  } else return parentTagList;
};
let path = event.path || (event.composedPath && event.composedPath());
document.body.addEventListener('click', e => {
  const target = e.target;
  const parentList = getParents(target);
  console.log(target);
  console.log(parentList);
});
