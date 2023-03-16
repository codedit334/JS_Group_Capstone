const commentCount = (section, temp) => {
    const items = Array.from(section.children);
    temp.innerText = items.length;
    return items;
  };
  
  export default commentCount;