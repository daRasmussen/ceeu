const renderChildren = (children, target) => {
  if (children.length) {
    children.forEach((child) => {
      child.setTarget(target);
      child.render();
    });
  }
  return children;
};

export default renderChildren;
