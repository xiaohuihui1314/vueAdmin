const getParentsPath = (startTag, parentTagList = []) => {
  let path = event.path || (event.composedPath && event.composedPath())
  if (!path) {
    return path
  }

  if (!(startTag instanceof HTMLElement)) return console.error('receive only HTMLElement');
  if ('HTML' !== startTag.parentElement.nodeName) {
    const nodeName = startTag.nodeName.toLocaleLowerCase();
    const classNameStr = startTag.className.trim();
    let className = '';
    if (classNameStr) {
      className = classNameStr.split(' ').map(i => '.' + i).join('')
    }
    // parentTagList.push(startTag.parentNode)
    parentTagList.push(nodeName + className);
    return getParentsPath(startTag.parentNode, parentTagList)
  } else return parentTagList;
};
document.body.addEventListener('click', e => {
  const target = e.target;
  const parentList = getParentsPath(target);
  console.log(target);
  console.log(parentList);
});


